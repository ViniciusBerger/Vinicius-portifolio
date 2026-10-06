export const featuredProjects = [
  {
    number: "01",
    title: "FIXD",
    subtitle: "Mobile bicycle maintenance platform",
    description:
      "A production platform for scheduling mobile maintenance, payments, finance, client operations, and service workflows. Built around a Go API with a React and TypeScript frontend.",
    image: "/images/fixd.png",
    href: "https://www.fixdbike.com/",
    secondaryHref: "https://github.com/ViniciusBerger",
    technologies: ["Go", "React", "TypeScript", "PostgreSQL", "Redis", "Mercado Pago"],
    metrics: [
      { value: "60+", label: "REST API routes" },
      { value: "~95%", label: "Backend test coverage" },
      { value: "Live", label: "Production system" },
    ],
  },
  {
    number: "02",
    title: "RentalFlow",
    subtitle: "Property operations platform",
    description:
      "Responsive rental operations software with booking management, financial views, protected admin flows, conflict prevention, and a tested backend API.",
    image: "/images/rentalFlow.png",
    href: "https://github.com/ViniciusBerger/RentalFlow",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Drizzle"],
  },
  {
    number: "03",
    title: "Next Stop",
    subtitle: "Social discovery platform",
    description:
      "A team-built social discovery application with a NestJS backend, authentication and authorization, Google integrations, push notifications, and documented APIs.",
    image: "/images/next-stop.png",
    href: "https://github.com/ViniciusBerger/next-stop/tree/main/apps/backend",
    technologies: ["React Native", "NestJS", "TypeScript", "MongoDB", "Firebase"],
  },
];

export const otherProjects = [
  {
    title: "IMOB",
    description: "Real estate operations platform",
    image: "/images/imob.jpg",
    href: "https://github.com/ViniciusBerger/imob",
  },
  {
    title: "FormGuardian",
    description: "Browser form-security extension",
    image: "/images/formguardian.png",
    href: "https://form-guardian.vercel.app/",
  },
  {
    title: "Galvão Tattoo",
    description: "Client portfolio website",
    image: "/images/galvaotatto.png",
    href: "https://matheusgalvao.vercel.app/",
  },
];

export const experience = [
  {
    role: "Software Developer",
    place: "Internal business systems",
    date: "2026 — Present",
    description:
      "Maintaining and improving business software, investigating issues, shipping changes, and supporting day-to-day operational workflows.",
  },
  {
    role: "Full-Stack Developer",
    place: "FIXD",
    date: "2026 — Present",
    description:
      "Building and operating a production service platform across backend, frontend, payments, scheduling, infrastructure, testing, and releases.",
  },
  {
    role: "Backend Lead",
    place: "Next Stop · SAIT Capstone",
    date: "2025 — 2026",
    description:
      "Led backend architecture and delivery for a six-person Agile team, including API design, security, integrations, testing, and technical coordination.",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    skills: ["Go", "Node.js", "NestJS", "Java / Spring Boot", "Python", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Tailwind CSS"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Drizzle ORM"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "GitHub Actions", "Railway", "Microsoft Azure", "Cloudflare", "Vercel"],
  },
  {
    title: "Engineering",
    skills: ["Hexagonal Architecture", "DDD", "RBAC", "Automated Testing", "CI/CD", "Git / GitHub"],
  },
];
