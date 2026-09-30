import {
  ExperienceItem,
  ProjectItem,
  ServiceItem,
  SkillCategory,
  SocialLink,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Raj Patidar",
  role: "Frontend Developer | React.js | Next.js | TypeScript",
  headline: "Frontend Developer building modern web experiences with React.js, Next.js & TypeScript.",
  shortDescription:
    "I build responsive, scalable and production-ready web applications with a strong focus on clean UI, performance and user experience.",
  aboutText: [
    "I am a frontend developer focused on React.js, Next.js, and TypeScript, dedicated to crafting refined, accessible, and high-performance user interfaces.",
    "My expertise spans modern web engineering, seamless REST API integration, robust JWT authentication, and implementing role-based access control across complex applications.",
    "I take pride in writing clean, maintainable, and type-safe code while designing reusable component architectures that bridge aesthetic visual design with rock-solid engineering.",
  ],
  status: "Available for Frontend & Next.js roles",
  location: "India",
  email: "user.rajpatidar@gmail.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rajpatidar00",
    icon: "Github",
    username: "@rajpatidar00",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajpatidar-dev/",
    icon: "Linkedin",
    username: "in/rajpatidar-dev",
  },
  {
    label: "Email",
    href: "mailto:user.rajpatidar@gmail.com",
    icon: "Mail",
    username: "user.rajpatidar@gmail.com",
  },
];

export const ABOUT_PILLARS = [
  {
    title: "Responsive Web Applications",
    description: "Designing fluid, mobile-first layouts that function seamlessly across smartphones, tablets, and wide monitors.",
  },
  {
    title: "REST API Integration",
    description: "Connecting frontend interfaces with backend services using Axios and modern asynchronous data fetching patterns.",
  },
  {
    title: "JWT Authentication",
    description: "Implementing secure token management, session handling, and protected route guards.",
  },
  {
    title: "Role-Based Access Control",
    description: "Structuring granular permission checks, protected dashboard views, and role-driven UI component rendering.",
  },
  {
    title: "Reusable Components",
    description: "Authoring modular, well-typed React component libraries following shadcn/ui patterns and single-responsibility principles.",
  },
  {
    title: "Clean & Maintainable Code",
    description: "Writing readable, scalable TypeScript code with clear folder organization, strict type checking, and minimal technical debt.",
  },
  {
    title: "Modern UI Development",
    description: "Crafting polished user experiences with Tailwind CSS, clean micro-interactions, and accessible UI primitives.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Core technologies used to build responsive, reactive client interfaces",
    skills: [
      { name: "React.js", category: "frontend", badge: "Core" },
      { name: "Next.js", category: "frontend", badge: "Core" },
      { name: "TypeScript", category: "frontend", badge: "Strict Types" },
      { name: "JavaScript", category: "frontend", badge: "ES6+" },
      { name: "HTML", category: "frontend", badge: "Semantic" },
      { name: "CSS", category: "frontend", badge: "Modern" },
      { name: "Tailwind CSS", category: "frontend", badge: "Utility-first" },
      { name: "shadcn/ui", category: "frontend", badge: "Design System" },
    ],
  },
  {
    title: "Backend & API Integration",
    description: "Connecting frontend interfaces with server-side infrastructure and auth",
    skills: [
      { name: "REST APIs", category: "backend", badge: "Integration" },
      { name: "Axios", category: "backend", badge: "HTTP Client" },
      { name: "JWT Authentication", category: "backend", badge: "Security & Auth" },
      { name: "WebSockets", category: "backend", badge: "Real-Time" },
    ],
  },
  {
    title: "Developer Tools & Environment",
    description: "Modern tools and workflows for collaborative shipping and version control",
    skills: [
      { name: "Git", category: "tools", badge: "VCS" },
      { name: "GitHub", category: "tools", badge: "Collaboration" },
      { name: "VS Code", category: "tools", badge: "Editor" },
      { name: "Cursor", category: "tools", badge: "AI Editor" },
      { name: "GitHub Copilot", category: "tools", badge: "Productivity" },
      { name: "Antigravity IDE", category: "tools", badge: "AI Assistant" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Developer / Next.js Developer",
    company: "Kalinga Vriti",
    period: "Present",
    type: "Full-Time",
    current: true,
    focusPoints: [
      "Developing frontend features using Next.js and React",
      "TypeScript-based development across application modules",
      "Building reusable, accessible UI components",
      "API integration using Axios and asynchronous data handling",
      "Implementing responsive design across all screen sizes",
      "Engineering event and opportunity-related features",
      "Improving UI/UX and frontend performance",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Axios"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "school-erp",
    title: "Akshar School ERP",
    tagline: "Multi-tenant centralized school management platform",
    description:
      "A multi-tenant school management platform designed to manage school operations through a centralized dashboard.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "REST API",
      "JWT",
      "NestJS",
      "PostgreSQL",
    ],
    features: [
      "Multi-tenant architecture",
      "Role-based access",
      "Student management",
      "Teacher management",
      "Attendance",
      "Timetable",
      "Subject management",
      "Dashboard management",
    ],
    githubUrl: "https://github.com/rajpatidar00",
    liveUrl: "https://akshar-prod.vercel.app/",
    image: "/projects/akshar.png",
    isPlaceholder: false,
  },
  {
    id: "kalinga-events",
    title: "Kalinga Vriti Events",
    tagline: "Opportunity discovery & event engagement platform",
    description:
      "An event and opportunity platform where users can discover and interact with different opportunities and events.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Axios",
    ],
    features: [
      "Event listing",
      "Event details",
      "Pagination",
      "Filtering",
      "Calendar integration",
      "Responsive UI",
      "API integration",
    ],
    githubUrl: "https://github.com/rajpatidar00",
    liveUrl: "https://www.kalingavriti.com/",
    image: "/projects/kalingaVriti2.png",
    isPlaceholder: false,
  },
  {
    id: "blinkchat",
    title: "BlinkChat — Real-Time Chat Application",
    tagline: "Real-time one-to-one messaging platform",
    description:
      "A real-time one-to-one messaging app built using WebSockets, delivering instant message updates with zero page refresh. Implemented persistent authentication sessions that survive browser reloads, avoiding repeated logins, with clear component separation and a fully responsive UI tested across mobile and desktop breakpoints.",
    technologies: [
      "React.js",
      "WebSocket",
      "Authentication",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    features: [
      "Real-time 1-on-1 messaging via WebSockets",
      "Instant message updates with zero page refresh",
      "Persistent authentication sessions surviving reloads",
      "Modular frontend & clear component separation",
      "Fully responsive UI across mobile & desktop",
      "Live connection state & synchronization",
    ],
    githubUrl: "https://github.com/rajpatidar00",
    image: "/projects/blinkchat.svg",
    isPlaceholder: false,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description:
      "Building responsive and scalable interfaces using React and Next.js.",
    icon: "Layout",
    highlights: [
      "Next.js App Router & Server Components",
      "State management & optimized re-renders",
      "Cross-browser & mobile-first responsiveness",
    ],
  },
  {
    id: "ui-dev",
    title: "UI Development",
    description:
      "Creating clean, accessible and responsive interfaces using Tailwind CSS and shadcn/ui.",
    icon: "Palette",
    highlights: [
      "Design systems & component tokens",
      "Accessible ARIA attributes & keyboard flow",
      "Consistent typography and spacing hierarchy",
    ],
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Integrating REST APIs and handling authentication and application data.",
    icon: "Network",
    highlights: [
      "Axios interceptors & error boundaries",
      "JWT token storage & authorization headers",
      "Optimistic UI updates & async loading states",
    ],
  },
  {
    id: "modern-web-apps",
    title: "Modern Web Applications",
    description:
      "Building production-ready applications with TypeScript and modern frontend architecture.",
    icon: "Cpu",
    highlights: [
      "Strict TypeScript types and interfaces",
      "Modular folder hierarchy & separation of concerns",
      "Clean, readable, recruiter-friendly codebases",
    ],
  },
];

export const CODE_SNIPPET = `// developer-profile.ts
import { Developer } from "@/types";

export const rajPatidar: Developer = {
  name: "Raj Patidar",
  role: "Frontend Developer",
  specialization: ["React.js", "Next.js", "TypeScript"],
  currentCompany: "Kalinga Vriti",
  coreFocus: [
    "Clean & Scalable UI",
    "REST API & JWT Auth",
    "Role-Based Access Control",
    "Performance & UX"
  ],
  status: "Available for new opportunities",
};`;
