# Sapuluah

A clean, premium **sky-blue hero** for [Sapuluah](https://sapuluah.com) — an emerging technology studio. This initial release intentionally implements the **hero section only**, not an entire landing page.

## Features

- Official modular S mark: ten 80 × 80 rounded tiles on an 8px grid; editable Outfit wordmark.
- Layered sky-blue atmosphere with photographic clouds.
- Five independently animated horizontal code marquees floating **behind** the cloud layer (no terminal windows or code containers).
- One custom split-capsule **Get Started** CTA; routes to the developer's GitHub projects.
- Responsive desktop/mobile layout, accessible navigation dialogs, and `prefers-reduced-motion` support.
- No build tool, dependencies, or framework required; ready to be served as a static website.

## Run locally

Open `index.html` directly in a browser, or serve the repository:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deployment

The repository is structured for static hosting. To use GitHub Pages, enable Pages under the repository settings, then select **Deploy from a branch → main → /(root)**, if available for your repository plan and visibility.

## Visual assets

- The vector icon is hand-specified from the approved Sapuluah Figma master using the same module arrangement and radii.
- Wordmark: [Outfit](https://fonts.google.com/specimen/Outfit) SemiBold. Supporting type: [Geist](https://fonts.google.com/specimen/Geist) and Geist Mono.
- Sky photography: [Thomas Kinto / Unsplash](https://unsplash.com/photos/cumulus-clouds-against-a-bright-blue-sky-v9HnyQRGht8), used under the [Unsplash License](https://unsplash.com/license).

**Note:** Cloud photographs and web fonts currently load from external CDNs. The CSS gradient remains visible if the photo cannot load.

## Scope

This is the first visual prototype of Sapuluah's public website. Additional sections, real portfolio content, analytics, or a product platform are intentionally out of scope until the design is approved.
