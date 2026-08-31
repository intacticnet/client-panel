export interface IndustryData {
  slug: string;
  name: string;
  shortTitle: string;
  category: 'finance-commerce' | 'healthcare-enterprise' | 'operations-gov' | 'media-tech';
  tagline: string;
  heroDescription: string;
  cardDescription?: string;
  iconName: string;
  motionType:
    | 'fintech-ledger'
    | 'edtech-nodes'
    | 'ecommerce-checkout'
    | 'health-ecg'
    | 'logistics-radar'
    | 'manufacturing-gears'
    | 'media-equalizer'
    | 'govtech-shield'
    | 'travel-flight'
    | 'legaltech-seal'
    | 'saas-cluster'
    | 'startup-trajectory'
    | 'proptech-blueprint';
  accentColor: string;
  badge: string;
  highlights: string[];
  coreSolutions: {
    title: string;
    description: string;
  }[];
  regulatoryCompliance: string[];
  techStack: string[];
  featuredMetric: {
    value: string;
    label: string;
  };
}

export const industriesData: IndustryData[] = [
  {
slug: 'ecommerce-retail',
    name: 'E-Commerce & Omnichannel Retail',
    shortTitle: 'E-Commerce',
    category: 'finance-commerce',
    tagline: 'Sub-50ms Headless Storefronts, Automated Inventory Sync & High-Conversion Checkout',
    heroDescription:
      'We architect modular headless commerce backbones, automated global inventory pipelines, and sub-50ms storefronts engineered to withstand massive flash-sale traffic spikes without downtime or cart abandonment.',
    cardDescription:
      'We build ultra-fast headless online stores, automated inventory sync, and instant high-conversion checkout backbones.',
    iconName: 'shopping-bag',
    motionType: 'ecommerce-checkout',
    accentColor: '#0284C7', // Electric Cobalt
    badge: 'Sub-50ms TTFB',
    highlights: [
      'Headless composable storefronts boosting mobile conversions by up to 185%.',
      'Zero-downtime flash sale engine handling 85,000+ concurrent shoppers.',
      'Real-time omnichannel inventory reconciliation across warehouses and POS.',
    ],
    coreSolutions: [
      {
        title: 'Headless Micro-Frontend Storefronts',
        description: 'Ultra-fast Next.js edge storefronts with instant predictive prefetching and sub-second page loads.',
      },
      {
        title: 'Omnichannel Inventory Mesh',
        description: 'Sub-second inventory synchronization connecting Shopify, ERP, physical POS, and 3PL warehouses.',
      },
      {
        title: 'AI Personalization & Search',
        description: 'Neural search and vector-based recommendation carousels that lift average order value (AOV).',
      },
      {
        title: 'One-Click Global Checkout',
        description: 'Optimized conversion checkout flows with localized payment methods, tax engines, and fraud filtering.',
      },
    ],
    regulatoryCompliance: ['PCI-DSS Validated', 'SOC-2 Type II', 'GDPR & ePrivacy', 'ADA / WCAG 2.1'],
    techStack: ['Next.js 15', 'Tailwind CSS', 'GraphQL', 'Stripe', 'Redis', 'PostgreSQL', 'Vercel Edge'],
    featuredMetric: { value: '+185%', label: 'Mobile Conversion Lift' },
  },
  {
slug: 'healthcare-pharma',
    name: 'Healthcare & Pharmaceuticals',
    shortTitle: 'Healthcare',
    category: 'healthcare-enterprise',
    tagline: 'HIPAA-Compliant Telehealth, Clinical AI Scribes & Laboratory Telemetry',
    heroDescription:
      'We design airtight digital health architectures, FHIR-compliant EHR synchronization pipelines, and AI clinical diagnostic tools that reduce physician administrative burnout and safeguard sensitive patient medical records.',
    cardDescription:
      'We design airtight HIPAA-compliant telehealth architectures, FHIR medical data pipelines, and AI clinical diagnostic tools.',
    iconName: 'heart-pulse',
    motionType: 'health-ecg',
    accentColor: '#059669', // Vital Emerald Green
    badge: 'HIPAA & HITECH',
    highlights: [
      'Encrypted WebRTC consultations serving 3.1M+ active patients reliably.',
      'AI voice clinical documentation reducing charting time from 22 to 7 minutes.',
      'Bi-directional HL7 / FHIR data exchange with legacy hospital EHR platforms.',
    ],
    coreSolutions: [
      {
        title: 'Telemedicine & Remote Care Relays',
        description: 'Military-grade encrypted video streams optimized for low-bandwidth rural connections.',
      },
      {
        title: 'Clinical AI Documentation',
        description: 'Ambient voice scribes that generate structured SOAP notes directly into electronic health records.',
      },
      {
        title: 'FHIR / HL7 Interoperability Gateway',
        description: 'Standardized medical data pipelines connecting Epic, Cerner, labs, and third-party diagnostic devices.',
      },
      {
        title: 'Pharmaceutical Supply Tracking',
        description: 'Serialized batch tracking, cold-chain temperature telemetry, and FDA DSCSA compliance ledgers.',
      },
    ],
    regulatoryCompliance: ['HIPAA / HITECH', 'FDA 21 CFR Part 11', 'ISO 13485', 'GDPR Health Data', 'SOC-2 Type II'],
    techStack: ['TypeScript', 'Go', 'WebRTC', 'PostgreSQL', 'Docker', 'GCP Healthcare API', 'Python'],
    featuredMetric: { value: '99.98%', label: 'Clinical Call Reliability' },
  },
  {
slug: 'software-ites',
    name: 'Software, ITES & Enterprise SaaS',
    shortTitle: 'Software / ITES',
    category: 'media-tech',
    tagline: 'Cloud-Native SaaS Microservices, Multi-Tenant Architecture & DevOps Automation',
    heroDescription:
      'We help enterprise technology organizations and ITES leaders refactor monolithic legacy codebases, automate CI/CD release pipelines, and build multi-tenant B2B software with extreme scalability and zero downtime.',
    cardDescription:
      'We architect scalable multi-tenant SaaS platforms, cloud-native microservices, and automated enterprise CI/CD release pipelines.',
    iconName: 'cpu',
    motionType: 'saas-cluster',
    accentColor: '#3B82F6', // Bright Cobalt Blue
    badge: 'Cloud Native',
    highlights: [
      'Monolith-to-microservices modernization with zero customer interruption.',
      'Multi-tenant database sharding with strict tenant isolation and SOC-2 controls.',
      'Automated GitOps pipelines slashing deployment cycle time by 75%.',
    ],
    coreSolutions: [
      {
        title: 'Multi-Tenant B2B SaaS Architecture',
        description: 'Secure tenant isolation, role-based access, automated provisioning, and metered subscription billing.',
      },
      {
        title: 'Cloud Migration & Kubernetes Modernization',
        description: 'Architecting resilient AWS/GCP/Azure clusters with automated autoscaling and disaster recovery.',
      },
      {
        title: 'Enterprise API & Integration Mesh',
        description: 'High-throughput REST and GraphQL APIs connecting Salesforce, SAP, Oracle, and proprietary ERPs.',
      },
      {
        title: 'Continuous FinOps & Cost Right-Sizing',
        description: 'Automated spot instance management and resource limit tuning to cut infrastructure bills by 35%+.',
      },
    ],
    regulatoryCompliance: ['SOC-2 Type II', 'ISO 27001', 'Cloud Security Alliance (CSA)', 'GDPR / CCPA'],
    techStack: ['Next.js', 'Node.js', 'Go', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'AWS'],
    featuredMetric: { value: '99.999%', label: 'Target System Uptime' },
  },
  {
slug: 'edtech-digital-learning',
    name: 'EdTech & Digital Learning',
    shortTitle: 'EdTech',
    category: 'media-tech',
    tagline: 'Interactive Virtual Classrooms, Collaborative Canvases & Adaptive AI Tutoring',
    heroDescription:
      'We build low-latency interactive learning ecosystems, enterprise multi-tenant LMS platforms, and neural tutoring systems that deliver seamless multimedia education to millions of concurrent students worldwide.',
    cardDescription:
      'We build low-latency virtual classrooms, enterprise multi-tenant LMS platforms, and adaptive neural AI tutoring systems.',
    iconName: 'graduation-cap',
    motionType: 'edtech-nodes',
    accentColor: '#0284C7', // Electric Sky
    badge: 'Sub-50ms Latency',
    highlights: [
      'Real-time collaborative whiteboard canvas for 50,000+ concurrent users.',
      'Adaptive AI recommendation engines personalizing learning curves.',
      'Cross-platform mobile and offline sync for remote student access.',
    ],
    coreSolutions: [
      {
        title: 'Live Video & Virtual Classrooms',
        description: 'Adaptive WebRTC media relays with automated live transcription and breakout room management.',
      },
      {
        title: 'Multi-Tenant Enterprise LMS',
        description: 'Scalable course authoring, automated grading, assessment engines, and proctoring suites.',
      },
      {
        title: 'Neural AI Learning Assistants',
        description: 'Context-aware LLM tutors that answer student inquiries and generate targeted practice exams.',
      },
      {
        title: 'Gamification & Mastery Tracking',
        description: 'Real-time skill trees, verifiable credential issuance, and parent/teacher analytics dashboards.',
      },
    ],
    regulatoryCompliance: ['FERPA Compliant', 'COPPA Certified', 'GDPR-K', 'SCORM / LTI 1.3', 'WCAG 2.1 AA'],
    techStack: ['Next.js', 'React', 'WebRTC', 'Node.js', 'Redis', 'Python', 'Docker'],
    featuredMetric: { value: '3.5M+', label: 'Active Students Supported' },
  },
  {
slug: 'startups-scaleups',
    name: 'Startups & High-Growth Scaleups',
    shortTitle: 'Startups',
    category: 'media-tech',
    tagline: 'Venture-Grade MVP Engineering & Rapid Series-A Architecture Readiness',
    heroDescription:
      'We partner with ambitious founders and VC-backed scaleups to transform bold product visions into production-ready software in weeks — built with clean architecture that scales effortlessly as user adoption explodes.',
    cardDescription:
      'We partner with ambitious founders to engineer venture-grade MVPs, resilient cloud architectures, and production-ready software in weeks.',
    iconName: 'rocket',
    motionType: 'startup-trajectory',
    accentColor: '#E11D48', // Venture Crimson
    badge: 'High Velocity',
    highlights: [
      'Full-stack venture MVP delivered from whiteboard to production in 6–8 weeks.',
      'Scalable foundations that pass rigorous investor technical due diligence.',
      'Dedicated engineering squads that adapt quickly to evolving product-market fit.',
    ],
    coreSolutions: [
      {
        title: 'Rapid MVP Architecture & Launch',
        description: 'Zero-technical-debt MVPs designed for rapid iteration, user analytics, and high conversion.',
      },
      {
        title: 'Fractional CTO & Architecture Guidance',
        description: 'Strategic technical leadership guiding technology stack selection, security, and hiring roadmaps.',
      },
      {
        title: 'AI Product Prototyping & Agents',
        description: 'Custom fine-tuned LLM workflows and autonomous agents integrated directly into your core user experience.',
      },
      {
        title: 'Series-A Scale & Security Hardening',
        description: 'Performance optimization, penetration testing, and compliance readiness for venture capital milestones.',
      },
    ],
    regulatoryCompliance: ['SOC-2 Ready', 'ISO-27001 Foundation', 'OWASP Top 10 Hardened', 'GDPR Ready'],
    techStack: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    featuredMetric: { value: '6-8 Wks', label: 'Whiteboard-to-Launch MVP' },
  },
  {
slug: 'fintech-banking',
    name: 'Fintech & Digital Banking',
    shortTitle: 'Fintech',
    category: 'finance-commerce',
    tagline: 'High-Throughput Financial Ledgers & Sub-Second Settlement Infrastructure',
    heroDescription:
      'We engineer active-active core banking topologies, multi-currency payment gateways, and real-time AI anti-fraud engines built to process billions in daily transactional volume with 99.999% production availability.',
    cardDescription:
      'We engineer active-active core banking topologies, multi-currency payment gateways, and real-time AI anti-fraud settlement infrastructure.',
    iconName: 'landmark',
    motionType: 'fintech-ledger',
    accentColor: '#115FC9', // Royal Blue
    badge: 'PCI-DSS Level 1',
    highlights: [
      'Active-active event-sourcing ledgers handling 120,000+ peak TPS.',
      'AI fraud anomaly detection blocking chargebacks in sub-100ms.',
      'Automated ISO-20022 and Open Banking API integrations.',
    ],
    coreSolutions: [
      {
        title: 'Core Ledger & Settlement Engines',
        description: 'Multi-region distributed database topologies with zero transactional loss and microsecond reconciliation.',
      },
      {
        title: 'Multi-Currency Payment Gateways',
        description: 'Dynamic smart payment routing across 135+ global currencies with automated FX conversion.',
      },
      {
        title: 'Algorithmic Risk & Fraud Shield',
        description: 'Neural pattern recognition detecting synthetic identity fraud and unauthorized account takeover attempts.',
      },
      {
        title: 'Compliant Open Banking APIs',
        description: 'OAuth2/mTLS protected financial gateways meeting strict PSD2, PCI-DSS, and central bank guidelines.',
      },
    ],
    regulatoryCompliance: ['PCI-DSS Level 1', 'SOC-2 Type II', 'ISO 27001', 'PSD2 / Open Banking', 'GDPR / CCPA'],
    techStack: ['Go', 'Kubernetes', 'Apache Kafka', 'CockroachDB', 'gRPC', 'PostgreSQL', 'AWS Graviton'],
    featuredMetric: { value: '120k TPS', label: 'Peak Transaction Throughput' },
  },
  {
slug: 'media-entertainment',
    name: 'Media, Entertainment & OTT Streaming',
    shortTitle: 'Media & OTT',
    category: 'media-tech',
    tagline: 'High-Concurrency Video Streaming, Digital Rights & Creator Platforms',
    heroDescription:
      'We build low-latency video-on-demand (VOD) and live broadcast architectures, modern digital news portals, and subscription streaming applications capable of broadcasting to millions of simultaneous viewers.',
    cardDescription:
      'We deliver low-latency video streaming backbones, high-traffic digital publishing portals, and creator monetization platforms.',
    iconName: 'tv',
    motionType: 'media-equalizer',
    accentColor: '#7C3AED', // Electric Violet
    badge: 'Ultra Low Latency',
    highlights: [
      'Sub-second live streaming latency using CMAF and adaptive HLS encoding.',
      'High-traffic digital publishing CMS delivering instant AMP/PWA speeds.',
      'Multi-tier creator monetization with integrated subscription micro-billing.',
    ],
    coreSolutions: [
      {
        title: 'OTT Video Streaming Platforms',
        description: 'End-to-end video transcoding pipelines, multi-DRM encryption, and cross-platform Smart TV/Mobile apps.',
      },
      {
        title: 'High-Traffic News & Media Portals',
        description: 'Headless publishing CMS with instant edge caching, real-time live blog updates, and ad-tech integration.',
      },
      {
        title: 'Creator & Royalty Accounting Hubs',
        description: 'Automated subscriber attribution, video view analytics, and creator payout ledgers.',
      },
      {
        title: 'Dynamic Content Delivery & CDN Mesh',
        description: 'Edge video caching and multi-CDN failover maintaining zero buffering during live national sporting events.',
      },
    ],
    regulatoryCompliance: ['DMCA Compliant', 'Widevine / FairPlay DRM', 'GDPR', 'COPPA'],
    techStack: ['Next.js', 'Go', 'FFmpeg', 'HLS / WebRTC', 'AWS CloudFront', 'Redis', 'PostgreSQL'],
    featuredMetric: { value: '1.8M+', label: 'Concurrent Live Streamers' },
  },
  {
slug: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial ERP',
    shortTitle: 'Manufacturing',
    category: 'operations-gov',
    tagline: 'Industry 4.0 Plant Automation, Factory ERP & Predictive Maintenance',
    heroDescription:
      'We develop specialized manufacturing execution systems (MES), factory floor telemetry dashboards, and custom ERP suites that synchronize procurement, shop-floor production lines, and warehouse fulfillment.',
    cardDescription:
      'We build specialized factory execution systems (MES), industrial IoT sensor hubs, and end-to-end plant ERP suites.',
    iconName: 'factory',
    motionType: 'manufacturing-gears',
    accentColor: '#2563EB', // Deep Sapphire Blue
    badge: 'Industry 4.0',
    highlights: [
      'Real-time shop floor OEE (Overall Equipment Effectiveness) monitoring.',
      'Predictive machine downtime alerts reducing factory outages by 44%.',
      'Automated raw material BOM (Bill of Materials) and inventory sync.',
    ],
    coreSolutions: [
      {
        title: 'Factory ERP & Plant Floor Execution',
        description: 'End-to-end work order scheduling, scrap tracking, operator KPIs, and automated inventory depletion.',
      },
      {
        title: 'SCADA & Industrial IoT Ingestion',
        description: 'Connecting PLC sensors, CNC machinery, and temperature meters to cloud analytics dashboards.',
      },
      {
        title: 'Predictive Equipment Health AI',
        description: 'Vibration and thermal anomaly detection predicting motor failures before catastrophic line stops.',
      },
      {
        title: 'Quality Assurance & Batch Traceability',
        description: 'Digital QA checklists with automated defect logging, barcode batch scans, and ISO-9001 audit trails.',
      },
    ],
    regulatoryCompliance: ['ISO 9001', 'ISO 14001', 'OSHA Compliance', 'SOC-2 Type II'],
    techStack: ['Node.js', 'Go', 'TimescaleDB', 'MQTT', 'React', 'PostgreSQL', 'Docker'],
    featuredMetric: { value: '44%', label: 'Factory Downtime Reduction' },
  },
  {
slug: 'logistics-supply-chain',
    name: 'Logistics & Autonomous Supply Chain',
    shortTitle: 'Logistics',
    category: 'operations-gov',
    tagline: 'Edge IoT Fleet Telemetry, Constraint Routing & Warehouse Automation',
    heroDescription:
      'We engineer real-time predictive dispatch systems, geospatial tracking meshes, and automated warehouse routing engines that eliminate freight delays, lower fuel burn, and automate overland supply logistics.',
    cardDescription:
      'We engineer predictive dispatch engines, real-time IoT fleet telemetry meshes, and automated warehouse routing systems.',
    iconName: 'truck',
    motionType: 'logistics-radar',
    accentColor: '#6366F1', // Indigo Precision
    badge: 'Autonomous AI',
    highlights: [
      '82% manual dispatch triage reduction across 14,000 active transport vehicles.',
      'Sub-400ms dynamic rerouting around weather, customs, and road anomalies.',
      'Offline-first driver mobile apps with zero data loss in remote freight yards.',
    ],
    coreSolutions: [
      {
        title: 'Agentic Multi-Vehicle Dispatch',
        description: 'Neural constraint solvers optimizing route efficiency, driver hours, and container turnover in real-time.',
      },
      {
        title: 'IoT Telemetry Ingestion Hub',
        description: 'High-throughput stream processing analyzing GPS, OBD-II engine sensors, and cold-chain temperature pings.',
      },
      {
        title: 'Warehouse Robotics & WMS Integration',
        description: 'Automated bin allocation, picking optimization algorithms, and real-time inventory visibility.',
      },
      {
        title: 'Customs & Port Telemetry Portal',
        description: 'Automated bill-of-lading processing, cross-border compliance documentation, and demurrage alerts.',
      },
    ],
    regulatoryCompliance: ['ISO 28000', 'C-TPAT Security', 'DOT / ELD Compliant', 'SOC-2 Type II'],
    techStack: ['Python', 'Rust', 'TimescaleDB', 'Redis Cluster', 'Mapbox GL', 'React', 'FastAPI'],
    featuredMetric: { value: '$18.4M', label: 'Fuel & Ops Costs Saved' },
  },
  {
slug: 'legaltech-professional',
    name: 'LegalTech & Professional Services',
    shortTitle: 'LegalTech',
    category: 'healthcare-enterprise',
    tagline: 'Automated Contract Lifecycles, Confidential Vaulting & AI Legal Discovery',
    heroDescription:
      'We design encrypted client portals, automated contract lifecycle management (CLM) platforms, and AI document discovery suites tailored for law firms, accounting practices, and corporate compliance departments.',
    cardDescription:
      'We design encrypted client vaults, automated contract lifecycle management (CLM), and AI regulatory discovery suites.',
    iconName: 'scale',
    motionType: 'legaltech-seal',
    accentColor: '#4F46E5', // Slate Indigo
    badge: 'Encrypted Vault',
    highlights: [
      'Automated contract generation and multi-party cryptographic e-signatures.',
      'AI document discovery searching 100,000+ litigation pages in seconds.',
      'Zero-knowledge client portals for confidential document exchange.',
    ],
    coreSolutions: [
      {
        title: 'Contract Lifecycle Management (CLM)',
        description: 'Template clause authoring, automated version diffing, approval workflows, and renewal alerts.',
      },
      {
        title: 'Encrypted Client Collaboration Vault',
        description: 'End-to-end AES-256 encrypted file sharing with granular access revocation and time-limited links.',
      },
      {
        title: 'AI Regulatory Compliance & Discovery',
        description: 'Vector-search engines flagging contractual risks, regulatory non-compliance, and liability clauses.',
      },
      {
        title: 'Legal Billing & Matter Management',
        description: 'Automated lawyer time-tracking, LEDES invoicing, retainer accounting, and court calendar sync.',
      },
    ],
    regulatoryCompliance: ['SOC-2 Type II', 'ISO 27001', 'Attorney-Client Privilege Data Protocols', 'GDPR'],
    techStack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'AWS'],
    featuredMetric: { value: '80%', label: 'Contract Scoping Time Saved' },
  },
  {
slug: 'govtech-public-sector',
    name: 'GovTech & Public Sector Systems',
    shortTitle: 'GovTech',
    category: 'operations-gov',
    tagline: 'Sovereign Citizen Service Portals, Secure Digital Identity & E-Governance',
    heroDescription:
      'We architect sovereign, highly secure civic infrastructure, municipal service portals, and automated government workflow systems designed for maximum accessibility, auditability, and national cybersecurity compliance.',
    cardDescription:
      'We architect sovereign citizen service portals, secure biometric identity vaults, and compliant digital governance workflows.',
    iconName: 'shield',
    motionType: 'govtech-shield',
    accentColor: '#0F766E', // Deep Sovereign Teal
    badge: 'Sovereign Security',
    highlights: [
      'Citizen digital service portals serving 10M+ registered residents.',
      'Biometric KYC integration and national digital identity authentication.',
      'Zero-trust cryptographic audit logs for government procurement transparency.',
    ],
    coreSolutions: [
      {
        title: 'Citizen Self-Service Portals',
        description: 'Unified digital front-doors for municipal licensing, utility billing, tax filings, and birth registration.',
      },
      {
        title: 'E-Governance & Departmental Workflow',
        description: 'Paperless file routing, hierarchical digital approvals, and inter-agency document verification.',
      },
      {
        title: 'Digital Identity & Biometric KYC',
        description: 'Hardware-security-module (HSM) backed identity verification and role-based civic access controls.',
      },
      {
        title: 'Sovereign Cloud & Disaster Recovery',
        description: 'Air-gapped on-premise and sovereign cloud database topologies with immutable ledger backups.',
      },
    ],
    regulatoryCompliance: ['ISO 27001', 'NIST SP 800-53', 'Gov Cloud Standard', 'GDPR / National Data Acts'],
    techStack: ['TypeScript', 'Go', 'PostgreSQL', 'Docker', 'OpenID Connect', 'Keycloak', 'Linux'],
    featuredMetric: { value: '10M+', label: 'Citizens Served' },
  },
  {
slug: 'travel-hospitality',
    name: 'Travel, Hospitality & Tourism',
    shortTitle: 'Hospitality',
    category: 'finance-commerce',
    tagline: 'Real-Time GDS Booking Engines, Dynamic Pricing & Hotel Property Management',
    heroDescription:
      'We engineer high-speed flight and hotel booking engines, multi-property hotel PMS architectures, and custom tour operator platforms with real-time inventory synchronization across global distribution systems.',
    cardDescription:
      'We develop high-speed GDS booking engines, multi-property hotel PMS architectures, and dynamic yield pricing algorithms.',
    iconName: 'plane',
    motionType: 'travel-flight',
    accentColor: '#0EA5E9', // Ocean Cyan
    badge: 'Global GDS Sync',
    highlights: [
      'Sub-500ms multi-carrier flight search aggregation connecting Amadeus & Sabre.',
      'Dynamic yield management boosting hotel room occupancy by 32%.',
      'Contactless guest check-in mobile web app with automated digital key access.',
    ],
    coreSolutions: [
      {
        title: 'Global Travel Booking Engines',
        description: 'Direct API integrations with global airline GDS, hotel bed banks, and localized travel payment gateways.',
      },
      {
        title: 'Multi-Property PMS & Channel Manager',
        description: 'Real-time room availability sync across Booking.com, Airbnb, Expedia, and direct brand websites.',
      },
      {
        title: 'Dynamic Revenue Optimization AI',
        description: 'Algorithmic room pricing based on seasonal demand, local events, and competitor rate telemetry.',
      },
      {
        title: 'Guest Experience & Loyalty Portals',
        description: 'Personalized itinerary builders, automated WhatsApp notifications, and multi-tier loyalty points engines.',
      },
    ],
    regulatoryCompliance: ['PCI-DSS Level 1', 'IATA Compliant', 'GDPR', 'SOC-2 Type II'],
    techStack: ['Next.js', 'Node.js', 'Redis', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'AWS'],
    featuredMetric: { value: '32%', label: 'RevPAR Occupancy Lift' },
  },
  {
slug: 'real-estate-proptech',
    name: 'Real Estate & PropTech',
    shortTitle: 'PropTech',
    category: 'finance-commerce',
    tagline: 'Interactive 3D Virtual Experiences, Automated Leasing & Smart Facility IoT',
    heroDescription:
      'We engineer digital property management ecosystems, automated tenant onboarding pipelines, and interactive 3D spatial visualization tools that accelerate commercial leasing and modernize residential asset management.',
    cardDescription:
      'We build high-performance property portals, interactive 3D spatial visualization tools, and automated leasing ecosystems.',
    iconName: 'building-2',
    motionType: 'proptech-blueprint',
    accentColor: '#0D9488', // Spatial Teal
    badge: 'Spatial & IoT',
    highlights: [
      'Interactive 3D building exploration with sub-second spatial WebGL rendering.',
      'Automated tenant screening and digital lease execution pipelines.',
      'Smart facility IoT sensor dashboards optimizing HVAC and building utility spend.',
    ],
    coreSolutions: [
      {
        title: '3D Spatial Property Visualizer',
        description: 'Web-based interactive architectural floor plans and photorealistic virtual walkthroughs.',
      },
      {
        title: 'Automated Leasing & Tenant Portal',
        description: 'Frictionless tenant KYC, automated background checks, e-signatures, and rent collection billing.',
      },
      {
        title: 'Smart Building IoT & Telemetry',
        description: 'Real-time telemetry monitoring power, occupancy density, air quality, and access control hardware.',
      },
      {
        title: 'Asset Valuation & Portfolio Analytics',
        description: 'Predictive machine learning models forecasting rental yields, cap rates, and maintenance requirements.',
      },
    ],
    regulatoryCompliance: ['SOC-2 Type II', 'Fair Housing Act Data Safeguards', 'ISO 27001', 'GDPR'],
    techStack: ['Three.js', 'React', 'WebGL', 'Node.js', 'PostgreSQL', 'TimescaleDB', 'AWS IoT'],
    featuredMetric: { value: '4.2x', label: 'Lease Closing Velocity' },
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((ind) => ind.slug === slug);
}
