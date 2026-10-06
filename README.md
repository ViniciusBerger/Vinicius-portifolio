# Vini Berger — Interactive Software Developer Portfolio

Personal portfolio for **Vini Berger**, a full-stack software developer focused on backend systems, web applications, APIs, integrations, testing, and maintainable product engineering.

**Live site:** https://viniciusbergerportifolio.vercel.app

## Why this portfolio exists

This site is meant to feel more like a small software product than a résumé copied into a webpage.

A recruiter or engineer should still be able to understand the essentials quickly — who I am, what I build, the technologies I use, and how to contact me — but the experience also rewards exploration through motion, interactive achievements, product previews, a build log, and a terminal-style contact section.

The design intentionally keeps the first screen project-neutral. Individual products appear later, in context, so one project does not become the identity of the entire portfolio.

## Experience design

The portfolio is organized around a few principles:

- **Immediate clarity** — role, focus, stack, work, experience, and contact remain easy to find.
- **Motion with purpose** — animation helps communicate software flow instead of acting as decoration only.
- **Progressive gamification** — achievements can be explored, but the site still works as a normal professional portfolio.
- **Production privacy** — public case studies stay high-level and avoid unnecessary internal implementation details.
- **Responsive by design** — layouts change intentionally across desktop, tablet, and mobile instead of simply shrinking.
- **Accessible motion** — `prefers-reduced-motion` disables the animated previews and decorative movement.

## Main sections

### Animated engineering hero

The hero introduces my engineering range using a project-neutral system overview. It visualizes frontend, services, data, CI/CD, and an example build pipeline without exposing a specific production system.

### Selected builds

The flagship projects are presented as large product reels:

- **FIXD** — production service operations platform
- **RentalFlow** — property operations platform
- **Next Stop** — social discovery application and SAIT capstone

The current repository uses animated screenshot fallbacks. The project-reel component also supports real muted looping `MP4`/`WebM` recordings through an optional `video` field in the project data, so future screen recordings can be added without changing component architecture.

### Engineer profile

A lightweight achievement system presents real engineering capabilities such as production delivery, backend leadership, full-stack ownership, automated quality checks, and systems thinking.

Achievements are intentionally interactive, but they do not gate important information.

### Build log

The build log shows the progression of my work from client-facing web development, to backend and machine-learning depth, to production systems.

It is deliberately **not** presented as a fake GitHub contribution graph.

### Experience and skills

Professional/project experience and technical skills remain straightforward and readable for recruiters who prefer conventional information.

### Terminal contact

The contact section uses a terminal-style interface while keeping normal accessible links for email, LinkedIn, and GitHub.

## Architecture

The project uses the Next.js App Router and separates content/data from presentation.

```text
src/
└── app/
    ├── components/
    │   ├── header.jsx
    │   ├── main.jsx
    │   ├── engineer-profile.jsx
    │   ├── build-log.jsx
    │   ├── experience.jsx
    │   ├── skills.jsx
    │   ├── contact.jsx
    │   ├── footer.jsx
    │   └── projects/
    │       └── projects.jsx
    ├── data/
    │   └── portfolio.js
    ├── globals.css
    ├── layout.js
    └── page.js

tests/
└── portfolio.test.mjs

.github/
└── workflows/
    └── ci.yml
```

`src/app/data/portfolio.js` is the content source for the hero, projects, achievements, build log, experience, and skills. Components focus on rendering and interaction. `globals.css` contains the visual system, animation states, responsive breakpoints, and reduced-motion behavior.

## Project previews

Each featured project supports two preview modes.

### Animated image fallback

The current assets use CSS-driven pan, scan, cursor, and progress effects to make static screenshots feel active without pretending they are real screen recordings.

### Real screen recording

A project can opt into real video by adding a public media path:

```js
{
  title: "Example",
  image: "/images/example.png",
  video: "/videos/example.webm"
}
```

The component automatically uses the video when provided and keeps the screenshot as its poster/fallback.

## Tech stack

### Framework and UI

- Next.js 15
- React 19
- Tailwind CSS 4
- React Icons
- Geist / Geist Mono

### Quality and delivery

- ESLint
- Node.js built-in test runner
- GitHub Actions
- Vercel

## Continuous integration

The project uses one validation command locally and in deployment:

```bash
npm run ci
```

It runs:

```text
ESLint
  ↓
Automated tests
  ↓
Next.js production build
```

The tests verify important content/configuration rules in addition to basic project structure, including:

- flagship projects remain present
- the current LinkedIn profile is used
- the hero stays project-neutral
- FIXD public copy avoids internal implementation metrics
- interactive project reels remain video-ready
- gamified profile/build-log sections stay mounted
- reduced-motion support remains present
- Vercel uses the CI build command

## Responsive behavior

The site has explicit layout transitions for large desktop, small desktop/tablet, and mobile.

Notable behavior includes:

- project reels become stacked cards on smaller screens
- the sticky engineer profile becomes static
- achievements collapse to one column
- build-log entries simplify into a two-column timeline
- the skills layout changes before the heading can collide with cards
- terminal contact rows simplify for narrow screens
- decorative cursor animation is removed on small devices

## Local development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run the complete validation pipeline before pushing:

```bash
npm run ci
```

## Scripts

```bash
npm run dev
npm run lint
npm test
npm run build
npm run ci
npm start
```

## Secrets and configuration

This portfolio does not require application secrets for its current public functionality.

Environment files are ignored through `.gitignore` (`.env*`). Private keys, tokens, API credentials, and other secrets should never be committed to this repository. If a future feature requires credentials, configure them through the deployment provider/environment rather than hard-coding them in source.

## Deployment

The project is deployed with Vercel and connected to GitHub. Vercel runs the same CI command used locally, so linting, tests, and the production build must pass for a successful deployment.

## Contact

**Vini Berger**

- LinkedIn: https://www.linkedin.com/in/vini-berger/
- GitHub: https://github.com/ViniciusBerger
- Portfolio: https://viniciusbergerportifolio.vercel.app
