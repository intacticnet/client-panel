export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'Workplace & Team SaaS' | 'Fintech & Global Payments' | 'DevOps & FinOps Platform' | 'Cybersecurity & Compliance' | 'Business Finance & Analytics';
  version: string;
  status: 'Live SaaS Product' | 'Enterprise Active' | '4.9/5 Rated';
  activeUsers: string;
  heroImage: string;
  summary: string;
  overview: string;
  problemStatement: string;
  solutionOverview: string;
  targetAudience: {
    role: string;
    benefit: string;
    description: string;
  }[];
  metrics: {
    metric: string;
    label: string;
    description: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  architectureHighlights: string[];
  visionAndRoadmap: {
    vision: string;
    roadmapHighlights: string[];
  };
  techStack: string[];
  pricingModel: string;
  liveUrl: string;
  featured?: boolean;
}

export const productsData: Product[] = [
  {
    slug: 'pdfingpro',
    name: 'PdfingPro',
    tagline: '100% Privacy-First, Client-Side Free Online PDF & Document Suite',
    category: 'Workplace & Team SaaS',
    version: 'v2.4 Live',
    status: 'Live SaaS Product',
    activeUsers: '10,000+ Active Users',
    heroImage: 'https://res.cloudinary.com/db13xynvi/image/upload/w_800,c_limit,f_auto,q_auto/v1785469812/PDFING_cnvser.png',
    summary:
      'All-in-one browser-native PDF workbench that processes, merges, splits, compresses, and edits documents completely on the client side with zero server uploads.',
    overview:
      'PdfingPro was engineered to solve a fundamental security flaw in traditional online PDF converters: the mandatory upload of confidential files to remote third-party servers. Powered by modern WebAssembly and native client-side rendering engines, PdfingPro executes all document transformations locally on the user hardware. Whether handling legally privileged contracts, financial reports, or protected health data, not a single byte ever leaves the client machine.',
    problemStatement:
      'Organizations and individual professionals handle millions of sensitive documents daily—tax filings, NDA agreements, medical records, and proprietary code. Traditional SaaS PDF tools require uploading these confidential files to external cloud servers, exposing enterprises to data breaches, compliance violations (GDPR, HIPAA), and unvetted telemetry. Furthermore, cloud-based tools impose artificial file-size limits, slow upload queues, and subscription paywalls for basic operations.',
    solutionOverview:
      'PdfingPro eliminates the server dependency entirely. By compiling industry-standard PDF manipulation engines directly into WebAssembly (Wasm) and JavaScript, document rendering, OCR parsing, cryptographic watermarking, and page merging execute directly in the browser sandbox. Processing happens instantaneously at CPU memory speeds with zero network latency, infinite scalability, and total operational privacy.',
    targetAudience: [
      {
        role: 'Legal & Corporate Compliance',
        benefit: 'Zero-Knowledge Document Confidentiality',
        description:
          'Review, merge, and paginate privileged litigation documents and non-disclosure agreements with absolute certainty that client data never touches external storage.',
      },
      {
        role: 'Finance & Executive Leadership',
        benefit: 'Secure Internal Document Redaction',
        description:
          'Audit spreadsheets, encrypt quarterly financial statements, and protect proprietary investor decks without third-party exposure.',
      },
      {
        role: 'Healthcare & Clinical Teams',
        benefit: 'HIPAA & Data-Sovereignty Adherence',
        description:
          'Process patient records and lab reports locally on hospital workstations with strict compliance against cloud data leakage.',
      },
      {
        role: 'Developers & Academic Researchers',
        benefit: 'Zero-Latency Workflow & Free Tooling',
        description:
          'Combine research papers, split technical whitepapers by bookmarks, and compress heavy thesis drafts with instant local performance.',
      },
    ],
    metrics: [
      { metric: '100+', label: 'PDF Tools', description: 'Comprehensive client-side document processing capabilities.' },
      { metric: '0 Uploads', label: '100% Privacy', description: 'Zero files ever touch an external server or cloud storage.' },
      { metric: '10k+', label: 'Active Users', description: 'Students, professionals, and enterprise teams worldwide.' },
    ],
    keyFeatures: [
      {
        title: 'Client-Side WebAssembly Processing',
        description: 'Blazing-fast local document operations with zero file uploads and complete data privacy.',
      },
      {
        title: 'Complete Document Tool Suite',
        description: 'Merge, split by bookmarks, compress, convert, watermark, sign, and organize PDFs effortlessly.',
      },
      {
        title: 'Instant Browser Performance',
        description: 'No queuing, file size limits, or server downtime—executing at native hardware speed.',
      },
      {
        title: 'Enterprise Security & Zero Logging',
        description: 'Ideal for sensitive corporate contracts, legal paperwork, and confidential documents.',
      },
    ],
    architectureHighlights: [
      'Built with Next.js, React, TypeScript, Tailwind CSS, and WebAssembly PDF engines.',
      '100% in-browser processing via client-side PDF-lib and Canvas rendering with zero server telemetry.',
      'PWA support with offline caching for continuous workflow without active internet connectivity.',
    ],
    visionAndRoadmap: {
      vision:
        'To establish the global open standard for zero-trust, client-native document productivity—proving that high-performance software can respect complete user privacy without compromising speed, power, or accessibility.',
      roadmapHighlights: [
        'Native client-side WebAssembly OCR for 50+ languages with zero cloud inference calls.',
        'Local vector PDF form filler with cryptographic signature verification.',
        'Offline desktop PWA packaging for air-gapped secure enterprise environments.',
      ],
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WebAssembly', 'Docker'],
    pricingModel: '100% Free Forever & Client-Side',
    liveUrl: 'https://pdfing.pro.bd',
    featured: true,
  },
  {
    slug: 'ibyay',
    name: 'iByay',
    tagline: 'Seamlessly Track Revenue & Expenses Across Multiple Businesses & Investments',
    category: 'Business Finance & Analytics',
    version: 'v1.0 Live',
    status: 'Live SaaS Product',
    activeUsers: 'Enterprise Active',
    heroImage: 'https://res.cloudinary.com/ti1ep7pl/image/upload/w_800,c_limit,f_auto,q_auto/v1788142797/iByay.png',
    summary:
      'Multi-entity financial tracking platform that lets business owners manage revenue, expenses, and cash flow across multiple commercial properties, ventures, investments, and personal finances from a single unified dashboard.',
    overview:
      'iByay was built for entrepreneurs and investors who operate more than one business, hold commercial real estate, or manage diverse investment portfolios — and need a single source of truth for where their money is going. Instead of juggling spreadsheets across ten different ventures, iByay provides a centralized, role-based financial command center where every entity — from a rental property to a retail operation to a personal expense account — lives under one roof with real-time dashboards, trend analytics, and drill-down transaction history.',
    problemStatement:
      'Business owners managing multiple ventures — commercial properties, side businesses, investments, and personal finances — are forced to rely on disconnected spreadsheets, separate bank apps, or generic accounting tools designed for single-entity use. This fragmentation leads to inaccurate cash-flow visibility, delayed decision-making, missed tax deductions, and no unified view of net worth across all holdings. Existing solutions either lack multi-entity support or are enterprise ERP systems with prohibitive cost and complexity.',
    solutionOverview:
      'iByay introduces a multi-entity financial model where each business, property, or investment is tracked as an independent entity within a single secure workspace. Revenue and expenses are logged per entity with categorized tagging, enabling real-time cross-entity comparison, consolidated P&L reporting, and cash-flow forecasting. The platform features biometric-secured mobile access, offline-capable PWA architecture, and multi-user role management — making it ideal for business families, property management teams, and investment groups.',
    targetAudience: [
      {
        role: 'Multi-Venture Entrepreneurs',
        benefit: 'Unified Cross-Business Financial Visibility',
        description:
          'Monitor revenue and expenses across all businesses in one place — no more switching between apps, spreadsheets, or bank portals.',
      },
      {
        role: 'Commercial Property Owners',
        benefit: 'Per-Property Income & Expense Tracking',
        description:
          'Track rental income, maintenance costs, mortgage payments, and net yield for each property individually while viewing the consolidated portfolio.',
      },
      {
        role: 'Investors & Fund Managers',
        benefit: 'Portfolio-Wide Performance Analytics',
        description:
          'Visualize returns, capital allocation, and expense ratios across diverse investments — equities, fixed deposits, real estate, and private ventures.',
      },
      {
        role: 'Small Business Families & Teams',
        benefit: 'Role-Based Collaborative Finance',
        description:
          'Share financial dashboards with partners, accountants, or family members using granular role-based access with biometric authentication.',
      },
    ],
    metrics: [
      { metric: 'Multi-Entity', label: 'Architecture', description: 'Track unlimited businesses, properties, and investments under a single workspace.' },
      { metric: 'Real-Time', label: 'Dashboards', description: 'Live financial dashboards with trend charts, breakdowns, and cash-flow analytics.' },
      { metric: 'Biometric', label: 'Security', description: 'Face ID, Touch ID, and PIN-based mobile authentication with role-based access control.' },
    ],
    keyFeatures: [
      {
        title: 'Multi-Entity Financial Workspace',
        description: 'Create and manage unlimited business entities, properties, and investment accounts from a single unified dashboard.',
      },
      {
        title: 'Revenue & Expense Categorization',
        description: 'Tag every transaction by category, entity, and type — with smart filtering, search, and drill-down analytics.',
      },
      {
        title: 'Visual Analytics & Trend Charts',
        description: 'Interactive charts for income vs. expense trends, category breakdowns, and period-over-period comparisons.',
      },
      {
        title: 'Mobile-First with Biometric Security',
        description: 'PWA with offline support, Face ID / Touch ID authentication, and an iOS-native lock screen experience.',
      },
    ],
    architectureHighlights: [
      'Progressive Web App (PWA) with offline data caching and background sync for uninterrupted field use.',
      'Biometric authentication layer with Face ID, Touch ID, PIN, and password — modeled after iOS security UX.',
      'Role-based multi-user access with granular permissions for partners, accountants, and team members.',
    ],
    visionAndRoadmap: {
      vision:
        'To become the default financial OS for multi-venture entrepreneurs — where every business, property, and investment is visible, measurable, and manageable from one intelligent dashboard.',
      roadmapHighlights: [
        'Automated bank statement import and AI-powered transaction categorization.',
        'Tax-ready P&L and balance sheet generation per entity and consolidated.',
        'Multi-currency support and cross-border investment tracking.',
      ],
    },
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'PWA', 'IndexedDB'],
    pricingModel: 'SaaS — Subscription Tiers',
    liveUrl: 'https://ibyay.intactic.net',
  },
];
