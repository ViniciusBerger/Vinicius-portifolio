# Vini Berger — Software Developer Portfolio

Personal portfolio for **Vini Berger**, a full-stack software developer focused on web applications, backend systems, APIs, integrations, and maintainable product engineering.

The site is designed to work as more than a list of technologies. It presents selected work, engineering experience, technical strengths, and the way I approach building software from interface to infrastructure.

## Live site

**Portfolio:** https://viniciusbergerportifolio.vercel.app

## About the project

This portfolio was built to give recruiters, developers, and engineering teams a quick but meaningful view of my work.

The homepage is intentionally project-neutral: it introduces my engineering profile first, then moves into individual projects and experience. That keeps the focus on the broader skills I can bring to a team instead of making the entire portfolio feel tied to one product.

The project sections emphasize:

- the problem or product being built
- my role and engineering responsibilities
- the technologies used
- architecture and maintainability
- testing and delivery practices
- selected production and team-based work

Public project descriptions are intentionally high-level. Internal implementation details, operational data, and unnecessary production specifics are not exposed simply for the sake of making the portfolio look more technical.

## Featured work

The portfolio currently highlights three larger projects:

### FIXD

A production service platform built around real operational workflows. My work spans full-stack development, backend services, frontend interfaces, scheduling, integrations, testing, deployment, and ongoing maintenance.

The portfolio presents FIXD as an example of production engineering without exposing internal system details that do not need to be public.

### RentalFlow

A property operations platform covering rental management, booking workflows, protected admin functionality, financial views, conflict prevention, and backend APIs.

### Next Stop

A team-built social discovery application developed as a SAIT capstone project. I worked as backend lead, contributing to architecture, API design, security, integrations, testing, documentation, and technical coordination.

Additional projects and experiments are included further down the site.

## Design direction

The visual design uses a dark, product-focused interface with restrained accent colors and large typography.

The main goals were to:

- avoid the look of a generic developer portfolio template
- make real software work the focus
- keep information easy to scan
- work well across desktop and mobile
- present technical depth without overwhelming the page
- keep the hero focused on the developer rather than a single project

The hero uses a system-overview visual rather than a screenshot of a production application. Individual products are introduced later in the Featured Work section where they have the proper context.

## Project architecture

The application uses the Next.js App Router and keeps content, presentation, and styling separated.

```text
src/
└── app/
    ├── components/
    │   ├── header.jsx
    │   ├── main.jsx
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

`portfolio.js` acts as the shared content source for project, experience, skill, and hero data. Components are responsible for presentation, while `globals.css` contains the responsive visual system.

This keeps project information out of the JSX where possible and makes future content updates easier to manage.

## Tech stack

**Framework and UI**

- Next.js 15
- React 19
- Tailwind CSS 4
- React Icons
- Geist typography

**Quality and delivery**

- ESLint
- Node.js test runner
- GitHub Actions
- Vercel

## Continuous integration

Every push and pull request runs the same quality pipeline used for production validation:

```bash
npm run ci
```

That command runs:

```text
ESLint
  ↓
Automated tests
  ↓
Next.js production build
```

The tests include checks for important portfolio content and configuration, including project visibility, public-profile links, CI configuration, and privacy-oriented presentation rules.

Vercel uses the same CI command as its build command, so a deployment does not proceed successfully if linting, tests, or the production build fail.

## Local development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

Run the full validation pipeline before pushing:

```bash
npm run ci
```

## Available scripts

```bash
npm run dev
npm run lint
npm test
npm run build
npm run ci
npm start
```

## Deployment

The project is deployed with Vercel and connected to GitHub.

Production changes go through the same lint, test, and build checks used locally. GitHub Actions also validates repository changes independently so deployment problems are caught early.

## Contact

**Vini Berger**

- LinkedIn: https://www.linkedin.com/in/vini-berger/
- GitHub: https://github.com/ViniciusBerger
- Portfolio: https://viniciusbergerportifolio.vercel.app
