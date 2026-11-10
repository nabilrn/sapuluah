// Passive camera drift only; canyon, heading and link always render without JS.
(() => {
  const section = document.querySelector(".world");
  if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frame = 0;
  function paint() {
    frame = 0;
    const rect = section.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
    section.style.setProperty("--world-drift", (-progress * 22).toFixed(1) + "px");
  }
  function queue() { if (!frame) frame = requestAnimationFrame(paint); }

  paint();
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });
  window.addEventListener("pageshow", queue);
})();
