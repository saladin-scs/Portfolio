// ---------------- Locale ----------------

export type Locale = "en" | "fr";

export interface UiStrings {
  sections: {
    experience: string;
    projects: string;
    github: string;
    about: string;
    resume: string;
  };
  hero: {
    getInTouch: string;
    professionalTitle: string;
    contactTitle: string;
    contactSubtitle: string;
    emailMe: string;
    copyEmail: string;
    copied: string;
    downloadCv: string;
  };
  experience: {
    viewExperience: string;
    viewHighlights: string;
    overview: string;
    architecture: string;
    keyContributions: string;
    acknowledgements: string;
    technologiesAt: string;
    architectureFlow: string;
    relatedProject: string;
  };
  projects: {
    viewProject: string;
    source: string;
    liveDemo: string;
    screenshots: string;
    preview: string;
    technologies: string;
    overview: string;
    keyFeatures: string;
    architecture: string;
    aiSolution: string;
    frontend: string;
    backend: string;
    devopsHa: string;
    team: string;
    guidance: string;
    stack: string;
    closeProject: string;
    openProjectDetails: string;
    technologiesIn: string;
    projectScreenshots: string;
  };
  resume: {
    downloadCv: string;
    openNewTab: string;
    fullScreen: string;
    previewNote: string;
    noscript: string;
    downloadPdf: string;
    closeFullscreen: string;
    fullscreenLabel: string;
  };
  footer: {
    designedBy: string;
    credit: string;
  };
  header: {
    homeLink: string;
    logoAlt: string;
    language: string;
  };
  language: {
    en: string;
    fr: string;
    switchToEn: string;
    switchToFr: string;
  };
  theme: {
    label: string;
    toggle: string;
    system: string;
    light: string;
    dark: string;
  };
  github: {
    subtitle: string;
    publicRepos: string;
    totalStars: string;
    followers: string;
    contributions: string;
    contributionsAlt: string;
    recentRepos: string;
    languages: string;
    commitActivity: string;
    lastPush: string;
    commit: string;
    commits: string;
    viewProfile: string;
    unavailable: string;
  };
  aboutSection: {
    badge: string;
    readMore: string;
  };
  notFound: {
    title: string;
    heading: string;
    description: string;
    home: string;
    projects: string;
    experience: string;
  };
}

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
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  resume: ResumeProps;
  github: GitHubConfig;
}

export interface GitHubConfig {
  username: string;
  profileUrl: string;
}

export interface ResumeProps {
  file: string;
  title: string;
  description: string;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  socialLinks?: { text: string; href: string }[]; // optional if needed in hero
}

export interface ExperienceContribution {
  title: string;
  description: string;
}

export interface ExperienceDetails {
  overview: string;
  architecture: string[];
  contributions: ExperienceContribution[];
  acknowledgements?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location?: string;
  badge?: string;
  summary: string | string[];
  technologies?: string[];
  logo?: string;
  linkExternal?: { text: string; href: string };
  details?: ExperienceDetails;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedProjectSlug?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechGroup {
  label: string;
  items: string[];
}

export interface ProjectLink {
  text: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  features: ProjectFeature[];
  architecture: string[];
  architectureDescription?: string;
  ai?: {
    overview: string;
    capabilities: ProjectFeature[];
  };
  frontend: string;
  backend: string;
  devops: string;
  highAvailability: string;
  monitoring: string;
  engineeringChallenges: ProjectFeature[];
  myContribution: string;
  team?: {
    members: string[];
    guidance?: string;
  };
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  subtitle?: string;
  badge?: string;
  tagline?: string;
  technologies?: string[];
  techGroups?: ProjectTechGroup[];
  links?: ProjectLink[];
  featured?: boolean;
  images?: ProjectImage[];
  caseStudy?: ProjectCaseStudy;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface AboutFocusArea {
  title: string;
  description: string;
}

export interface AboutProps {
  paragraphs: string[];
  focusTitle: string;
  focusAreas: AboutFocusArea[];
  quote: string;
  image: string;
}

// ---------------- Example Social Links ----------------

export const socialLinks = [
  { text: "LinkedIn", href: "https://www.linkedin.com/in/saleheddinkhalfaoui/?skipRedirect=true" },
  { text: "GitHub", href: "https://github.com/saladin-scs" },
  { text: "Portfolio", href: "https://saladinproduction.vercel.app" },
  { text: "Resume", href: "/cv/Saleh_Eddine_Khalfaoui_CV_ATS.pdf" },
];
