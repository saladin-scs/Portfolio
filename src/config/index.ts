import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Saleh Eddinne Khalfaoui — Mobile & Web Engineer",
  author: "saladinProduction",
  description:
    "Software Engineer based in Tunisia. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/saleheddinkhalfaoui" },
    { text: "GitHub", href: "https://github.com/saladin-scs" },
    { text: "Portfolio", href: "https://saladinproduction.vercel.app" },
    { text: "Resume", href: "https://saladinproduction.vercel.app/SalehEddineKhalfaoui_Resume.pdf" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Saleh Eddinne Khalfaoui",
    specialty: "Mobile & Web Developer",
    summary:
      "Web Engineer based in Tunisia. I specialize in UI design, web and mobile application development and maintenance.",
    email: "goforsaladin@gmail.com",
  },
  experience: [
    {
      company: "Mobelite Labs",
      position: "Web & BI Developer",
      startDate: "Feb 2024",
      endDate: "Jan 2025",
      summary: [
        "I designed and developed an interactive web application using modern frameworks (React/Next.js), integrating Power BI dashboards with REST APIs and automated ETL pipelines. By managing tasks and sprints in Jira, I ensured efficient collaboration and delivery. This solution enabled real-time data visualization and reporting, reduced manual reporting time by 50%, and improved decision-making efficiency by 30%."
      ],
    },
  ],
  projects: [
    {
      name: "Analyse de la Performance F1 avec Tableau Desktop",
      summary:
        "Dashboards interactifs pour analyser performances pilotes et equipes. Technologies : Tableau, Python, SQL, Data Visualization, Data Analysis",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Elfirma – Web & Software Solution pour l’Agriculture",
      summary:
        "Elfirma is a digital platform designed to modernize the agricultural sector by connecting farmers, experts, and suppliers. It offers integrated web and software solutions that facilitate access to agricultural services, expert advice, and a wide range of products",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "MediConnect – Web App for Medical Practices",
      summary:
        "Web application designed to streamline operations for medical practices by connecting doctors, specialists, and suppliers. It provides integrated solutions for managing appointments, accessing medical expertise, and sourcing healthcare products and services",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, Saleh Eddine, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};
