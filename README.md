# Welcome Itz Fizz — Minecraft Scroll Animation

Recreation of the car-scroll-animation hero, with a pixel-art Minecraft character walking instead of the car.
Scroll to make him walk across the road; the green strip is revealed behind him, uncovering the headline. Stat cards count up and drift with scroll.

**Stack:** React + Vite · Tailwind CSS v4 · GSAP + ScrollTrigger + @gsap/react

## Run
```bash
npm install
npm run dev
npm run build
```

## How it works
- `Hero.jsx`: one pinned ScrollTrigger timeline (`pin`, `scrub: 1`). Steve moves with `x`; the green layer uses `scaleX` to follow him; a scrubbed proxy value swings his arms/legs (walk cycle). Only transforms are animated.
- Intro (on load): headline letters stagger in, then the cards appear one by one (`power3.out`).
- `Steve.jsx`: SVG pixel art (no image files). `Stats.jsx`: the four cards.
- Respects `prefers-reduced-motion`; shorter scroll distance on mobile.

## Deploy (GitHub Pages)
1. Push to the `main` branch of a GitHub repo.
2. Settings -> Pages -> Source: **GitHub Actions** (workflow included).
3. Site: `https://<user>.github.io/<repo>/`
