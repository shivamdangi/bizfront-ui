# LeanFront — Premium Frontend Studio

A production-ready React + Vite + TypeScript website showcasing a high-end frontend studio brand, including interactive 3D identity, smooth parallax motion, and responsive premium sections.

## Tech Stack
- React 18 + TypeScript
- Vite 6
- Framer Motion
- Three.js (custom WebGL logo renderer)
- Custom CSS with design tokens via CSS variables

## Folder Structure

```bash
leanfront-ui/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── data/
│   │   └── content.ts
│   ├── hooks/
│   │   └── useParallax.ts
│   ├── components/
│   │   └── three/
│   │       └── LogoScene.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FinalCta.tsx
│   │   └── Footer.tsx
│   └── styles/
│       └── global.css
└── README.md
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push repository to GitHub.
2. In Vercel dashboard, import the repository.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

No backend configuration is required.
