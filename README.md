# Sapuluah

Sapuluah's first landing-page hero, built as a lightweight static website for GitHub Pages.

## Pixel-inspired sky v3

The current hero uses **one original self-hosted pixel-sky illustration** generated specifically for this project. Its blue sky and stepped pastel cloud bank are part of one coherent image, so there are no green-screen masks, color-fringing, transparent cloud exports, or extra image downloads. The image **contains no text or UI**; the brand logo, headline, navigation and Get Started CTA stay as actual accessible HTML.

- `assets/pixel-sky.jpg`: primary pixel-inspired sky artwork, optimized JPEG (771×430, ~260 KB).
- `css/hero.css`: layout, responsive sky scene, contrast-safe overlays, and the sculpted, shimmering CTA.
- `js/dialogs.js`: lightweight About/Contact dialog interactions.
- `favicon.svg`: original white Sapuluah mark on navy for browser-tab contrast.
- `assets/sapuluah-logo-white.svg`: approved, original Figma vector logo.

Previous `assets/anime-cloud*.svg` and `assets/cloud*.svg` remain committed as rollback references but are no longer served by the page.

## Run locally

```sh
python3 -m http.server 8080
```

Visit http://localhost:8080.

The site requires no build tooling. For GitHub Pages select **Deploy from a branch → main → /(root)**.

## Brand source

[Approved Sapuluah logo in Figma](https://www.figma.com/design/hSaUNHp6vbSZjcNt11N0uq/Sapuluah?node-id=5-264).

## Accessibility

Pixel-sky artwork is decorative. CTA animation respects `prefers-reduced-motion`. Mobile layout prioritizes legible text and controls.
