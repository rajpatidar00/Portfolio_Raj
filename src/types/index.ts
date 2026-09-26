export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools";
  iconName?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  current: boolean;
  focusPoints: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  username?: string;
}
