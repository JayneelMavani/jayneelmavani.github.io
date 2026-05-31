export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  url: string;
  email: string;
  resumePath: string;
  logo: string;
  social: SocialLink[];
  navigation: NavLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  hero: {
    greeting: string;
    name: string;
    role: string;
    bio: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  about: {
    intro: string[];
    highlights: string[];
  };
  cta: {
    title: string;
    titleAccent: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  overview: string;
  features: string[];
  techStack: string[];
  screenshots: string[];
  challenges: string;
  solution: string;
  architecture?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineEntry {
  id: string;
  type: "education" | "experience" | "achievement";
  period: string;
  title: string;
  organization: string;
  description: string;
}
