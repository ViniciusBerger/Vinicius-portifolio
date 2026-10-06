export const heroProfile = {
  eyebrow: "FULL-STACK SOFTWARE DEVELOPER",
  name: "Vini Berger",
  lead:
    "I build production-ready web applications, APIs, integrations, and business systems with a focus on clean architecture, reliability, and maintainability.",
  technologies: ["React", "TypeScript", "Go", "Node.js", "PostgreSQL"],
  overview: {
    eyebrow: "SYSTEM OVERVIEW",
    title: "From interface to infrastructure.",
    description:
      "Product-focused development across application layers, with testing and delivery built into the workflow.",
    layers: [
      { icon: "frontend", label: "Frontend", value: "React / Next.js" },
      { icon: "services", label: "APIs & services", value: "Go / Node.js" },
      { icon: "data", label: "Data", value: "PostgreSQL / MongoDB" },
      { icon: "delivery", label: "Delivery", value: "CI/CD / Docker" },
    ],
    signals: ["Production-minded", "Automated testing", "Maintainable"],
  },
};

export const featuredProjects = [
  {
    number: "01",
    title: "FIXD",
    subtitle: "Service operations platform",
    description:
      "A production full-stack application supporting customer booking and day-to-day business workflows. I own development across frontend, backend, testing, integrations, and releases.",
    image: "/images/fixd.png",
    technologies: ["Go", "React", "TypeScript", "PostgreSQL"],
    metrics: [
      { value: "Production", label: "Real-world application" },
      { value: "Tested", label: "Automated quality checks" },
      { value: "Full-stack", label: "End-to-end ownership" },
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
