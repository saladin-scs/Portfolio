/**
 * Production site URL — must match astro.config.mjs `site` and deployment domain.
 * @see https://saladinproduction.vercel.app
 */
export const SITE_URL = "https://saladinproduction.vercel.app";

export const SITE_NAME = "Saleh Eddine Khalfaoui";
export const DEFAULT_OG_IMAGE = "/og/portfolio.svg";

export const KNOWS_ABOUT = [
  "Full-Stack Development",
  "Backend Engineering",
  "Software Architecture",
  "Scalable Web Applications",
  "Microservices",
  "Distributed Systems",
  "Event-Driven Architecture",
  "Artificial Intelligence",
  "DevOps",
  "Cloud Infrastructure",
  "REST APIs",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "NestJS",
  "Node.js",
  "Apache Kafka",
  "Docker",
  "Kubernetes",
  "Git",
  "CI/CD",
  "Python",
  "Machine Learning",
] as const;

export function absoluteUrl(path: string, siteUrl: string = SITE_URL): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`).href;
}

export function localePath(locale: "en" | "fr"): string {
  return locale === "fr" ? "/fr/" : "/";
}

export interface PageSeo {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "profile";
  ogImage?: string;
  noindex?: boolean;
}

export interface JsonLdGraphInput {
  locale: "en" | "fr";
  pageUrl: string;
  pageTitle: string;
  personName: string;
  jobTitle: string;
  description: string;
  email: string;
  image: string;
  socialLinks: { text: string; href: string }[];
  projects: Array<{
    name: string;
    summary: string;
    seoTitle?: string;
    seoDescription?: string;
    slug?: string;
    image?: string;
    url?: string;
  }>;
  experiences: Array<{
    company: string;
    position: string;
    seoTitle?: string;
    seoDescription?: string;
    slug?: string;
  }>;
}

function externalProfiles(links: { text: string; href: string }[]): string[] {
  return links
    .map(({ href }) => href)
    .filter((href) => href.startsWith("http") && !href.includes("vercel.app"));
}

export function buildJsonLdGraph(input: JsonLdGraphInput): Record<string, unknown> {
  const siteUrl = SITE_URL;
  const personId = `${input.pageUrl}#person`;
  const websiteId = `${siteUrl}#website`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: input.personName,
    jobTitle: input.jobTitle,
    url: input.pageUrl,
    email: input.email,
    image: absoluteUrl(input.image, siteUrl),
    description: input.description,
    sameAs: externalProfiles(input.socialLinks),
    knowsAbout: [...KNOWS_ABOUT],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: SITE_NAME,
    description: input.description,
    inLanguage: input.locale === "fr" ? "fr-TN" : "en-US",
    publisher: { "@id": personId },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${input.pageUrl}#profile`,
    url: input.pageUrl,
    name: input.pageTitle,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    inLanguage: input.locale === "fr" ? "fr-TN" : "en-US",
  };

  const projectList = {
    "@type": "ItemList",
    "@id": `${input.pageUrl}#projects`,
    name: input.locale === "fr" ? "Projets" : "Projects",
    itemListElement: input.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.seoTitle ?? project.name,
        description: project.seoDescription ?? project.summary,
        url:
          project.url ??
          `${input.pageUrl}#${project.slug ?? project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        applicationCategory: "DeveloperApplication",
        ...(project.image ? { image: absoluteUrl(project.image, siteUrl) } : {}),
      },
    })),
  };

  const experienceList = {
    "@type": "ItemList",
    "@id": `${input.pageUrl}#experience`,
    name: input.locale === "fr" ? "Expérience professionnelle" : "Work Experience",
    itemListElement: input.experiences.map((exp, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "OrganizationRole",
        roleName: exp.position,
        description: exp.seoDescription,
        memberOf: {
          "@type": "Organization",
          name: exp.company,
        },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, projectList, experienceList],
  };
}
