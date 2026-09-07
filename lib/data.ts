export const site = {
  name: "Aiman Jadoon",
  role: "SOFTWARE DEVELOPER · FLUTTER & WEB",
  tagline:
    "I build modern digital products that look great and work beautifully.",
  description:
    "I design and develop web and mobile applications with polished interfaces, reliable backends, and real-world functionality.",
  availability: "Available for freelance projects",
  // Replace this with your real GitHub URL.
  githubUrl: "https://github.com/your-username",
  // Replace this with the email you want clients to contact you at.
  contactEmail: "your@email.com",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Project = {
  title: string;
  tagline?: string;
  description: string;
  tech: string[];
  features?: string[];
  featured?: boolean;
  caseStudy?: boolean;
  // When you have a real screenshot, put it in /public and set the path here.
  image?: string;
  accent?: string;
};

export const projects: Project[] = [
  {
    title: "Meezban",
    tagline: "Food ordering & restaurant discovery",
    description:
      "A complete food ordering and restaurant discovery mobile application built with Flutter.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs", "Node.js", "MongoDB"],
    featured: true,
    caseStudy: true,
    accent: "accent",
    features: [
      "Restaurant discovery",
      "Restaurant listings",
      "Categories",
      "Menu browsing",
      "Cart",
      "Food ordering",
      "Order tracking",
      "Ratings & reviews",
      "Notifications",
      "Role-based functionality",
      "Restaurant admin functionality",
    ],
  },
  {
    title: "PDF Maker",
    description:
      "A simple and practical PDF creation application designed with a clean and focused user experience.",
    tech: ["Flutter", "Dart", "PDF"],
    accent: "sky",
  },
  {
    title: "Invoice Maker",
    description:
      "A professional invoice creation application designed to make creating and managing invoices simple and efficient.",
    tech: ["Flutter", "Dart", "Firebase"],
    accent: "violet",
  },
  {
    title: "HRMS",
    description:
      "An HR management system to organize employees, attendance, and payroll workflows.",
    tech: ["Flutter", "Node.js", "MongoDB"],
    accent: "rose",
  },
  {
    title: "AI Hiring",
    description:
      "A hiring assistant that streamlines recruitment with structured candidate workflows.",
    tech: ["Next.js", "Flutter", "Node.js"],
    accent: "emerald",
  },
  {
    title: "Smart Wardrobe",
    description:
      "A wardrobe management app that helps users organize outfits and plan styles.",
    tech: ["Flutter", "Dart", "Firebase"],
    accent: "amber",
  },
];

export const experience = [
  {
    period: "2026",
    role: "Mobile App Developer",
    company: "GrowStep Technologies",
    type: "Internship",
    tech: ["Flutter", "Dart", "REST APIs", "UI Development"],
    description:
      "Worked on developing and improving mobile applications using Flutter, focusing on responsive UI, application functionality, API integration, debugging, and delivering polished user experiences.",
  },
];

export const skills = [
  "Flutter",
  "Dart",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "REST APIs",
  "Git/GitHub",
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
