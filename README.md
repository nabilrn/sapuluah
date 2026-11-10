# Sapuluah

Sapuluah's lightweight landing page, built as a static website for GitHub Pages. The approved sky hero is followed by one scroll-driven pixel-art landscape chapter.

## Pixel-inspired sky v3

The current hero uses **one original self-hosted pixel-sky illustration** generated specifically for this project. Its blue sky and stepped pastel cloud bank are part of one coherent image, so there are no green-screen masks, color-fringing, transparent cloud exports, or extra image downloads. The image **contains no text or UI**; the brand logo, headline, navigation and Get Started CTA stay as actual accessible HTML.

- `assets/pixel-sky.jpg`: primary pixel-inspired sky artwork, optimized JPEG (771×430, ~260 KB).
- `css/hero.css`: approved hero layout and CTA (unchanged by the landscape chapter).
- `css/world.css` and `js/world.js`: second chapter, a canyon reveal with progressive cloud fade and restrained camera movement.
- `assets/world-canyon.avif`: original pixel-art fantasy canyon illustration, optimized for static hosting (~42 KB).
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

Pixel-sky and canyon artwork are decorative. CTA and world animations respect `prefers-reduced-motion`; section copy remains accessible without JavaScript. Mobile layout prioritizes legible text and controls.
