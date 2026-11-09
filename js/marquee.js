
    // Each track uses two measured identical segments, with no seam.
    // Velocity = distance / duration (CSS pixels per second), regardless of viewport.
    const fragments = [
      "const product = await deploy()",
      "git push --deploy",
      "export const build = () => ship()",
      "await pipeline.run()",
      "type System = { reliable: true }",
      "docker compose up -d",
      "return createProduct({ ready: true })",
      "kubectl rollout status deployment/app",
      "Promise.all([design(), engineer()])",
      "npm run build && npm run deploy"
    ];
    const rows = [...document.querySelectorAll(".code-row")];
    const velocities = [26, 32, 28]; // calibrated px/s, slow atmospheric movement
    const rowPhrases = rows.map((_, index) =>
      Array.from({ length: 7 }, (_, step) =>
        fragments[(index * 2 + step * 3) % fragments.length]
      ).join("   //   ") + "   //   "
    );

    function sizeMarquee(row, index) {
      row.classList.remove("is-ready");
      row.dataset.direction = index % 2 === 0 ? "left" : "right";

      const track = document.createElement("div");
      track.className = "code-marquee";
      const segment = document.createElement("span");
      segment.className = "code-segment";
      segment.textContent = rowPhrases[index];
      track.append(segment);
      row.replaceChildren(track);

      // The sequence must exceed the visible row. This also works on 4K screens.
      const requiredWidth = row.clientWidth + 120;
      while (segment.getBoundingClientRect().width < requiredWidth) {
        segment.textContent += rowPhrases[index];
      }

      const segmentWidth = segment.getBoundingClientRect().width;
      track.append(segment.cloneNode(true));
      track.style.setProperty("--marquee-duration", (segmentWidth / velocities[index]).toFixed(3) + "s");
      row.classList.add("is-ready");
    }

    function rebuildMarquees() {
      rows.forEach(sizeMarquee);
    }
    rebuildMarquees();
    // Re-measure when Geist Mono finishes loading, or the viewport changes size.
    if (document.fonts?.ready) document.fonts.ready.then(rebuildMarquees);
    let resizeJob;
    window.addEventListener("resize", () => {
      clearTimeout(resizeJob);
      resizeJob = setTimeout(rebuildMarquees, 180);
    }, { passive: true });
    document.querySelectorAll("[data-open]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelector(".mobile-nav")?.removeAttribute("open");
        document.getElementById(button.dataset.open)?.showModal();
      });
    });
    document.querySelectorAll("[data-close]").forEach((button) => {
      button.addEventListener("click", () => button.closest("dialog")?.close());
    });
    document.querySelectorAll("dialog").forEach((dialog) => {
      dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    });
  