// The design is drawn at 430×932. On phone-sized screens device.css lets it fill
// the viewport; --fit is the scale that maps the 430px design width to the device.
// On wider screens --fit-desk shrinks the whole presentation page so it always fits
// the window height: the page never scrolls, so the help button and the phone frame
// stay where they are drawn.
const DESIGN_WIDTH = 430;
const PHONE_BREAKPOINT = 560;
const DESK_MARGIN = 24;

export function fitPhoneToViewport() {
  const root = document.documentElement;

  const apply = () => {
    root.style.setProperty('--fit', String(window.innerWidth / DESIGN_WIDTH));

    const page = document.querySelector<HTMLElement>('#dc-root > .sc-host > div');
    if (!page || window.innerWidth <= PHONE_BREAKPOINT) {
      root.style.setProperty('--fit-desk', '1');
      return;
    }
    // measure unscaled, then scale to fit both axes
    root.style.setProperty('--fit-desk', '1');
    const rect = page.getBoundingClientRect();
    const { width, height } = rect;
    if (!height || !width) return;
    // the page sits below a top offset drawn by the design; it counts toward the fit
    const offsetTop = rect.top + window.scrollY;
    const scale = Math.min(
      1,
      (window.innerHeight - DESK_MARGIN - offsetTop) / height,
      (window.innerWidth - DESK_MARGIN) / width,
    );
    root.style.setProperty('--fit-desk', String(scale));
  };

  apply();
  window.addEventListener('resize', apply);
  // the page's own height settles after fonts and images load
  window.addEventListener('load', apply);
  setTimeout(apply, 300);
}
