import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Saleh Eddine Khalfaoui | Ingénieur Logiciel Full-Stack",
  author: "saladinProduction",
  description:
    "Ingénieur logiciel full-stack basé en Tunisie, spécialisé dans les applications web évolutives, les microservices, les solutions propulsées par l'IA et les systèmes backend modernes avec React, Spring Boot, NestJS, Kafka et DevOps.",
  lang: "fr",
  siteLogo: "/saladin.png",
  navLinks: [
    { text: "Expérience", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "GitHub", href: "#github" },
    { text: "À propos", href: "#about" },
    { text: "CV", href: "#resume" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/saleheddinkhalfaoui/?skipRedirect=true" },
    { text: "GitHub", href: "https://github.com/saladin-scs" },
    { text: "Portfolio", href: "https://saladinproduction.vercel.app" },
    { text: "CV", href: "/cv/Saleh_Eddine_Khalfaoui_CV_ATS.pdf" },
  ],
  socialImage: "/og/portfolio.svg",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Saleh Eddinne Khalfaoui",
    specialty: "Ingénieur Logiciel Full-Stack | IA & Systèmes Évolutifs",
    summary:
      "Ingénieur logiciel basé en Tunisie, spécialisé dans la création d'applications full-stack évolutives, de systèmes backend et de solutions propulsées par l'IA. J'interviens sur les technologies web modernes, les microservices et le DevOps pour transformer des idées complexes en logiciels fiables.",
    email: "goforsaladin@gmail.com",
  },
  experience: [
    {
      company: "Amen Bank",
      position: "Stagiaire Ingénieur Logiciel",
      startDate: "Juin 2026",
      endDate: "Août 2026",
      location: "Tunis, Tunisie",
      badge: "Stage d'été · 2026",
      logo: "/Logo_Amen_Bank.png",
      slug: "amen-bank-2026",
      seoTitle: "Amen Bank — Microservices & Ingénierie Logicielle IA",
      seoDescription:
        "Stage en ingénierie logiciel chez Amen Bank : applications web propulsées par l'IA, microservices Spring Boot, architecture événementielle Apache Kafka et systèmes backend évolutifs en environnement bancaire.",
      relatedProjectSlug: "bytebattle",
      summary: [
        "Contribution à un projet web propulsé par l'IA basé sur des microservices et une architecture événementielle, avec un focus sur l'ingénierie backend scalable.",
        "Conception et développement de services Spring Boot avec Apache Kafka pour la communication asynchrone entre composants distribués.",
        "Intégration de modèles IA dans l'application et travail dans un environnement bancaire professionnel où la fiabilité et la maintenabilité sont essentielles.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Apache Kafka",
        "IA",
        "REST APIs",
        "Docker",
        "Git",
        "Développement Backend",
      ],
      linkExternal: {
        text: "Voir le post LinkedIn",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7499767688060325888/",
      },
      details: {
        overview:
          "Contribution au développement d'une application web intégrant des capacités d'Intelligence Artificielle, avec un backend scalable basé sur des microservices et une architecture événementielle.",
        architecture: [
          "Client / Frontend",
          "Services Backend",
          "Microservices Spring Boot",
          "Apache Kafka",
          "Communication Asynchrone Événementielle",
          "IA / Services Intelligents",
        ],
        contributions: [
          {
            title: "Architecture Microservices",
            description:
              "Conception et travail avec des services backend déployables indépendamment.",
          },
          {
            title: "Spring Boot",
            description:
              "Développement de services backend avec Java et Spring Boot, en mettant l'accent sur la maintenabilité, la scalabilité et une architecture propre.",
          },
          {
            title: "Apache Kafka",
            description:
              "Mise en place d'une communication asynchrone événementielle pour améliorer le découplage des services et l'efficacité des flux de travail.",
          },
          {
            title: "Intelligence Artificielle",
            description:
              "Intégration de modèles IA pour introduire des capacités intelligentes dans l'application.",
          },
          {
            title: "Environnement Bancaire",
            description:
              "Travail dans un contexte bancaire professionnel où la fiabilité, la maintenabilité et la scalabilité sont des considérations d'ingénierie importantes.",
          },
        ],
        acknowledgements:
          "Remerciements particuliers à Amen Bank ainsi qu'à M. Baccouri Mohamed Amine et M. Kais Alioua pour leur encadrement et leur soutien tout au long du stage.",
      },
    },
    {
      company: "Amen Bank",
      position: "Stagiaire Ingénieur Logiciel",
      startDate: "Été 2025",
      endDate: "Été 2025",
      location: "Tunis, Tunisie",
      badge: "Stage d'été · 2025",
      logo: "/Logo_Amen_Bank.png",
      slug: "amen-bank-2025",
      seoTitle: "Amen Bank — Stage en Ingénierie Logicielle",
      seoDescription:
        "Stage en ingénierie logiciel chez Amen Bank axé sur le développement d'applications web, les services backend, les bases de données, les API REST et la livraison de logiciels en entreprise.",
      summary: [
        "Contribution au développement d'une solution web dans un environnement bancaire professionnel, avec une expérience concrète en ingénierie logicielle, développement d'applications et livraison de projets réels.",
        "Participation à l'analyse, au développement et à la mise en œuvre de fonctionnalités applicatives selon les exigences du projet.",
        "Développement et intégration de composants d'applications web en suivant des pratiques d'ingénierie logicielle structurées.",
        "Travail avec des services backend et des bases de données pour supporter les fonctionnalités applicatives et la gestion des données.",
        "Collaboration avec l'équipe de développement tout au long des phases d'implémentation et de tests.",
        "Application des concepts d'ingénierie logicielle dans un environnement bancaire réel, avec un focus sur la maintenabilité, la fiabilité et la qualité du code.",
        "Renforcement de l'expérience pratique dans le développement de solutions logicielles orientées entreprise au sein d'une équipe d'ingénierie professionnelle.",
      ],
      technologies: [
        "Développement Web",
        "Développement Backend",
        "Bases de données",
        "REST APIs",
        "Ingénierie Logicielle",
      ],
    },
    {
      company: "Mobelite Labs",
      position: "Développeur Web & BI",
      startDate: "Fév 2024",
      endDate: "Jan 2025",
      slug: "mobelite-labs",
      seoTitle: "Mobelite Labs — Développeur Web & BI",
      seoDescription:
        "Rôle de développement Web et Business Intelligence : interfaces React et Next.js, tableaux de bord Power BI, intégrations API REST et pipelines ETL automatisés.",
      summary: [
        "Développement et livraison d'une plateforme interactive Web & Business Intelligence combinant des technologies frontend modernes, la visualisation de données et des flux de données automatisés.",
        "Conception et développement d'interfaces web responsives avec React et Next.js.",
        "Intégration de tableaux de bord Power BI avec des API REST pour une visualisation de données interactive et en temps réel.",
        "Mise en place et maintenance de pipelines ETL automatisés pour rationaliser la préparation des données et les workflows de reporting.",
        "Contribution à l'intégration entre applications web, API et services BI pour une expérience de données unifiée.",
        "Gestion des tâches de développement et planification des sprints avec Jira, en collaboration dans un environnement Agile.",
        "Réduction du temps de reporting manuel de 50 % grâce à l'automatisation des flux de données et du reporting.",
        "Amélioration de l'efficacité de la prise de décision de 30 % en fournissant des insights accessibles, centralisés et actionnables.",
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
      subtitle: "Plateforme de Coding Compétitif",
      badge: "Projet Intégré · ESPRIT · 2026",
      slug: "bytebattle",
      seoTitle: "ByteBattle — Plateforme Compétitive Full-Stack",
      seoDescription:
        "Plateforme compétitive full-stack avec défis de code, battles, gamification et classements — React, NestJS, Docker, DevOps, haute disponibilité et recommandations IA.",
      summary:
        "ByteBattle est une plateforme compétitive full-stack où les utilisateurs résolvent des défis, s'affrontent en battles de code, gagnent des points, montent en niveau et grimpent dans les classements. Construite avec React et un backend NestJS en architecture monolithique modulaire, enrichie par des recommandations de défis et une analyse de code propulsées par l'IA, et déployée avec une architecture containerisée haute disponibilité.",
      tagline:
        "Relevez le défi. Affrontez-vous. Montez en niveau. Grimpez au classement.",
      image: "/bytebattle/home.png",
      images: [
        {
          src: "/bytebattle/home.png",
          alt: "Page d'accueil ByteBattle avec défis en vedette et sélections du matin",
          caption: "Accueil",
        },
        {
          src: "/bytebattle/challenges.png",
          alt: "Navigateur de défis ByteBattle avec recherche et recommandations",
          caption: "Défis",
        },
        {
          src: "/bytebattle/challenge-detail.png",
          alt: "Détail d'un défi ByteBattle avec sélection de langage",
          caption: "Détail du défi",
        },
      ],
      featured: true,
      technologies: [
        "React",
        "NestJS",
        "Monolithe Modulaire",
        "IA",
        "Docker",
        "DevOps",
        "Haute Disponibilité",
      ],
      techGroups: [
        { label: "Frontend", items: ["React"] },
        { label: "Backend", items: ["NestJS", "Architecture Monolithique Modulaire"] },
        { label: "IA", items: ["Recommandations de défis", "Analyse de code"] },
        { label: "Infrastructure", items: ["Docker"] },
        {
          label: "Ingénierie",
          items: ["DevOps", "Haute Disponibilité", "Monitoring"],
        },
      ],
      links: [{ text: "Démo en ligne", href: "https://esprit-pi-4-twin1-2026-byte-battle-umber.vercel.app" }],
      caseStudy: {
        overview:
          "ByteBattle a été développé comme une plateforme de coding compétitif conçue pour rendre les défis de programmation plus engageants grâce à la compétition en temps réel, la progression et la gamification — soutenu par un backend NestJS monolithique modulaire et une couche IA intégrée pour les recommandations personnalisées et l'analyse de code.",
        features: [
          {
            title: "Défis de Programmation",
            description:
              "Les utilisateurs peuvent résoudre des défis de programmation et améliorer leurs compétences à travers des exercices progressivement engageants.",
          },
          {
            title: "Battles de Code",
            description:
              "Les utilisateurs peuvent s'affronter dans des battles de code, ajoutant une dimension compétitive aux plateformes de coding traditionnelles.",
          },
          {
            title: "Gamification",
            description:
              "Un système de progression permet aux utilisateurs de gagner des points, monter en niveau, suivre leur progression et concourir sur les classements.",
          },
          {
            title: "Classements",
            description:
              "Les utilisateurs peuvent comparer leurs performances et leur rang face aux autres participants.",
          },
          {
            title: "Recommandations IA de Défis",
            description:
              "Un système de recommandation intelligent suggère des défis pertinents basés sur le profil, l'activité et la progression de l'utilisateur — alimentant des sections comme « Recommandé pour vous » et « Sélections du matin ».",
          },
          {
            title: "Analyse de Code IA",
            description:
              "Un système d'analyse évalue le code soumis par les utilisateurs, fournissant un retour intelligent sur leurs solutions pour favoriser l'apprentissage et l'amélioration des compétences.",
          },
        ],
        architecture: [
          "Utilisateurs",
          "Frontend React",
          "Appels API",
          "Backend NestJS — Architecture Monolithique Modulaire",
          "Couche IA — Recommandations & Analyse de Code",
          "Stack Containerisée",
          "Cluster HA — Haute Disponibilité",
          "Monitoring / Ops",
        ],
        architectureDescription:
          "Le backend suit une architecture monolithique modulaire construite avec NestJS — une application unique déployable structurée en modules indépendants (défis, battles, utilisateurs, IA, progression, etc.). Cette approche maintient le codebase cohérent et facilite le développement en équipe, tout en conservant des frontières claires entre les domaines sans la complexité opérationnelle des microservices distribués.",
        ai: {
          overview:
            "Une solution IA a été intégrée à la plateforme pour enrichir l'expérience utilisateur au-delà des exercices de coding standard — aidant les utilisateurs à découvrir les bons défis et recevoir un retour significatif sur leur code soumis.",
          capabilities: [
            {
              title: "Système de Recommandation de Défis",
              description:
                "Analyse l'historique, le niveau et l'activité de l'utilisateur pour recommander des défis adaptés — alimentant des fonctionnalités comme les suggestions personnalisées et les sélections quotidiennes.",
            },
            {
              title: "Système d'Analyse de Code",
              description:
                "Examine le code écrit et soumis par les utilisateurs lors des défis, fournissant une analyse et un retour intelligent pour les aider à comprendre leurs solutions et améliorer leurs compétences.",
            },
          ],
        },
        frontend:
          "Le frontend a été développé avec React pour fournir une interface interactive pour les défis, battles, progression, classements, gamification et fonctionnalités IA comme les recommandations personnalisées — mettant l'accent sur le développement par composants et des expériences utilisateur engageantes.",
        backend:
          "NestJS alimente le backend en tant qu'application monolithique modulaire — organisée en modules dédiés avec des responsabilités claires pour l'API, la logique métier, la gestion des utilisateurs, les workflows de défis et l'intégration IA, tout en restant une unité déployable cohérente.",
        devops:
          "L'application a été containerisée pour garantir des environnements cohérents entre le développement et le déploiement, tout en simplifiant la gestion et la scalabilité.",
        highAvailability:
          "ByteBattle a été déployé avec une architecture cluster haute disponibilité conçue pour améliorer la disponibilité et éliminer la dépendance à une instance unique.",
        monitoring:
          "L'environnement de déploiement a été monitoré pour offrir une visibilité sur le comportement de l'application et de l'infrastructure et maintenir un fonctionnement fiable.",
        engineeringChallenges: [
          {
            title: "Scalabilité",
            description:
              "Concevoir une plateforme capable de supporter l'activité compétitive des utilisateurs.",
          },
          {
            title: "Disponibilité",
            description:
              "Concevoir l'architecture de déploiement autour de la haute disponibilité plutôt que de s'appuyer sur une instance unique.",
          },
          {
            title: "Containerisation",
            description:
              "Garantir des environnements applicatifs cohérents via un déploiement containerisé.",
          },
          {
            title: "Intégration Full-Stack",
            description:
              "Connecter le frontend React au backend NestJS en une plateforme cohérente.",
          },
          {
            title: "Gamification",
            description:
              "Concevoir les flux applicatifs autour des points, de la progression, des battles et des classements.",
          },
          {
            title: "Intégration IA",
            description:
              "Intégrer des capacités de recommandation intelligente et d'analyse de code dans le workflow des défis et l'expérience utilisateur.",
          },
        ],
        myContribution:
          "Contribution au développement de la plateforme full-stack, travaillant sur le frontend, le backend, l'intégration des fonctionnalités IA et l'architecture DevOps et de déploiement.",
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
        "Tableaux de bord interactifs pour analyser les performances des pilotes et des équipes. Technologies : Tableau, Python, SQL, Visualisation de données, Analyse de données",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Elfirma – Solution Web & Logicielle pour l'Agriculture",
      summary:
        "Elfirma est une plateforme numérique conçue pour moderniser le secteur agricole en connectant agriculteurs, experts et fournisseurs. Elle offre des solutions web et logicielles intégrées facilitant l'accès aux services agricoles, aux conseils d'experts et à une large gamme de produits.",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "MediConnect – Application Web pour Cabinets Médicaux",
      summary:
        "Application web conçue pour optimiser les opérations des cabinets médicaux en connectant médecins, spécialistes et fournisseurs. Elle fournit des solutions intégrées pour la gestion des rendez-vous, l'accès à l'expertise médicale et l'approvisionnement en produits et services de santé.",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    paragraphs: [
      "Je suis ingénieur logiciel basé en Tunisie, spécialisé dans la conception et le développement de solutions logicielles évolutives, maintenables et intelligentes.",
      "Mon travail couvre le développement web full-stack, l'ingénierie backend, l'architecture logicielle moderne et l'Intelligence Artificielle. J'aime transformer des exigences complexes en applications bien structurées, des interfaces utilisateur intuitives aux systèmes backend robustes et aux architectures distribuées.",
      "J'ai une expérience concrète dans la création d'applications web évolutives selon des patterns architecturaux modernes, notamment les microservices et les architectures événementielles, avec des technologies comme Spring Boot, React, NestJS et Apache Kafka. Je m'intéresse particulièrement à la conception de systèmes découplés, résilients et capables d'évoluer avec les exigences et la montée en charge.",
      "Au-delà du développement applicatif traditionnel, j'explore l'intégration de l'IA dans des produits logiciels concrets, en construisant des solutions où les modèles intelligents complètent une architecture applicative solide plutôt que d'exister de manière isolée.",
      "J'ai également de l'expérience en DevOps, conteneurisation, CI/CD, monitoring et environnements haute disponibilité, ce qui me donne une vision plus large du cycle de vie logiciel — de l'architecture et du développement au déploiement et à l'exploitation.",
      "Je développe continuellement mes compétences d'ingénierie à travers des projets exigeants, des environnements collaboratifs et des technologies qui me poussent à construire des logiciels fiables, évolutifs et impactants.",
    ],
    focusTitle: "Mes domaines de focus",
    focusAreas: [
      {
        title: "Systèmes évolutifs",
        description:
          "Conception d'applications modulaires et maintenables, capables d'évoluer avec la croissance des besoins métier et techniques.",
      },
      {
        title: "Architecture moderne",
        description:
          "Microservices, communication événementielle, API REST, découplage des services et principes d'architecture propre.",
      },
      {
        title: "Solutions propulsées par l'IA",
        description:
          "Intégration de l'Intelligence Artificielle dans des applications concrètes pour créer des expériences utilisateur intelligentes et des capacités métier data-driven.",
      },
      {
        title: "Ingénierie full-stack",
        description:
          "Construction d'applications web complètes couvrant frontend, backend, API, bases de données et intégration système.",
      },
      {
        title: "DevOps & fiabilité",
        description:
          "Conteneurisation, CI/CD, monitoring, automatisation du déploiement et architectures haute disponibilité.",
      },
    ],
    quote:
      "Je ne me contente pas de construire des applications — je me concentre sur la conception de l'architecture qui les sous-tend, la compréhension de la communication entre les composants, et la création de systèmes capables de scaler.",
    image: "/saladin.png",
  },
  resume: {
    file: "/cv/Saleh_Eddine_Khalfaoui_CV_ATS.pdf",
    title: "CV de Saleh Eddin",
    description:
      "Ingénieur logiciel spécialisé en développement full-stack, ingénierie backend et DevOps. Consultez ou téléchargez mon curriculum vitae ci-dessous.",
  },
  github: {
    username: "saladin-scs",
    profileUrl: "https://github.com/saladin-scs",
  },
};
