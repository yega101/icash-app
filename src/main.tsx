import { createRoot } from 'react-dom/client';
import './prototype/styles/fig-tokens.css';
import './prototype/styles/app.css';
import './prototype/styles/runtime.css';
import './shell/device.css';
import { DCHost } from './prototype/runtime';
import Component from './prototype/logic.js';
import renderView from './prototype/view.jsx';
import { fitPhoneToViewport } from './shell/fit';

// Defaults from the design's data-props (Brand → accent, Prototype → startLocked).
const DESIGN_PROPS = { accent: '#2563EB', startLocked: true };

fitPhoneToViewport();

createRoot(document.getElementById('dc-root')!).render(
  <DCHost name="iCASH App" logic={Component} view={renderView} {...DESIGN_PROPS} />,
);
