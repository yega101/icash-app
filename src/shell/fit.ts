// The design is drawn at 430×932. On phone-sized screens device.css lets it fill
// the viewport; --fit is the scale that maps the 430px design width to the device.
const DESIGN_WIDTH = 430;

export function fitPhoneToViewport() {
  const apply = () =>
    document.documentElement.style.setProperty('--fit', String(window.innerWidth / DESIGN_WIDTH));
  apply();
  window.addEventListener('resize', apply);
}
