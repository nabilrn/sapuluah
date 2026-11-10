// A small, passive scroll-linked descent. No animation or JS required for the content itself.
(() => {
  const section = document.querySelector(".world");
  if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frame = 0;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function render() {
    frame = 0;
    const viewport = window.innerHeight || 1;
    const bounds = section.getBoundingClientRect();
    const travel = Math.max(1, bounds.height - viewport);
    const progress = clamp(-bounds.top / travel, 0, 1);
    const reveal = clamp((progress - .12) / .54, 0, 1);
    const copy = clamp((progress - .35) / .31, 0, 1);

    section.style.setProperty("--world-cloud-opacity", (1 - reveal).toFixed(3));
    section.style.setProperty("--world-zoom", (1.045 + progress * .10).toFixed(3));
    section.style.setProperty("--world-shift", (-progress * 4).toFixed(2) + "%");
    section.style.setProperty("--world-copy-opacity", copy.toFixed(3));
    section.style.setProperty("--world-copy-offset", ((1 - copy) * 28).toFixed(1) + "px");
  }
  function queue() {
    if (!frame) frame = requestAnimationFrame(render);
  }
  // A missing script must never hide the section copy.
  section.classList.add("is-animated");
  render();
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });
  window.addEventListener("pageshow", queue);
})();
