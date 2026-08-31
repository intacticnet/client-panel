/**
 * Content Dictionary for Intactic
 * 
 * Isolated copy structure ready for future i18n (English / Bengali).
 * Avoid hardcoding copy strings directly inside JSX components.
 */

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    title: string;
    description: string;
    href: string;
    tag?: string;
  }[];
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    contactEmail: string;
  };
  navigation: {
    links: NavItem[];
    cta: string;
    langEn: string;
    langBn: string;
    mobileMenuOpen: string;
    mobileMenuClose: string;
  };
  hero: {
    eyebrowBadge: {
      statusText: string;
      label: string;
    };
    headline: {
      line1: string;
      line2Prefix: string;
      highlightedPhrase: string;
      line2Suffix: string;
    };
    subheadline: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    qualitativeCredibility: {
      eyebrow: string;
      statement: string;
      capabilities: string[];
    };
    visualCards: {
      leadTitle: string;
      leadRole: string;
      collabTitle: string;
      collabRole: string;
      stat1: {
        value: string;
        label: string;
      };
      stat2: {
        value: string;
        label: string;
      };
    };
  };
}

export const enContent: SiteContent = {
  brand: {
    name: "Intactic",
    tagline: "Technology partner for ambitious businesses, backed by AI integration & a global standard of engineering.",
    contactEmail: "hello@intactic.tech",
  },
  navigation: {
    links: [
      {
        label: "Services",
        href: "#services",
        hasDropdown: true,
        dropdownItems: [
          {
            title: "AI & Intelligent Systems",
            description: "Autonomous agentic pipelines, custom LLMs, and high-throughput inference engines.",
            href: "#services-ai",
            tag: "Flagship",
          },
          {
            title: "Enterprise Software Engineering",
            description: "Scalable distributed backends, microservices, and modern web & mobile architectures.",
            href: "#services-engineering",
          },
          {
            title: "Cloud & Platform Modernization",
            description: "Resilient cloud infrastructure, zero-downtime migrations, and DevOps automation.",
            href: "#services-cloud",
          },
          {
            title: "Data Engineering & Analytics",
            description: "Real-time streaming pipelines, high-speed data ingestion, and warehouse solutions.",
            href: "#services-data",
          },
        ],
      },
      { label: "Industries", href: "#industries" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Schedule a Call",
    langEn: "EN",
    langBn: "BN",
    mobileMenuOpen: "Open main navigation menu",
    mobileMenuClose: "Close navigation menu",
  },
  hero: {
    eyebrowBadge: {
      statusText: "GLOBAL ENGINEERING PARTNER",
      label: "Global Standard & AI Integration",
    },
    headline: {
      line1: "Scale Your Enterprise With",
      line2Prefix: "Global Standard ",
      highlightedPhrase: "Software & AI Engineering",
      line2Suffix: "",
    },
    subheadline:
      "From high-growth ventures to established enterprises—build scalable, secure, and mission-critical software backed by deep AI integration and a proven global engineering standard.",
    primaryCta: {
      label: "Schedule a Call",
      href: "mailto:hello@intactic.tech?subject=Engineering%20Partnership%20Inquiry",
    },
    secondaryCta: {
      label: "Explore Services",
      href: "#services",
    },
    qualitativeCredibility: {
      eyebrow: "CORE CAPABILITIES",
      statement: "Full-lifecycle technical execution from architectural blueprints to production AI deployments.",
      capabilities: [
        "Distributed Systems",
        "Generative & Agentic AI",
        "Deterministic Reliability",
        "Enterprise Architecture",
      ],
    },
    visualCards: {
      leadTitle: "Technical Leadership",
      leadRole: "Elite Engineering Architects",
      collabTitle: "Collaborative Sprints",
      collabRole: "Cross-Functional Agile Delivery",
      stat1: {
        value: "AI-First",
        label: "Architecture & Integration",
      },
      stat2: {
        value: "Global Standard",
        label: "Engineering Excellence",
      },
    },
  },
};

export const content = enContent;
