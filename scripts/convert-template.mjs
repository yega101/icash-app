#!/usr/bin/env node
// Converts the Claude Design template in design/iCASH App.dc.html into
// src/prototype/view.jsx. It follows dc-runtime's compile step (design/support.js)
// so the React output renders the same DOM: the same elements, the same inline
// style values, `{{ }}` text wrapped in <span class="sc-interp">, and <sc-for>
// turned into keyed lists. Re-run with `npm run sync:design` after the design changes.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(resolve(root, 'design/iCASH App.dc.html'), 'utf8');
const start = source.indexOf('</helmet>');
const end = source.lastIndexOf('</x-dc>');
if (start < 0 || end < 0) throw new Error('Could not find the <x-dc> template body');

const INTERP = /\{\{([\s\S]+?)\}\}/g;
const RESERVED = new Set(['vals', '$s', '$t', '$each']);
const ATTR_NAMES = {
  class: 'className',
  for: 'htmlFor',
  onclick: 'onClick',
  onscroll: 'onScroll',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'vector-effect': 'vectorEffect',
};
const VOID = new Set(['br', 'img']);

// ---- expressions ----

function expr(raw, scope) {
  const path = raw.trim();
  if (!/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(path)) {
    throw new Error('Unsupported template expression: {{ ' + path + ' }}');
  }
  const [head, ...rest] = path.split('.');
  if (head === '$index') {
    const loop = scope[scope.length - 1];
    if (!loop) throw new Error('$index used outside <sc-for>');
    loop.usesIndex = true;
    return [loop.index, ...rest].join('.');
  }
  const local = scope.findLast((s) => s.name === head);
  return [local ? head : 'vals.' + head, ...rest].join('.');
}

const escapeTemplate = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

/** A string that may contain `{{ }}` holes, as a JS expression that yields a string. */
function interpolated(raw, scope) {
  let out = '`';
  let last = 0;
  for (const m of raw.matchAll(INTERP)) {
    out += escapeTemplate(raw.slice(last, m.index)) + '${$s(' + expr(m[1], scope) + ')}';
    last = m.index + m[0].length;
  }
  return out + escapeTemplate(raw.slice(last)) + '`';
}

function attrValue(raw, scope) {
  const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return '{' + expr(whole[1], scope) + '}';
  if (raw.includes('{{')) return '{' + interpolated(raw, scope) + '}';
  return /["\\&{}<>\n]/.test(raw) ? '{' + JSON.stringify(raw) + '}' : '"' + raw + '"';
}

// dc-runtime's cssToObj: split declarations on ";", camelCase the property, trim the value.
function styleValue(raw, scope) {
  const decls = new Map();
  for (const decl of raw.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const key = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const value = decl.slice(i + 1).trim();
    const whole = value.match(/^\{\{([\s\S]+?)\}\}$/);
    decls.set(
      key,
      whole
        ? '$s(' + expr(whole[1], scope) + ')'
        : value.includes('{{')
          ? interpolated(value, scope)
          : JSON.stringify(value),
    );
  }
  const body = [...decls]
    .map(([k, v]) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)) + ': ' + v)
    .join(', ');
  return '{{ ' + body + ' }}';
}

// ---- nodes ----

const isWhitespace = (node) => node.nodeName === '#text' && !node.value.trim();

function textParts(node, first, last) {
  let raw = node.value.replace(/\s+/g, ' ');
  if (first) raw = raw.trimStart();
  if (last) raw = raw.trimEnd();
  const parts = [];
  let at = 0;
  for (const m of raw.matchAll(INTERP)) {
    if (m.index > at) parts.push({ text: raw.slice(at, m.index) });
    parts.push({ hole: m[1] });
    at = m.index + m[0].length;
  }
  if (at < raw.length) parts.push({ text: raw.slice(at) });
  return parts;
}

function children(node, scope, indent) {
  const kids = node.childNodes.filter((c) => c.nodeName !== '#comment' && !isWhitespace(c));
  const inline = kids.every((c) => c.nodeName === '#text' || c.nodeName === 'br');
  const items = [];
  kids.forEach((kid, i) => {
    if (kid.nodeName === '#text') {
      for (const part of textParts(kid, i === 0, i === kids.length - 1)) {
        if (part.hole) items.push('{$t(' + expr(part.hole, scope) + ')}');
        else if (inline && !/[{}<>&]/.test(part.text)) items.push(part.text);
        else items.push('{' + JSON.stringify(part.text) + '}');
      }
    } else {
      items.push(element(kid, scope, inline ? '' : indent));
    }
  });
  return { items, inline };
}

function element(node, scope, indent) {
  if (node.nodeName === 'sc-for') return list(node, scope, indent);
  const tag = node.tagName;
  const props = [];
  for (const { name, value } of node.attrs) {
    if (name.startsWith('hint-')) continue;
    if (name === 'style') {
      props.push('style=' + styleValue(value, scope));
      continue;
    }
    const jsxName = ATTR_NAMES[name] || name;
    if (/^on/.test(jsxName) && !ATTR_NAMES[name]) throw new Error('Unmapped event attribute: ' + name);
    if (jsxName.includes('-') && !/^(data|aria)-/.test(jsxName)) throw new Error('Unmapped attribute: ' + name);
    props.push(jsxName + '=' + attrValue(value, scope));
  }
  const open = '<' + tag + (props.length ? ' ' + props.join(' ') : '');
  const { items, inline } = children(node, scope, indent + '  ');
  if (!items.length || VOID.has(tag)) return indent + open + ' />';
  if (inline) return indent + open + '>' + items.join('') + '</' + tag + '>';
  return indent + open + '>\n' + items.join('\n') + '\n' + indent + '</' + tag + '>';
}

function list(node, scope, indent) {
  const attr = (n) => node.attrs.find((a) => a.name === n)?.value ?? '';
  const whole = attr('list').match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (!whole) throw new Error('<sc-for list> must be a single {{ }} expression');
  const name = attr('as') || 'item';
  if (RESERVED.has(name)) throw new Error('<sc-for as="' + name + '"> collides with a generated name');
  const loop = { name, index: '$i' + (scope.length + 1), usesIndex: false };
  const listExpr = expr(whole[1], scope);
  const { items, inline } = children(node, [...scope, loop], indent + '    ');
  const params = loop.usesIndex ? '(' + name + ', ' + loop.index + ')' : '(' + name + ')';
  const single = items.length === 1 && !inline && !items[0].trim().startsWith('{');
  const body = single
    ? items[0]
    : indent + '    <>\n' + items.map((s) => (inline ? indent + '      ' + s : s)).join('\n') + '\n' + indent + '    </>';
  return indent + '{$each(' + listExpr + ', ' + params + ' => (\n' + body + '\n' + indent + '))}';
}

// ---- output ----

const frag = parseFragment(source.slice(start + '</helmet>'.length, end));
const roots = frag.childNodes.filter((c) => c.nodeName !== '#comment' && !isWhitespace(c));
if (roots.length !== 1 || roots[0].nodeName === '#text') throw new Error('Expected a single root element');

const out =
  '// GENERATED by scripts/convert-template.mjs from design/iCASH App.dc.html — do not edit by hand.\n' +
  '// Run `npm run sync:design` after updating the design file.\n' +
  "import { $each, $s, $t } from './runtime';\n\n" +
  'export default function renderView(vals) {\n' +
  '  return (\n' +
  element(roots[0], [], '    ') +
  '\n  );\n}\n';

writeFileSync(resolve(root, 'src/prototype/view.jsx'), out);
console.log('Wrote src/prototype/view.jsx (' + out.split('\n').length + ' lines)');

// The logic block and the helmet <style> are carried over verbatim.
const script = source.match(/<script type="text\/x-dc" data-dc-script[^>]*>\n([\s\S]*?)<\/script>/);
if (!script) throw new Error('Could not find <script data-dc-script>');
writeFileSync(
  resolve(root, 'src/prototype/logic.js'),
  '// iCASH App logic — the <script data-dc-script> block of design/iCASH App.dc.html,\n' +
    '// carried over verbatim. Only this header and the export at the bottom were added.\n' +
    "import { DCLogic } from './runtime';\n" +
    script[1] +
    'export default Component;\n',
);
console.log('Wrote src/prototype/logic.js');

const style = source.match(/<helmet[^>]*>[\s\S]*?<style>\n([\s\S]*?)<\/style>/);
if (!style) throw new Error('Could not find the helmet <style>');
writeFileSync(resolve(root, 'src/prototype/styles/app.css'), style[1]);
console.log('Wrote src/prototype/styles/app.css');
