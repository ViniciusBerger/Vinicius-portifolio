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

All three flagship projects now have optimized, silent MP4 reels and static WebP posters. FIXD and RentalFlow use edited recordings of the original products, while Next Stop uses a clearly labeled UI concept recreation based on the project's documented features. Product-story headlines change in sync with each clip.

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

The three featured project reels use reusable playback logic in `src/app/components/projects/project-reel.jsx` and content/timing data in `src/app/data/portfolio.js`.

| Project | Media type | Public file |
| --- | --- | --- |
| FIXD | Edited customer-facing product recording | `public/videos/fixd-preview.mp4` |
| RentalFlow | Edited product recording, with loading periods and sensitive data removed | `public/videos/rentalflow-preview.mp4` |
| Next Stop | Recreated UI concept, **not original app footage** | `public/videos/nextstop-concept-preview.mp4` |

Matching WebP posters live under `public/images/`. Original recordings, source archives, and any credentials are intentionally **not** committed.

A project entry declares its media and synchronized promotional copy:

```js
{
  title: "RentalFlow",
  poster: "/images/rentalflow-poster.webp",
  video: "/videos/rentalflow-preview.mp4",
  captions: [
    { at: 0, title: "Rental management. Simplified.", detail: "Keep every booking organized." },
    { at: 4.3, title: "Create bookings effortlessly.", detail: "Make room for your next guest." },
  ],
}
```

The player includes a muted inline video, intersection-based pause/play, a manual play/pause control, video-load fallback to its poster image, and captions synchronized using the video's playback time. It pauses when the page is hidden and respects reduced-motion and data-saver preferences by not autoplaying. Visitors can still choose to play manually.

On narrow phones, marketing copy moves **under** the video, rather than covering the product screen. Next Stop's conceptual nature is labeled visibly on the reel and in its surrounding description.

## Preview validation

`npm run ci` validates media paths, basic file integrity, public content rules, and the production build. The Responsive UI Smoke GitHub Actions workflow tests four viewport sizes, video asset serving, project headings, interactions, and reduced-motion behavior against a built Next.js production server. Screenshots are available as GitHub Actions artifacts.

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

- project reels become stacked cards on smaller screens, with captions below the video on mobile
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
