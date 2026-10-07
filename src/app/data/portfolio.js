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
    poster: "/images/fixd-poster.webp",
    video: "/videos/fixd-preview.mp4",
    captions: [
      { at: 0, title: "Bike maintenance, made easier.", detail: "Service, right where you are." },
      { at: 1.8, title: "Find the right service.", detail: "Choose what your bike needs." },
      { at: 3.8, title: "At your doorstep.", detail: "Convenience starts with your location." },
      { at: 5.6, title: "Book around your day.", detail: "Scheduling made straightforward." },
      { at: 8.4, title: "Your service, your way.", detail: "Review your request in one place." },
      { at: 10.6, title: "FIXD. Back to riding.", detail: "Less hassle, more time on the road." },
    ],
    technologies: ["Go", "React", "TypeScript", "PostgreSQL"],
    metrics: [
      { value: "Production", label: "Real-world application" },
      { value: "Tested", label: "Automated quality checks" },
      { value: "Full-stack", label: "End-to-end ownership" },
    ],
    motion: "drift-up",
    sceneLabel: "SERVICE WORKFLOW",
  },
  {
    number: "02",
    title: "RentalFlow",
    subtitle: "Property operations platform",
    description:
      "Responsive rental operations software with booking management, financial views, protected admin flows, conflict prevention, and a tested backend API.",
    image: "/images/rentalFlow.png",
    poster: "/images/rentalflow-poster.webp",
    video: "/videos/rentalflow-preview.mp4",
    captions: [
      { at: 0, title: "Rental management. Simplified.", detail: "Keep every booking organized." },
      { at: 4.3, title: "Create bookings effortlessly.", detail: "Make room for your next guest." },
      { at: 7.1, title: "Stay in control.", detail: "Update every stay in a few clicks." },
      { at: 9.8, title: "Your performance, at a glance.", detail: "Bookings and finances in one place." },
    ],
    href: "https://github.com/ViniciusBerger/RentalFlow",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Drizzle"],
    motion: "drift-side",
    sceneLabel: "OPERATIONS DASHBOARD",
  },
  {
    number: "03",
    title: "Next Stop",
    subtitle: "Social discovery platform",
    description:
      "A team-built social discovery application with a NestJS backend, authentication and authorization, Google integrations, push notifications, and documented APIs.",
    image: "/images/next-stop.png",
    poster: "/images/nextstop-concept-poster.webp",
    video: "/videos/nextstop-concept-preview.mp4",
    isRecreation: true,
    captions: [
      { at: 0, title: "Your next adventure starts here.", detail: "Find places worth exploring." },
      { at: 4, title: "Discover what's nearby.", detail: "Explore new spots around you." },
      { at: 8, title: "Better adventures, together.", detail: "Connect through events and places." },
    ],
    href: "https://github.com/ViniciusBerger/next-stop/tree/main/apps/backend",
    technologies: ["React Native", "NestJS", "TypeScript", "MongoDB", "Firebase"],
    motion: "float",
    sceneLabel: "MOBILE PRODUCT",
  },
];

export const achievements = [
  {
    id: "production-builder",
    code: "01",
    title: "Production Builder",
    description: "Ships and maintains software used in real operational workflows.",
    signal: "SHIP",
  },
  {
    id: "backend-lead",
    code: "02",
    title: "Backend Lead",
    description: "Led backend architecture and delivery for a six-person capstone team.",
    signal: "LEAD",
  },
  {
    id: "full-stack",
    code: "03",
    title: "Full-Stack Ownership",
    description: "Works across interfaces, APIs, data, integrations, and deployment.",
    signal: "BUILD",
  },
  {
    id: "testing",
    code: "04",
    title: "Quality by Default",
    description: "Uses automated testing and CI as part of the delivery workflow.",
    signal: "TEST",
  },
  {
    id: "systems",
    code: "05",
    title: "Systems Thinking",
    description: "Designs around workflows, boundaries, maintainability, and clear ownership.",
    signal: "DESIGN",
  },
];

export const buildLog = [
  {
    year: "2024",
    title: "Client-facing web work",
    description: "Built and shipped web experiences while growing frontend and product-delivery fundamentals.",
    tags: ["Web", "React", "Delivery"],
  },
  {
    year: "2025",
    title: "Backend depth + ML",
    description: "Expanded into backend architecture, APIs, data systems, machine learning, and larger team projects.",
    tags: ["NestJS", "MongoDB", "ML"],
  },
  {
    year: "2026",
    title: "Production systems",
    description: "Moved deeper into full-stack ownership, production operations, testing, deployment, and system maintenance.",
    tags: ["Go", "PostgreSQL", "CI/CD"],
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
      "Building and operating a production service platform across backend, frontend, scheduling, integrations, testing, infrastructure, and releases.",
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
