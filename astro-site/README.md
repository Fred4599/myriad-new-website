# Community Card / Myriad – Astro + Tailwind

A copy of the [John Schierman / Community Card](https://github.com/Fred4599/remix-of-remix-of-john-schierman-website) marketing site, rebuilt in **Astro** and **Tailwind** with the same design and animations.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## What’s included

- **Design**: Same layout, colors (HSL variables), typography (DM Sans + Playfair Display), gradients, and shadows as the original.
- **Sections**: Nav, hero (with postcard stack), How It Works, Pricing, Benefits, No Competitors, testimonials, business types, service areas, FAQ (accordion), About, Contact, final CTA, footer.
- **Animations**:
  - Hero: text and postcards animate in on load (CSS).
  - Scroll: sections use Intersection Observer and CSS (fade-up, fade-down, fade-left, fade-right, scale-in, slide-left, slide-right, pop-in) with optional stagger.
  - Postcards: hover swaps front/back and adjusts position/rotation (CSS).
  - Floating call button: subtle scale animation.
- **Interactivity**: Mobile menu toggle, FAQ accordion (one open at a time), smooth scroll for anchor links.
- **Assets**: `myriad-logo.png`, `community-postcard-front.jpg`, `community-postcard-back.jpg` in `public/`.

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- Vanilla JS for menu and scroll animations (no React/Vue)
