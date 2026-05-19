# Prudhvi Raj Medikonduri — Portfolio

Personal portfolio website for Prudhvi Raj Medikonduri, Senior Software / Security Engineer. Built with React, Three.js, and GSAP — featuring a 3D interactive hero, animated experience timeline, filterable projects grid, and full light/dark mode support.

**Live:** [prudhvi-raj-medikonduri.is-cod.in](https://prudhvi-raj-medikonduri.is-cod.in)

---

## Tech Stack

| Layer | Library |
|---|---|
| UI Framework | React 19 + Vite |
| 3D | Three.js · React Three Fiber · @react-three/drei |
| Animations | GSAP + ScrollTrigger |
| Styling | Tailwind CSS v3 (dark mode via class) |
| Card effects | vanilla-tilt |
| Deployment | GitHub Actions → GitHub Pages |

## Features

- **3D Hero** — Particle field (1600 points) + two distorted icosahedron shapes with per-theme opacity
- **Interactive Experience** — Tab panel with GSAP animate-in/out on company switch, keyboard navigable
- **Filterable Projects** — Category tabs (AI+ML / Blockchain / AR+Mobile / IoT) with vanilla-tilt cards
- **Skills Orb** — Spherical 3D word cloud with OrbitControls drag
- **Light / Dark Mode** — System preference detection + localStorage persistence
- **Custom Domain** — CNAME pointing to GitHub Pages via is-cod-in

## Project Structure

```
src/
├── data/
│   └── portfolioData.js       # Single source of truth for all content
├── hooks/
│   ├── usePortfolioData.js
│   └── useTheme.js
├── components/
│   ├── 3d/
│   │   ├── ParticleField.jsx
│   │   ├── FloatingCube.jsx
│   │   └── SkillsOrb.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Navbar.jsx
│       ├── SectionWrapper.jsx
│       └── SectionHeading.jsx
└── App.jsx
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions (`.github/workflows/deploy.yml`).

The `public/CNAME` file points GitHub Pages to the custom domain `prudhvi-raj-medikonduri.is-cod.in`.
