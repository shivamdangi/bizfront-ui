# LeanFront — Premium Frontend Studio

A production-ready React + Vite + TypeScript project for a high-end frontend studio website.

## Tech Stack
- React + TypeScript + Vite
- Custom CSS design system with CSS variables
- Framer Motion for motion system
- React Three Fiber + Drei for 3D hero logo

## Folder Structure

```text
leanfront-studio/
├── public/
├── src/
│   ├── components/
│   │   └── LogoScene.tsx
│   ├── data/
│   │   └── content.ts
│   ├── hooks/
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
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── eslint.config.js
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

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel
1. Push this project to a Git repository.
2. In Vercel, click **Add New Project** and import the repository.
3. Use the default Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

