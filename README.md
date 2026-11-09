# Sapuluah

The public hero uses an original hand-painted, anime-inspired cloud atmosphere. The sky is rendered by CSS gradients; two independent cloud illustration layers drift at different speeds. The animated code marquee is between the distant and foreground clouds, while logo, navigation, headline and CTA remain on top.

## Assets

- `assets/anime-cloud-mid.svg`: isolated painted distant cloud artwork, with alpha keyed from a green-screen source.
- `assets/anime-cloud-front.svg`: detailed foreground painterly cumulus bank, independently animated.
- `assets/sapuluah-logo-white.svg`: approved vector logo from [Sapuluah Figma](https://www.figma.com/design/hSaUNHp6vbSZjcNt11N0uq/Sapuluah?node-id=5-264).

The older photographic assets are retained temporarily for rollback but no longer referenced by the live CSS.

## Run locally

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. GitHub Pages serves the site directly from `main`. No build pipeline or runtime library is required. Animations respect `prefers-reduced-motion`.
