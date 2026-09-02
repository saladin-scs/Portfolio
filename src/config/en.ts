import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Saleh Eddine Khalfaoui | Full-Stack Software Engineer",
  author: "saladinProduction",
  description:
    "Full-Stack Software Engineer based in Tunisia, building scalable web applications, microservices, AI-powered solutions, and modern backend systems with React, Spring Boot, NestJS, Kafka, and DevOps.",
  lang: "en",
  siteLogo: "/saladin.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "GitHub", href: "#github" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/saleheddinkhalfaoui/?skipRedirect=true" },
    { text: "GitHub", href: "https://github.com/saladin-scs" },
    { text: "Portfolio", href: "https://saladinproduction.vercel.app" },
    { text: "Resume", href: "/cv/Saleh-Eddine-Khalfaoui-CV.pdf" },
  ],
  socialImage: "/og/portfolio.svg",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Saleh Eddinne Khalfaoui",
    specialty: "Full-Stack Software Engineer | AI & Scalable Systems",
    summary:
      "Software Engineer based in Tunisia, focused on building scalable full-stack applications, backend systems, and AI-powered solutions. I work across modern web technologies, microservices, and DevOps to turn complex ideas into reliable software.",
    email: "goforsaladin@gmail.com",
  },
  experience: [
    {
      company: "Amen Bank",
      position: "Software Engineering Intern",
      startDate: "Jun 2026",
      endDate: "Aug 2026",
      location: "Tunis, Tunisia",
      badge: "Summer Internship · 2026",
      logo: "/Logo_Amen_Bank.png",
      slug: "amen-bank-2026",
      seoTitle: "Amen Bank — Microservices & AI Software Engineering",
      seoDescription:
        "Software engineering internship at Amen Bank building AI-powered web applications with Spring Boot microservices, Apache Kafka event-driven architecture, and scalable backend systems in a banking environment.",
      relatedProjectSlug: "bytebattle",
      summary: [
        "Contributed to an AI-powered web project built around microservices and event-driven architecture, with a focus on scalable backend engineering.",
        "Designed and developed Spring Boot services with Apache Kafka for asynchronous communication between distributed components.",
        "Integrated AI models into the application and worked within a professional banking environment where reliability and maintainability are critical.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Apache Kafka",
        "AI",
        "REST APIs",
        "Docker",
        "Git",
        "Backend Development",
      ],
      linkExternal: {
        text: "View LinkedIn Post",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7499767688060325888/",
      },
      details: {
        overview:
          "Contributed to the development of a web application integrating Artificial Intelligence capabilities, with a scalable backend based on microservices and event-driven architecture.",
        architecture: [
          "Client / Frontend",
          "Backend Services",
          "Spring Boot Microservices",
          "Apache Kafka",
          "Asynchronous Event-Driven Communication",
          "AI / Intelligent Services",
        ],
        contributions: [
          {
            title: "Microservices Architecture",
            description:
              "Designed and worked with independently deployable backend services.",
          },
          {
            title: "Spring Boot",
            description:
              "Developed backend services with Java and Spring Boot, focusing on maintainability, scalability, and clean architecture.",
          },
          {
            title: "Apache Kafka",
            description:
              "Implemented asynchronous event-driven communication to improve service decoupling and workflow efficiency.",
          },
          {
            title: "Artificial Intelligence",
            description:
              "Integrated AI models to introduce intelligent capabilities into the application.",
          },
          {
            title: "Banking Environment",
            description:
              "Worked within a professional banking context where reliability, maintainability, and scalability are important engineering considerations.",
          },
        ],
        acknowledgements:
          "Special thanks to Amen Bank and to Mr. Baccouri Mohamed Amine and Mr. Kais Alioua for their guidance and support throughout the internship.",
      },
    },
    {
      company: "Amen Bank",
      position: "Software Engineering Intern",
      startDate: "Summer 2025",
      endDate: "Summer 2025",
      location: "Tunis, Tunisia",
      badge: "Summer Internship · 2025",
      logo: "/Logo_Amen_Bank.png",
      slug: "amen-bank-2025",
      seoTitle: "Amen Bank — Software Engineering Internship",
      seoDescription:
        "Software engineering internship at Amen Bank focused on web application development, backend services, databases, REST APIs, and enterprise software delivery in a professional banking environment.",
      summary: [
        "Contributed to the development of a web-based solution within a professional banking environment, gaining hands-on experience in software engineering, application development, and real-world project delivery.",
        "Participated in the analysis, development, and implementation of application features based on project requirements.",
        "Developed and integrated web application components while following structured software engineering practices.",
        "Worked with backend services and databases to support application functionality and data management.",
        "Collaborated with the development team throughout the implementation and testing phases.",
        "Applied software engineering concepts in a real-world banking environment, with a focus on maintainability, reliability, and code quality.",
        "Strengthened practical experience in developing enterprise-oriented software solutions and working within a professional engineering team.",
      ],
      technologies: [
        "Web Development",
        "Backend Development",
        "Databases",
        "REST APIs",
        "Software Engineering",
      ],
    },
    {
      company: "Mobelite Labs",
      position: "Web & BI Developer",
      startDate: "Feb 2024",
      endDate: "Jan 2025",
      slug: "mobelite-labs",
      seoTitle: "Mobelite Labs — Web & BI Developer",
      seoDescription:
        "Web and Business Intelligence development role building React and Next.js interfaces, Power BI dashboards, REST API integrations, and automated ETL reporting pipelines.",
      summary: [
        "Developed and delivered an interactive Web & Business Intelligence platform combining modern frontend technologies with data visualization and automated data workflows.",
        "Designed and developed responsive web interfaces using React and Next.js.",
        "Integrated Power BI dashboards with REST APIs to provide interactive and real-time data visualization.",
        "Implemented and maintained automated ETL pipelines to streamline data preparation and reporting workflows.",
        "Contributed to the integration between web applications, APIs, and BI services to create a unified data experience.",
        "Managed development tasks and sprint planning using Jira, collaborating within an Agile environment.",
        "Reduced manual reporting time by 50% through automated data workflows and reporting.",
        "Improved decision-making efficiency by 30% by providing accessible, centralized, and actionable data insights.",
      ],
      technologies: [
        "React",
        "Next.js",
        "REST APIs",
        "Power BI",
        "ETL",
        "Jira",
        "Business Intelligence",
      ],
    },
  ],
  projects: [
    {
      name: "ByteBattle",
      subtitle: "Competitive Coding Platform",
      badge: "Integrated Project · ESPRIT · 2026",
      slug: "bytebattle",
      seoTitle: "ByteBattle — Full-Stack Competitive Coding Platform",
      seoDescription:
        "Full-stack competitive coding platform with coding challenges, battles, gamification, and leaderboards — built with React, NestJS, Docker, DevOps, high availability, and AI-powered recommendations.",
      summary:
        "ByteBattle is a full-stack competitive coding platform where users solve challenges, compete in coding battles, earn points, level up, and climb leaderboards. Built with React and a NestJS modular monolithic backend, enhanced with AI-powered challenge recommendations and code analysis, and deployed using a containerized high-availability architecture.",
      tagline:
        "Challenge yourself. Compete. Level up. Climb the leaderboard.",
      image: "/bytebattle/home.png",
      images: [
        {
          src: "/bytebattle/home.png",
          alt: "ByteBattle homepage with featured challenges and morning picks",
          caption: "Homepage",
        },
        {
          src: "/bytebattle/challenges.png",
          alt: "ByteBattle challenges browser with search and recommendations",
          caption: "Challenges",
        },
        {
          src: "/bytebattle/challenge-detail.png",
          alt: "ByteBattle challenge detail with language selection",
          caption: "Challenge Detail",
        },
      ],
      featured: true,
      technologies: [
        "React",
        "NestJS",
        "Modular Monolith",
        "AI",
        "Docker",
        "DevOps",
        "High Availability",
      ],
      techGroups: [
        { label: "Frontend", items: ["React"] },
        { label: "Backend", items: ["NestJS", "Modular Monolithic Architecture"] },
        { label: "AI", items: ["Challenge Recommendations", "Code Analysis"] },
        { label: "Infrastructure", items: ["Docker"] },
        {
          label: "Engineering",
          items: ["DevOps", "High Availability", "Monitoring"],
        },
      ],
      links: [{ text: "Live Demo", href: "https://esprit-pi-4-twin1-2026-byte-battle-umber.vercel.app" }],
      caseStudy: {
        overview:
          "ByteBattle was developed as a competitive coding platform designed to make programming challenges more engaging through real-time competition, progression, and gamification — backed by a modular monolithic NestJS backend and an integrated AI layer for personalized recommendations and code analysis.",
        features: [
          {
            title: "Coding Challenges",
            description:
              "Users can solve programming challenges and improve their skills through progressively engaging coding exercises.",
          },
          {
            title: "Coding Battles",
            description:
              "Users can compete against others through coding battles, adding a competitive dimension to traditional coding platforms.",
          },
          {
            title: "Gamification",
            description:
              "A progression system allows users to earn points, level up, track progression, and compete on leaderboards.",
          },
          {
            title: "Leaderboards",
            description:
              "Users can compare their performance and ranking against other participants.",
          },
          {
            title: "AI Challenge Recommendations",
            description:
              "An intelligent recommendation system suggests relevant coding challenges based on user profile, activity, and progression — surfacing personalized picks such as the platform's \"Recommended for You\" and \"Morning Picks\" sections.",
          },
          {
            title: "AI Code Analysis",
            description:
              "An analysis system evaluates the code submitted by users, providing intelligent feedback on their solutions to support learning and skill improvement.",
          },
        ],
        architecture: [
          "Users",
          "React Frontend",
          "API Calls",
          "NestJS Backend — Modular Monolithic Architecture",
          "AI Layer — Recommendations & Code Analysis",
          "Containerized Stack",
          "HA Cluster — High Availability",
          "Monitoring / Ops",
        ],
        architectureDescription:
          "The backend follows a modular monolithic architecture built with NestJS — a single deployable application structured into independent modules (challenges, battles, users, AI, progression, etc.). This approach keeps the codebase cohesive and easier to develop as a team, while maintaining clear boundaries between domains without the operational overhead of distributed microservices.",
        ai: {
          overview:
            "An AI solution was integrated into the platform to enhance the user experience beyond standard coding exercises — helping users discover the right challenges and receive meaningful feedback on their submitted code.",
          capabilities: [
            {
              title: "Challenge Recommendation System",
              description:
                "Analyzes user history, skill level, and platform activity to recommend coding challenges tailored to each user — powering features like personalized challenge suggestions and curated daily picks.",
            },
            {
              title: "Code Analysis System",
              description:
                "Examines the code written and submitted by users during challenges, providing intelligent analysis and feedback to help users understand their solutions and improve their programming skills.",
            },
          ],
        },
        frontend:
          "The frontend was developed using React to provide an interactive interface for coding challenges, battles, user progression, leaderboards, gamification, and AI-driven features such as personalized challenge recommendations — emphasizing component-based development and engaging user experiences.",
        backend:
          "NestJS powers the backend as a modular monolithic application — organized into dedicated modules with clear responsibilities for API development, business logic, user management, challenge workflows, and AI integration, while remaining a single cohesive deployable unit.",
        devops:
          "The application was containerized to provide consistent environments across development and deployment while simplifying application management and scalability.",
        highAvailability:
          "ByteBattle was deployed using a high-availability cluster architecture designed to improve application availability and eliminate dependence on a single application instance.",
        monitoring:
          "The deployment environment was monitored to provide visibility into application and infrastructure behavior and help maintain reliable operation.",
        engineeringChallenges: [
          {
            title: "Scalability",
            description:
              "Designing a platform capable of supporting competitive user activity.",
          },
          {
            title: "Availability",
            description:
              "Designing the deployment architecture around high availability rather than relying on a single instance.",
          },
          {
            title: "Containerization",
            description:
              "Ensuring consistent application environments through containerized deployment.",
          },
          {
            title: "Full-Stack Integration",
            description:
              "Connecting the React frontend with the NestJS backend into a cohesive platform.",
          },
          {
            title: "Gamification",
            description:
              "Designing application flows around points, progression, battles, and leaderboards.",
          },
          {
            title: "AI Integration",
            description:
              "Integrating intelligent recommendation and code analysis capabilities into the platform's challenge workflow and user experience.",
          },
        ],
        myContribution:
          "Contributed to the development of the full-stack platform, working across frontend and backend development, AI feature integration, and the application's DevOps and deployment architecture.",
        team: {
          members: [
            "Mohamed Chebbi",
            "Sirine Metoui",
            "Mayss Jaballi",
            "Hamed",
          ],
          guidance: "Oumeima IBN ELFEKIH",
        },
      },
    },
    {
      name: "Analyse de la Performance F1 avec Tableau Desktop",
      summary:
        "Dashboards interactifs pour analyser performances pilotes et equipes. Technologies : Tableau, Python, SQL, Data Visualization, Data Analysis",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Elfirma – Web & Software Solution pour l’Agriculture",
      summary:
        "Elfirma is a digital platform designed to modernize the agricultural sector by connecting farmers, experts, and suppliers. It offers integrated web and software solutions that facilitate access to agricultural services, expert advice, and a wide range of products",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "MediConnect – Web App for Medical Practices",
      summary:
        "Web application designed to streamline operations for medical practices by connecting doctors, specialists, and suppliers. It provides integrated solutions for managing appointments, accessing medical expertise, and sourcing healthcare products and services",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    paragraphs: [
      "I'm a Software Engineer based in Tunisia, focused on designing and building scalable, maintainable, and intelligent software solutions.",
      "My work spans full-stack web development, backend engineering, modern software architecture, and Artificial Intelligence. I enjoy turning complex requirements into well-structured applications, from intuitive user interfaces to robust backend systems and distributed architectures.",
      "I have hands-on experience building scalable web applications using modern architectural patterns, including microservices and event-driven architectures, with technologies such as Spring Boot, React, NestJS, and Apache Kafka. I'm particularly interested in designing systems that are decoupled, resilient, and built to evolve as requirements and scale grow.",
      "Beyond traditional application development, I explore the integration of AI into real-world software products, building solutions where intelligent models complement robust application architecture rather than existing in isolation.",
      "I also have experience across DevOps, containerization, CI/CD, monitoring, and high-availability environments, giving me a broader perspective on the complete software lifecycle — from architecture and development to deployment and operation.",
      "I'm continuously expanding my engineering skills through challenging projects, collaborative environments, and technologies that push me toward building reliable, scalable, and impactful software.",
    ],
    focusTitle: "What I Focus On",
    focusAreas: [
      {
        title: "Scalable Systems",
        description:
          "Designing modular and maintainable applications capable of evolving with growing business and technical requirements.",
      },
      {
        title: "Modern Architecture",
        description:
          "Microservices, event-driven communication, REST APIs, service decoupling, and clean architectural principles.",
      },
      {
        title: "AI-Powered Solutions",
        description:
          "Integrating Artificial Intelligence into practical applications to create intelligent, data-driven user experiences and business capabilities.",
      },
      {
        title: "Full-Stack Engineering",
        description:
          "Building complete web applications across frontend, backend, APIs, databases, and system integration.",
      },
      {
        title: "DevOps & Reliability",
        description:
          "Containerization, CI/CD, monitoring, deployment automation, and high-availability architectures.",
      },
    ],
    quote:
      "I don't just build applications — I focus on designing the architecture behind them, understanding how the pieces communicate, and building systems that can scale.",
    image: "/saladin.png",
  },
  resume: {
    file: "/cv/Saleh-Eddine-Khalfaoui-CV.pdf",
    title: "Saleh Eddin CV",
    description:
      "Software Engineer specializing in full-stack development, backend engineering, and DevOps. View or download my latest curriculum vitae below.",
  },
  github: {
    username: "saladin-scs",
    profileUrl: "https://github.com/saladin-scs",
  },
};
