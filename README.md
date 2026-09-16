# iCASH App

A React (Vite + TypeScript) build of the **iCASH App** design from Claude Design
(`design/iCASH App.dc.html`). It renders the same DOM and pixels as the prototype:
every screen, overlay, animation and interaction, including the Arabic mode.

## Run it

Needs Node 20.19 or newer. This Mac has Node 24 through nvm:

```sh
export PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH"   # or: nvm use 24
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

- `npm run build` — type-check and build to `dist/` (static files, deploy anywhere)
- `npm run preview` — serve the production build
- `npm run sync:design` — regenerate the app from `design/iCASH App.dc.html`

The passcode is **1234**; "Log in" on the welcome screen skips onboarding.

On a desktop browser the app sits inside the iPhone frame, exactly as in the design.
On a phone-sized screen (560px wide or less) the frame, caption, mock status bar and
home indicator are hidden and the 430×932 app is scaled to fill the screen.

## How it's put together

| Path | What it is |
| --- | --- |
| `design/` | The Claude Design source file and its runtime (`support.js`), kept for reference and re-syncing |
| `src/prototype/view.jsx` | Every screen as JSX, **generated** from the design template — don't edit by hand |
| `src/prototype/logic.js` | The design's state, data and interactions, carried over verbatim |
| `src/prototype/runtime.tsx` | A small React host that runs the logic exactly like Claude Design's runtime |
| `src/prototype/styles/` | The design's global CSS (fonts, keyframes, scrollbars) and Figma tokens |
| `src/shell/` | Phone-screen layout: hides the presentation frame and scales the app |
| `scripts/convert-template.mjs` | The design → React converter behind `npm run sync:design` |

## Updating from the design

1. Export a new handoff from Claude Design and replace `design/iCASH App.dc.html`.
2. Run `npm run sync:design` — it rewrites `view.jsx`, `logic.js` and `styles/app.css`.
3. Run `npm run dev` and check the change.

Changes made directly in `view.jsx`, `logic.js` or `styles/app.css` are overwritten by
a sync, so make visual and behavioural changes in the design file.
