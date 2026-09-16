// Re-links the bitmaps and mask glyphs that fig_materialize dropped from the
// Figma Home frame. Call figPatch(state) repeatedly until every key is true.
const A = './components/assets/';
const ROW_IMAGES = [
  ['Webflow', '2207c82ab3bde83b.png'],
  ['UI8', '6a22cc20e48555c7.png'],
  ['Linked', 'e55ea9ab5767ef6e.png'],
  ['Cash', 'c33fb8e8d75a718b.png'],
  ['Invest', 'a5ab4e42b7e20b2f.png'],
  ['Crypto', 'acd5643a7dab1068.png'],
];
const SEARCH_MASK = "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.96 17.583'%3E%3Cpath d='M13.736 11.477C15.588 8.591 15.252 4.708 12.728 2.184 9.816-.728 5.096-.728 2.184 2.184c-2.912 2.912-2.912 7.632 0 10.544 2.656 2.656 6.817 2.889 9.738.7l3.765 3.765c.52.52 1.363.52 1.883 0 .52-.52.52-1.363 0-1.883l-3.825-3.824zM11.319 3.593c2.133 2.134 2.133 5.592 0 7.726-2.134 2.133-5.592 2.133-7.726 0-2.133-2.134-2.133-5.592 0-7.726 2.134-2.133 5.592-2.133 7.726 0z'/%3E%3C/svg%3E\") center / 18px 18px no-repeat";
const CARD_MASK = "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2014%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20d%3D%22M%200%202.5%20C%200%201.119%201.119%200%202.5%200%20L%2017.5%200%20C%2018.881%200%2020%201.119%2020%202.5%20L%2020%203%20L%200%203%20L%200%202.5%20Z%20M%200%205%20L%2020%205%20L%2020%2011.5%20C%2020%2012.881%2018.881%2014%2017.5%2014%20L%202.5%2014%20C%201.119%2014%200%2012.881%200%2011.5%20L%200%205%20Z%20M%203%2010%20C%202.448%2010%202%2010.448%202%2011%20C%202%2011.552%202.448%2012%203%2012%20L%2011%2012%20C%2011.552%2012%2012%2011.552%2012%2011%20C%2012%2010.448%2011.552%2010%2011%2010%20L%203%2010%20Z%22%2F%3E%3C%2Fsvg%3E\") center / contain no-repeat";

const NAV_GLYPHS = {
  Home: { mask: "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22%23000%22%3E%3Cpath%20transform%3D%22translate(5.7%207.442)%22%20d%3D%22M%203.353%200%20L%200%200%20L%200%2013.558%20L%203.353%2013.558%20L%203.353%200%20Z%22%2F%3E%3Cpath%20transform%3D%22translate(5.7%203)%22%20d%3D%22M%208.91%2010.43%20C%2011.657%2010.292%2013.868%207.984%2013.868%205.218%20C%2013.868%202.341%2011.525%200%208.645%200%20L%200%200%20L%200%202.895%20L%208.234%202.895%20C%209.537%202.895%2010.617%203.919%2010.641%205.178%20C%2010.653%205.808%2010.416%206.402%209.975%206.852%20C%209.533%207.302%208.943%207.55%208.314%207.55%20L%205.106%207.55%20C%204.992%207.55%204.9%207.642%204.9%207.756%20L%204.9%2010.33%20C%204.9%2010.373%204.913%2010.415%204.939%2010.45%20L%2010.381%2018%20L%2014.365%2018%20L%208.91%2010.43%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") center / contain no-repeat", size: '20px 18px' },
  Transfers: { mask: "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020.021%2019.340%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%207.45%202.82%20L%2013.835%202.82%20L%2013.835%201.459%20C%2013.835%200.069%2014.835%20-0.433%2015.9%200.416%20L%2019.497%203.235%20C%2020.195%203.795%2020.195%204.819%2019.497%205.359%20L%2015.9%208.198%20C%2014.853%209.028%2013.835%208.584%2013.835%207.136%20L%2013.835%205.793%20L%207.45%205.793%20C%206.81%205.793%206.291%205.274%206.291%204.634%20L%206.291%203.978%20C%206.291%203.339%206.81%202.82%207.45%202.82%20Z%20M%2012.878%2013.546%20L%206.185%2013.546%20L%206.185%2012.185%20C%206.185%2010.795%205.323%2010.293%204.257%2011.142%20L%200.524%2013.961%20C%20-0.175%2014.521%20-0.175%2015.545%200.524%2016.085%20L%204.257%2018.924%20C%205.305%2019.754%206.185%2019.31%206.185%2017.862%20L%206.185%2016.519%20L%2012.878%2016.519%20C%2013.518%2016.519%2014.036%2016%2014.036%2015.36%20L%2014.036%2014.704%20C%2014.036%2014.065%2013.518%2013.546%2012.878%2013.546%20Z%22%2F%3E%3C%2Fsvg%3E\") center / contain no-repeat", size: '20px 19.34px' },
  Lifestyle: { mask: "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2018.574%2018.581%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%2011.166%201.751%20C%2012.089%200.828%2012.55%200.367%2013.072%200.169%20C%2013.666%20-0.056%2014.322%20-0.056%2014.916%200.169%20C%2015.438%200.367%2015.899%200.828%2016.822%201.751%20C%2017.746%202.675%2018.207%203.136%2018.405%203.658%20C%2018.63%204.252%2018.63%204.908%2018.405%205.502%20C%2018.207%206.024%2017.746%206.485%2016.822%207.408%20C%2015.899%208.331%2015.438%208.793%2014.916%208.991%20C%2014.322%209.216%2013.666%209.216%2013.072%208.991%20C%2012.55%208.793%2012.089%208.331%2011.166%207.408%20C%2010.243%206.485%209.781%206.024%209.583%205.502%20C%209.358%204.908%209.358%204.252%209.583%203.658%20C%209.781%203.136%2010.243%202.675%2011.166%201.751%20Z%20M%200.229%202.113%20C%200%202.622%200%203.275%200%204.581%20C%200%205.886%200%206.539%200.229%207.048%20C%200.49%207.627%200.954%208.091%201.533%208.351%20C%202.042%208.581%202.695%208.581%204%208.581%20C%205.305%208.581%205.958%208.581%206.467%208.351%20C%207.046%208.091%207.51%207.627%207.771%207.048%20C%208%206.539%208%205.886%208%204.581%20C%208%203.275%208%202.622%207.771%202.113%20C%207.51%201.534%207.046%201.07%206.467%200.81%20C%205.958%200.581%205.305%200.581%204%200.581%20C%202.695%200.581%202.042%200.581%201.533%200.81%20C%200.954%201.07%200.49%201.534%200.229%202.113%20Z%20M%2010.223%2012.113%20C%209.994%2012.622%209.994%2013.275%209.994%2014.58%20C%209.994%2015.886%209.994%2016.538%2010.223%2017.047%20C%2010.484%2017.627%2010.948%2018.09%2011.527%2018.351%20C%2012.036%2018.58%2012.689%2018.58%2013.994%2018.58%20C%2015.3%2018.58%2015.952%2018.58%2016.461%2018.351%20C%2017.04%2018.09%2017.504%2017.627%2017.765%2017.047%20C%2017.994%2016.538%2017.994%2015.886%2017.994%2014.58%20C%2017.994%2013.275%2017.994%2012.622%2017.765%2012.113%20C%2017.504%2011.534%2017.04%2011.07%2016.461%2010.809%20C%2015.952%2010.58%2015.3%2010.58%2013.994%2010.58%20C%2012.689%2010.58%2012.036%2010.58%2011.527%2010.809%20C%2010.948%2011.07%2010.484%2011.534%2010.223%2012.113%20Z%20M%200%2014.581%20C%200%2013.275%200%2012.622%200.229%2012.113%20C%200.49%2011.534%200.954%2011.07%201.533%2010.81%20C%202.042%2010.581%202.695%2010.581%204%2010.581%20C%205.305%2010.581%205.958%2010.581%206.467%2010.81%20C%207.046%2011.07%207.51%2011.534%207.771%2012.113%20C%208%2012.622%208%2013.275%208%2014.581%20C%208%2015.886%208%2016.539%207.771%2017.048%20C%207.51%2017.627%207.046%2018.091%206.467%2018.351%20C%205.958%2018.581%205.305%2018.581%204%2018.581%20C%202.695%2018.581%202.042%2018.581%201.533%2018.351%20C%200.954%2018.091%200.49%2017.627%200.229%2017.048%20C%200%2016.539%200%2015.886%200%2014.581%20Z%22%2F%3E%3C%2Fsvg%3E\") center / contain no-repeat", size: '18.574px 18.581px' },
};

const MASK_GLYPHS = {
  "27": {
    "mask": "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020.250%2013.890%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%2010.927%205.082%20L%201.51%205.082%20C%200.474%205.082%200%205.916%200%206.554%20L%200%207.265%20C%200%207.902%200.474%208.739%201.51%208.739%20L%2010.927%208.739%20L%2010.927%2012.336%20C%2010.927%2013.855%2012.461%2014.326%2013.692%2013.456%20L%2019.634%208.045%20C%2020.455%207.478%2020.455%206.405%2019.634%205.818%20L%2013.692%200.438%20C%2012.439%20-0.453%2010.927%200.068%2010.927%201.525%20L%2010.927%205.082%20Z%22%2F%3E%3C%2Fsvg%3E\")",
    "w": 20.25,
    "h": 13.89,
    "x": 3.375,
    "y": 6.554
  },
  "18.469": {
    "mask": "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2015.375%2012.919%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%209.821%201.551%20C%209.267%200.89%209.253%200.12%2010.524%200.119%20L%2014.509%200%20C%2015.064%20-0.011%2015.472%200.475%2015.355%201.01%20L%2014.543%204.922%20C%2014.323%206.115%2013.579%206.041%2013.002%205.352%20L%2011.986%204.138%20C%2011.986%204.138%208.735%205.63%208.735%209.833%20L%208.735%2012.149%20C%208.735%2012.574%208.391%2012.919%207.966%2012.919%20L%207.407%2012.919%20C%206.982%2012.919%206.637%2012.574%206.637%2012.149%20L%206.637%209.832%20C%206.637%205.63%203.388%204.14%203.388%204.14%20L%202.373%205.353%20C%201.796%206.042%201.106%206.04%200.832%204.922%20L%200.02%201.011%20C%20-0.097%200.476%200.311%20-0.011%200.865%200.001%20L%204.851%200.12%20C%206.145%200.12%206.107%200.89%205.554%201.552%20L%204.727%202.54%20C%205.638%203.439%207.147%204.487%207.686%205.63%20C%208.226%204.486%209.735%203.438%2010.647%202.538%20L%209.821%201.551%20Z%22%2F%3E%3C%2Fsvg%3E\")",
    "w": 15.375,
    "h": 12.919,
    "x": 1.547,
    "y": 2.775
  },
  "20.778": {
    "mask": "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2015.583%2010.689%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%208.409%203.911%20L%201.162%203.911%20C%200.365%203.911%200%204.553%200%205.044%20L%200%205.59%20C%200%206.081%200.365%206.725%201.162%206.725%20L%208.409%206.725%20L%208.409%209.493%20C%208.409%2010.662%209.589%2011.025%2010.537%2010.355%20L%2015.109%206.191%20C%2015.741%205.755%2015.741%204.929%2015.109%204.477%20L%2010.537%200.337%20C%209.572%20-0.349%208.409%200.052%208.409%201.174%20L%208.409%203.911%20Z%22%2F%3E%3C%2Fsvg%3E\")",
    "w": 15.583,
    "h": 10.689,
    "x": 2.597,
    "y": 5.044
  },
  "12": {
    "mask": "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2010.500%2010.500%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%2010.5%205.25%20C%2010.5%208.149%208.149%2010.5%205.25%2010.5%20C%202.351%2010.5%200%208.149%200%205.25%20C%200%202.351%202.351%200%205.25%200%20C%208.149%200%2010.5%202.351%2010.5%205.25%20Z%20M%209.266%205.066%20C%209.266%204.554%209.076%203.852%208.688%203.216%20C%208.49%202.891%208.312%203.092%208.312%203.092%20L%203.092%208.312%20C%203.092%208.312%202.877%208.481%203.216%208.688%20C%203.852%209.076%204.266%209.266%205.066%209.266%20C%207.385%209.266%209.266%207.385%209.266%205.066%20Z%20M%201.812%207.284%20C%202.015%207.618%202.199%207.419%202.199%207.419%20L%207.419%202.199%20C%207.419%202.199%207.61%202.011%207.284%201.812%20C%206.648%201.424%205.898%201.234%205.434%201.234%20C%203.115%201.234%201.234%203.115%201.234%205.434%20C%201.234%206.234%201.424%206.648%201.812%207.284%20Z%22%2F%3E%3C%2Fsvg%3E\")",
    "w": 10.5,
    "h": 10.5,
    "x": 0.75,
    "y": 0.75
  },
  "11.131": {
    "mask": "url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208.807%207.713%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M%205.768%206.39%20C%205.311%207.13%205.082%207.499%204.795%207.629%20C%204.544%207.742%204.263%207.742%204.012%207.629%20C%203.725%207.499%203.496%207.13%203.039%206.39%20L%200.827%202.811%20C%200.264%201.899%20-0.018%201.443%200.001%201.064%20C%200.018%200.734%200.166%200.429%200.406%200.229%20C%200.682%200%201.185%200%202.192%200%20L%206.615%200%20C%207.622%200%208.125%200%208.401%200.229%20C%208.641%200.429%208.789%200.734%208.806%201.064%20C%208.825%201.443%208.543%201.899%207.98%202.811%20L%205.768%206.39%20Z%22%2F%3E%3C%2Fsvg%3E\")",
    "w": 8.807,
    "h": 7.713,
    "x": 1.163,
    "y": 2.226
  }
};

function paint(svg, bg) {
  if (!svg || !svg.parentNode) return false;
  const d = document.createElement('div');
  d.setAttribute('style', (svg.getAttribute('style') || '') + ';background:' + bg + ';');
  d.setAttribute('data-fig-painted', '1');
  svg.parentNode.replaceChild(d, svg);
  return true;
}

function glyph(host, mask, box) {
  if (!host) return false;
  const b = box || { x: 0, y: 0, w: 24, h: 24 };
  host.innerHTML = '';
  const d = document.createElement('div');
  d.setAttribute('style', 'position:absolute;left:' + b.x + 'px;top:' + b.y + 'px;width:' + b.w + 'px;height:' + b.h + 'px;background:#fff;-webkit-mask:' + mask + ';mask:' + mask + ';');
  d.setAttribute('data-fig-painted', '1');
  host.appendChild(d);
  return true;
}

export function figPatch(done) {
    const spans = [...document.querySelectorAll('span')];
    const label = (t) => spans.find(x => x.textContent.trim() === t);

    // list-row logos
    ROW_IMAGES.forEach(([name, file]) => {
      if (done[name]) return;
      const s = label(name);
      if (!s) return;
      let n = s;
      for (let i = 0; i < 4 && n; i++) {
        n = n.parentElement;
        if (!n || n.querySelector('[data-fig-painted]')) break;
        const svg = [...n.querySelectorAll('svg')].find(x => x.getAttribute('width') === '40');
        if (svg) { done[name] = paint(svg, 'url(' + A + file + ') center / cover no-repeat'); return; }
      }
    });

    // header: avatar pair, search glyph, card glyph, and the row width
    const header = [...document.querySelectorAll('div')].find(x => /left: 16px; top: 56px/.test(x.getAttribute('style') || ''));
    if (header && !done.header) {
      header.style.width = '392px';
      [...header.children].forEach(ch => {
        if (/border-radius: 25px/.test(ch.getAttribute('style') || '')) {
          ch.style.width = '40px'; ch.style.minWidth = '40px'; ch.style.padding = '0';
          ch.style.boxSizing = 'border-box'; ch.style.flex = 'none'; ch.style.position = 'relative';
          [...ch.children].forEach(c => { c.style.position = 'absolute'; c.style.left = '0'; c.style.top = '0'; c.style.width = '40px'; c.style.height = '40px'; });
        }
      });
      const svgs = header.firstElementChild ? [...header.firstElementChild.querySelectorAll('svg')] : [];
      if (svgs.length >= 2) {
        paint(svgs[0], 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 100%), rgb(10,132,255)');
        paint(svgs[1], 'url(' + A + 'c7aa1be6f3b4f7db.jpg) center / cover no-repeat');
        const sq = (host) => host ? [...host.querySelectorAll('div')].find(x => /width: 24px; height: 24px/.test(x.getAttribute('style') || '')) : null;
        glyph(sq(header.children[1]), SEARCH_MASK, { x: 3.021, y: 3.208, w: 17.96, h: 17.583 });
        glyph(sq(header.children[3]), CARD_MASK, { x: 2, y: 5, w: 20, h: 14 });
        done.header = true;
      }
    }

    // "Spend this month" area chart — light grey gradient in the file, not black
    if (!done.chart) {
      const charts = [...document.querySelectorAll('svg')].filter(x => ['148.5', '147', '102', '100.5'].indexOf(x.getAttribute('width')) >= 0);
      charts.forEach(x => {
        x.style.color = 'rgba(217,217,217,0.5)';
        x.style.background = 'linear-gradient(180deg, rgba(217,217,217,0.5) 16.24%, rgba(199,199,199,0) 111.54%)';
      });
      if (charts.length) done.chart = true;
    }

    // first transaction row avatar
    if (!done.tx) {
      const tx = label('To Marvilo');
      if (tx) {
        let n = tx;
        for (let i = 0; i < 4 && n; i++) n = n.parentElement;
        const svg = n && [...n.querySelectorAll('svg')].find(x => x.getAttribute('width') === '40');
        done.tx = paint(svg, 'url(' + A + '777e51edfb920470.png) center / contain no-repeat');
      }
    }

    // bottom-nav mask glyphs dropped by the extraction (solid squares otherwise)
    if (!done.nav) {
      let hits = 0;
      Object.keys(NAV_GLYPHS).forEach(name => {
        const s = spans.filter(x => x.textContent.trim() === name).pop();
        if (!s) return;
        const item = s.parentElement;
        const host = item && [...item.querySelectorAll('div')].find(x => /width: 24px; height: 24px/.test(x.getAttribute('style') || ''));
        const cover = host && host.querySelector('svg');
        if (!cover) return;
        const tint = getComputedStyle(cover).color || 'rgb(117,128,138)';
        const g = NAV_GLYPHS[name];
        host.innerHTML = '';
        const d = document.createElement('div');
        d.setAttribute('style', 'position:absolute;inset:0;background:' + tint + ';-webkit-mask:' + g.mask + ';mask:' + g.mask + ';-webkit-mask-size:' + g.size + ';mask-size:' + g.size + ';');
        d.setAttribute('data-fig-painted', '1');
        host.appendChild(d);
        hits++;
      });
      if (hits === 3) done.nav = true;
    }

    // every remaining Figma mask group: the extraction kept only the tinted
    // full-bleed cover rect, so swap it for the file's real glyph
    if (!done.masks) {
      let n = 0;
      document.querySelectorAll('svg').forEach(cover => {
        const w = cover.getAttribute('width');
        const g = MASK_GLYPHS[w];
        if (!g || cover.getAttribute('height') !== w) return;
        const p = cover.querySelector('path');
        if (!p || !/^M 0 0 L /.test(p.getAttribute('d') || '')) return;
        const tint = getComputedStyle(cover).color;
        const d = document.createElement('div');
        d.setAttribute('style', 'position:absolute;left:' + g.x + 'px;top:' + g.y + 'px;width:' + g.w + 'px;height:' + g.h + 'px;background:' + tint +
          ';-webkit-mask:' + g.mask + ' center / contain no-repeat;mask:' + g.mask + ' center / contain no-repeat;');
        d.setAttribute('data-fig-painted', '1');
        cover.parentNode.replaceChild(d, cover);
        n++;
      });
      if (n >= 5) done.masks = true;
    }

    // card widget artwork
    if (!done.disposable) {
      const disp = label('Disposable');
      if (disp) {
        let n = disp.parentElement;
        for (let i = 0; i < 5 && n; i++, n = n.parentElement) {
          const svg = [...n.querySelectorAll('svg')].find(x => x.getAttribute('width') === '65');
          if (svg) { done.disposable = paint(svg, 'url(' + A + 'cc8f24a1097030c1.png) center / cover no-repeat'); break; }
        }
      }
    }
  }
