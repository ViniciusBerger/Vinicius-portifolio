export const heroProfile = {
  eyebrow: "SOFTWARE DEVELOPER · BACKEND & FULL-STACK",
  name: "Vini Berger",
  lead:
    "I build full-stack applications and backend services for real business workflows, combining secure APIs, data-driven features, automated tests, and reliable delivery.",
  technologies: ["TypeScript", "React", "Go", "NestJS", "PostgreSQL"],
  overview: {
    eyebrow: "SYSTEM OVERVIEW",
    title: "From interface to infrastructure.",
    description:
      "Product-focused development across application layers, with testing and delivery built into the workflow.",
    layers: [
      { icon: "frontend", label: "Frontend", value: "React / TypeScript" },
      { icon: "services", label: "APIs & services", value: "Go / NestJS" },
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
    period: "Feb–Aug 2026 · Self-employed",
    description:
      "Designed and developed a full-stack maintenance service platform with booking and scheduling, role-specific workflows, payment integrations, and operational dashboards. Built React interfaces, Go APIs, PostgreSQL data flows, tests, and CI/CD.",
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
      { value: "3 user roles", label: "Customer · mechanic · admin" },
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
    period: "Dec 2025–Feb 2026 · Independent project",
    description:
      "Built a responsive internal platform for a small rental business, giving three administrators a shared view of bookings across three to four properties, conflict prevention, and financial reporting through a secured NestJS API.",
    image: "/images/rentalFlow.png",
    poster: "/images/rentalflow-poster.webp",
    video: "/videos/rentalflow-preview.mp4",
    captions: [
      { at: 0, title: "Demonstration environment.", detail: "All names, bookings, properties and values shown are test data." },
      { at: 4.2, title: "Bookings at a glance.", detail: "Explore reservations across the calendar." },
      { at: 8.7, title: "Manage every stay.", detail: "Open bookings and edit reservation details." },
      { at: 12.6, title: "Performance insights.", detail: "Revenue trends and upcoming bookings in one view." },
      { at: 15.9, title: "Create a new booking.", detail: "Add a guest, dates, price and reservation notes." },
      { at: 25.7, title: "Bookings stay synchronized.", detail: "The new stay appears on the calendar." },
      { at: 30.3, title: "Flexible contract setup.", detail: "Configure payment terms, property rules and clauses." },
      { at: 35.6, title: "Customize properties.", detail: "Manage separate listings, icons and calendar colors." },
      { at: 46.1, title: "A unified booking calendar.", detail: "Property changes carry through to the calendar." },
    ],
    href: "https://github.com/ViniciusBerger/RentalFlow",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Drizzle ORM"],
    metrics: [
      { value: "17", label: "REST endpoints" },
      { value: "82", label: "Automated backend tests" },
      { value: "3–4", label: "Rental units managed" },
    ],
    motion: "drift-side",
    sceneLabel: "OPERATIONS DASHBOARD",
  },
  {
    number: "03",
    title: "Next Stop",
    subtitle: "Social discovery platform · SAIT capstone",
    period: "Sep 2025–Apr 2026 · Six-person Agile team",
    description:
      "Led backend architecture and technical coordination for a social discovery app. Built secure NestJS APIs, Google Places/Maps and push-notification integrations, and reviewed team contributions before delivery one week early.",
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
    metrics: [
      { value: "80+", label: "REST endpoints" },
      { value: "350+", label: "Automated Jest tests" },
      { value: "6", label: "Agile team members" },
    ],
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
    title: "Airline Ticket Price Prediction",
    description: "Neural-network models trained on ~300,000 flight records",
    kind: "analysis",
    metric: "R² 0.9665",
    metricLabel: "Best test-set result · MAE ≈ 2,405",
  },
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
    role: "IT Support & Software Maintenance",
    place: "StarPro Doors Ca. · Calgary, AB",
    date: "Jun 2026 — Present",
    description:
      "Maintain the company's internal business system, diagnose software defects, implement targeted maintenance fixes, and verify affected workflows while also supporting logistics and general operations in a small team.",
  },
  {
    role: "Full-Stack Developer",
    place: "FIXD · Self-employed",
    date: "Feb 2026 — Aug 2026",
    description:
      "Designed and developed a service-booking and operations platform across React, Go, PostgreSQL, authenticated workflows, payments, automated testing, and deployment.",
  },
  {
    role: "Backend Developer & Project Lead",
    place: "Next Stop · SAIT Capstone",
    date: "Sep 2025 — Apr 2026",
    description:
      "Led backend architecture and technical coordination for a six-person Agile team, implementing secure APIs and integrations, reviewing code, and supporting early delivery.",
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
