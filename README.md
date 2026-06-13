# Priyanshu Chaurasia — Portfolio

Creative, terminal/hacker-themed developer portfolio. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Boot-sequence hero** with rotating role typewriter and a live matrix-rain canvas (respects `prefers-reduced-motion`).
- **Interactive shell** — a real in-page terminal. Type `help`, `whoami`, `projects`, `neofetch`, `sudo`, etc. Supports command history (↑/↓).
- **Animated skill explorer** — pick a category, watch the proficiency bars fill.
- **Experience timeline**, **project cards** (terminal-window styled), and a CP **stats / awards** panel.
- **Contact form** wired to Formspree with loading / success / error states + honeypot spam guard.
- Fully responsive, keyboard-accessible, dark by default.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
```

## Where to edit

- **All content** lives in [`src/lib/data.ts`](src/lib/data.ts) — profile, experience, projects, skills, stats, awards. Edit there; the UI updates everywhere.
- **Formspree endpoint**: `profile.formspree` in `src/lib/data.ts` (currently `https://formspree.io/f/mgvzekwd`).
- **Theme tokens** (colors, fonts): `@theme` block in [`src/app/globals.css`](src/app/globals.css).

## Stack

Next.js 16 · React · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide icons · JetBrains Mono.
