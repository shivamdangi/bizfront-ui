# LeanFront — Premium Frontend Studio

A production-ready React + Vite + TypeScript marketing experience with custom motion, parallax systems, and an interactive 3D brand symbol.

## Tech Stack
- React 18 + TypeScript
- Vite 6
- Framer Motion
- React Three Fiber + Drei + Three.js
- Custom CSS design system (CSS variables)

## Folder Structure

```text
leanfront-studio/
├── public/
├── src/
│   ├── components/
│   │   └── Logo3D.tsx
│   ├── data/
│   │   └── siteContent.ts
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   └── useParallax.ts
│   ├── sections/
│   │   ├── FinalCta.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Process.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

Open `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this repository to GitHub.
2. In Vercel, click **New Project** and import the repo.
3. Use defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

Vercel auto-detects Vite and handles SPA routing for this project.
