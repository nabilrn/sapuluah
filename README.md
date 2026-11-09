# Sapuluah

Minimal sky-blue hero for [Sapuluah](https://sapuluah.com), built as a static site. Only the hero has been implemented.

## Design implementation

- **CSS sky:** precise multistop gradient and localized optical shading—no full-page sky raster.
- **Two isolated cloud layers:** `assets/cloud-mid.svg` and `assets/cloud-front.svg` are static self-contained SVGs embedding photographic assets and chroma-to-alpha filters, so the cloud silhouettes are transparent without any client-side image processing JavaScript.
- **Code behind clouds:** three monospace marquee rows between distant and foreground clouds. Each animated track contains two identical sequences; speed derives from the measured segment width divided by its pixel-per-second velocity.
- **Text contrast:** a separate top scrim preserves white navigation legibility. Foreground clouds do not obscure header interactions.
- **Responsive:** mobile layout reduces visible code to two ribbons and repositions clouds; reduced-motion preferences disable the animation.
- **Brand assets:** approved Sapuluah logo SVG exported directly from Figma; Manrope UI typography and Geist Mono code.
- **Get Started:** single CTA linking to GitHub projects.

## Layout

```
index.html
css/hero.css
js/marquee.js
assets/cloud-mid.svg
assets/cloud-front.svg
assets/sapuluah-logo-white.svg
favicon.svg
```

`assets/hero-sky.jpg` is retained temporarily as a rollback asset but is no longer used.

## Run locally

```sh
python3 -m http.server 8080
```

Open http://localhost:8080.

## Deployment

This is a static site for GitHub Pages, served from the repository root (`main`).

## Canonical branding

[Editable Figma master, node 5:264](https://www.figma.com/design/hSaUNHp6vbSZjcNt11N0uq/Sapuluah?node-id=5-264).

The Figma-approved horizontal logo is supplied as an SVG outline—no browser font dependency for the logo itself.
