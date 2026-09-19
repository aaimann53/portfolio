export const site = {
  name: "Aiman Jadoon",
  role: "SOFTWARE DEVELOPER · FLUTTER & WEB",
  tagline:
    "I build modern digital products that look great and work beautifully.",
  description:
    "I design and develop web and mobile applications with polished interfaces, reliable backends, and real-world functionality.",
  availability: "Available for freelance projects",
  githubUrl: "https://github.com/aaimann53?tab=repositories",
  linkedinUrl: "https://www.linkedin.com/in/aimanjadoon",
  contactEmail: "aimanjadoon03@gmail.com",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Project = {
  /** Card title. */
  title: string;
  /** Short label shown above the title, e.g. "Mobile App · Food Delivery". */
  category: string;
  /** One or two lines describing the project. */
  description: string;
  /** Technology tags rendered as a quiet inline list. */
  tech: string[];
  /**
   * Optional square thumbnail (put the file in /public). It's only rendered
   * when set, so the clean text-only card is the default.
   */
  image?: string;
  /** Real project link. Falls back to the contact section while it's empty. */
  href?: string;
};

/**
 * Projects shown in the Selected Work carousel (order = carousel order).
 * Titles came from the brief; the categories, descriptions and tech tags are
 * plain placeholders — edit them freely, the carousel reads straight from here.
 */
export const projects: Project[] = [
  {
    title: "Meezban",
    category: "Mobile App · Food Delivery",
    description:
      "A complete food ordering and restaurant discovery app, with role-based flows for customers and restaurant admins.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB"],
    href: "https://github.com/Ininsico/Meezban",
  },
  {
    title: "Smart Wardrobe",
    category: "Mobile App · Lifestyle",
    description:
      "A wardrobe management app that helps users organise their closet, build outfits, and plan what to wear.",
    tech: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/aaimann53/Wardrobe",
  },
  {
    title: "AI-HRMS",
    category: "AI · HR Management",
    description:
      "An HR management system with AI-assisted workflows for organising employees, attendance, and payroll.",
    tech: ["AI", "MERN Stack"],
    href: "https://github.com/artdevelopers-artbyzefa/HRMS",
  },
  {
    title: "CyberShield",
    category: "Cybersecurity · Web",
    description:
      "A security-focused build centred on safe authentication, hardened APIs, and defensive tooling.",
    tech: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "RAG Document Chat",
    category: "AI · Retrieval",
    description:
      "A document chat interface that answers questions from your own files using retrieval-augmented generation.",
    tech: ["Next.js", "TypeScript", "Embeddings", "Vector Search"],
  },
  {
    title: "PDF Maker",
    category: "Mobile App · Productivity",
    description:
      "A simple, practical PDF creation tool designed around a clean and distraction-free experience.",
    tech: ["Flutter", "Dart", "PDF"],
  },
  {
    title: "WonderLust Diaries",
    category: "Mobile App · Travel Journal",
    description:
      "A travel journal app for capturing trips, memories, and the places in between.",
    tech: ["Flutter", "Dart", "Firebase"],
  },
];

/**
 * One row in a timeline list — used by both the experience and education
 * sections, so they stay visually identical.
 */
export type TimelineEntry = {
  /** Role, degree or institution — the entry's heading. */
  title: string;
  /** Company or institution, shown under the heading. */
  organisation?: string;
  /** Date range, e.g. "Mar 2026 – Present". */
  period: string;
  /** Employment type or degree level, e.g. "Internship" or "Bachelor's Degree". */
  type?: string;
  /** Optional length label, e.g. "3 mos". */
  duration?: string;
  /** City and country, as you'd write it on a CV. */
  location?: string;
  /** Remote / Hybrid / On-site. */
  workMode?: string;
  /** Shown clamped to three lines with a "…see more" toggle. */
  description?: string;
  /** Skills or tools used. */
  tech?: string[];
  /** Logo in /public. Falls back to a monogram tile while it's empty. */
  logo?: string;
};

export const experience: TimelineEntry[] = [
  {
    title: "Mobile App Developer",
    organisation: "GrowStep Technologies",
    type: "Internship",
    period: "2026",
    // Optional meta lines — add these to match the reference layout:
    // duration: "3 mos",
    // location: "Islamabad, Pakistan",
    // workMode: "Remote",
    // logo: "/logos/growstep.png",
    tech: ["Flutter", "Dart", "REST APIs", "UI Development"],
    description:
      "Worked on developing and improving mobile applications using Flutter, focusing on responsive UI, application functionality, API integration, debugging, and delivering polished user experiences.",
  },
];

export type EducationItem = {
  /** Degree or institution — the entry's heading. */
  title: string;
  /** School, college or university. */
  organisation?: string;
  /** Date range shown in the left column, e.g. "2023–2027". */
  period: string;
  /** Optional detail line under the institution. */
  description?: string;
};

export const education: EducationItem[] = [
  {
    title: "BS in Computer Science",
    organisation: "COMSATS University Abbottabad",
    period: "2023–2027",
    // Add a detail line if you like, e.g.
    // description: "Coursework in AI, distributed systems and software engineering.",
  },
  {
    // Swap the title for your programme and move the college to `organisation`,
    // e.g. title: "Intermediate (FSc)", organisation: "Army Burhall College".
    title: "Army Burhall College",
    period: "2021–2023",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & Services",
    skills: ["Git", "GitHub", "Cloudinary", "Vercel"],
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive, and accessible websites and web apps built with modern frameworks like Next.js.",
  },
  {
    title: "Flutter App Development",
    description:
      "Cross-platform mobile applications with polished, native-feeling interfaces for Android and iOS.",
  },
  {
    title: "Backend & API Development",
    description:
      "Reliable REST APIs and backends powered by Node.js, Express, and MongoDB.",
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-perfect implementation of designs into clean, maintainable code.",
  },
];
