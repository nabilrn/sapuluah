// About and Contact dialog interactions.
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
