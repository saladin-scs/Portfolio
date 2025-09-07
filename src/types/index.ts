// ---------------- Interfaces ----------------

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  socialLinks?: { text: string; href: string }[]; // optional if needed in hero
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

// ---------------- Example Social Links ----------------

export const socialLinks = [
  { text: "LinkedIn", href: "https://linkedin.com/in/saleheddinkhalfaoui" },
  { text: "GitHub", href: "https://github.com/saladin-scs" },
  { text: "Portfolio", href: "https://saladinproduction.vercel.app" },
  { text: "Resume", href: "https://saladinproduction.vercel.app/SalehEddineKhalfaoui_Resume.pdf" },
];
