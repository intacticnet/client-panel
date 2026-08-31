import {
  Code2, Palette, TrendingUp, Settings, ShieldCheck,
  Smartphone, Globe, MonitorSmartphone, Layout, ShoppingCart,
  FileText, CreditCard, Plug, Rocket, Bot,
  TestTube, Database, Wrench, Cloud, Server,
  GraduationCap, PenTool, Layers, Film, Package,
  Printer, BookOpen, Camera, Megaphone, Search,
  BarChart3, Mail, MessageSquare, Users, Store,
  Target, Eye, Briefcase, LineChart, Box,
  DollarSign, PieChart, PanelTop, ArrowRightLeft,
  Lock, Languages, FileCheck, Star, MapPin, Calendar,
} from 'lucide-react';
import { type ReactNode } from 'react';

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  categoryId: string;
  categoryTitle: string;
  icon: ReactNode;
  tagline: string;
  description: string;
  heroDescription: string;
  features: { title: string; description: string; icon: ReactNode }[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
  technologies: string[];
}

export interface CategoryData {
  id: string;
  icon: ReactNode;
  title: string;
  shortTitle: string;
  tagline: string;
  color: string;
  services: ServiceData[];
}

// Helper to create icon JSX
const ic = (name: string, size = 20): ReactNode => {
  const icons: Record<string, ReactNode> = {
    Code2: <Code2 size={size} />, Palette: <Palette size={size} />, TrendingUp: <TrendingUp size={size} />,
    Settings: <Settings size={size} />, ShieldCheck: <ShieldCheck size={size} />, Smartphone: <Smartphone size={size} />,
    Globe: <Globe size={size} />, MonitorSmartphone: <MonitorSmartphone size={size} />, Layout: <Layout size={size} />,
    ShoppingCart: <ShoppingCart size={size} />, FileText: <FileText size={size} />, CreditCard: <CreditCard size={size} />,
    Plug: <Plug size={size} />, Rocket: <Rocket size={size} />, Bot: <Bot size={size} />,
    TestTube: <TestTube size={size} />, Database: <Database size={size} />, Wrench: <Wrench size={size} />,
    Cloud: <Cloud size={size} />, Server: <Server size={size} />, GraduationCap: <GraduationCap size={size} />,
    PenTool: <PenTool size={size} />, Layers: <Layers size={size} />, Film: <Film size={size} />,
    Package: <Package size={size} />, Printer: <Printer size={size} />, BookOpen: <BookOpen size={size} />,
    Camera: <Camera size={size} />, Megaphone: <Megaphone size={size} />, Search: <Search size={size} />,
    BarChart3: <BarChart3 size={size} />, Mail: <Mail size={size} />, MessageSquare: <MessageSquare size={size} />,
    Users: <Users size={size} />, Store: <Store size={size} />, Target: <Target size={size} />,
    Eye: <Eye size={size} />, Briefcase: <Briefcase size={size} />, LineChart: <LineChart size={size} />,
    Box: <Box size={size} />, DollarSign: <DollarSign size={size} />, PieChart: <PieChart size={size} />,
    PanelTop: <PanelTop size={size} />, ArrowRightLeft: <ArrowRightLeft size={size} />, Lock: <Lock size={size} />,
    Languages: <Languages size={size} />, FileCheck: <FileCheck size={size} />, Star: <Star size={size} />,
    MapPin: <MapPin size={size} />, Calendar: <Calendar size={size} />,
  };
  return icons[name] || null;
};

// Helper to create features array
const feat = (items: [string, string, string][]) =>
  items.map(([title, description, icon]) => ({ title, description, icon: ic(icon) }));

// Helper to create process array
const proc = (items: [string, string][]) =>
  items.map(([title, description], step) => ({ step: step + 1, title, description }));

// ============================================
// SOFTWARE & WEB DEVELOPMENT (17 services)
// ============================================
const softwareServices: ServiceData[] = [
  {
    slug: 'software-development', title: 'Software Development', shortTitle: 'Software Dev',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Code2'), tagline: 'Custom software built for scale, speed, and resilience',
    heroDescription: 'From concept to deployment, we engineer robust software solutions that automate processes, enhance productivity, and drive measurable business outcomes.',
    description: 'We build enterprise-grade custom software solutions that solve complex business challenges. From SaaS platforms to internal tools, our engineering team delivers scalable, maintainable, and future-proof applications.',
    features: feat([['Custom Architecture', 'Tailored system design based on your unique business logic, scalability requirements, and growth projections.', 'Layers'], ['Full-Stack Engineering', 'End-to-end development with modern frameworks, clean architecture, and comprehensive test coverage.', 'Code2'], ['Scalable Infrastructure', 'Built to handle growth from startup MVP to enterprise-grade systems serving millions of users.', 'Cloud'], ['Security First', 'Enterprise security practices including encryption, authentication, and compliance-ready architecture.', 'ShieldCheck'], ['API-First Design', 'Modular RESTful and GraphQL APIs for seamless integration with any third-party system.', 'Plug'], ['Performance Optimized', 'Optimized for speed with caching strategies, database tuning, and efficient algorithms.', 'Rocket']]),
    process: proc([['Discovery & Analysis', 'Deep-dive into your business requirements, user needs, and technical constraints.'], ['Architecture & Design', 'System architecture design, database modeling, and technical specification.'], ['Agile Development', 'Sprint-based development with continuous integration and regular demos.'], ['Testing & QA', 'Comprehensive testing including unit, integration, and user acceptance testing.'], ['Deployment & Support', 'Production deployment, monitoring setup, and ongoing maintenance.']]),
    benefits: ['50% faster time-to-market with agile methodology', '99.9% uptime guarantee', 'Reduced operational costs through automation', 'Future-proof and maintainable codebase', 'Dedicated project manager and team', 'Transparent development process'],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'GraphQL', 'REST API'],
  },
  {
    slug: 'web-development', title: 'Web Development', shortTitle: 'Web Dev',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Globe'), tagline: 'High-performance websites and web apps that convert',
    heroDescription: 'Websites and web applications engineered for performance, accessibility, and conversion.',
    description: 'We build fast, responsive, and SEO-optimized websites and web applications. From corporate sites to complex web platforms, our process ensures every pixel serves a purpose.',
    features: feat([['Responsive Design', 'Pixel-perfect designs that look stunning on every device and screen size.', 'MonitorSmartphone'], ['Performance First', 'Sub-second load times with optimized assets, lazy loading, and edge caching.', 'Rocket'], ['SEO Optimized', 'Built-in SEO best practices including semantic HTML, structured data, and meta optimization.', 'Search'], ['CMS Integration', 'Easy content management with headless CMS, WordPress, or custom admin panels.', 'Layout'], ['Progressive Web Apps', 'App-like experience with offline support, push notifications, and installability.', 'Smartphone'], ['Analytics Ready', 'Integrated analytics, conversion tracking, and user behavior insights.', 'BarChart3']]),
    process: proc([['Strategy & Planning', 'Define goals, target audience, and technical requirements.'], ['UI/UX Design', 'Wireframes, prototypes, and visual designs approved by you.'], ['Frontend Development', 'Pixel-perfect, responsive implementation with modern frameworks.'], ['Backend & CMS', 'Server setup, CMS integration, and API development.'], ['Launch & Optimize', 'Deployment, performance tuning, and ongoing optimization.']]),
    benefits: ['Core Web Vitals optimized for SEO ranking', 'Mobile-first responsive design', 'Fast loading under 2 seconds', 'CMS-powered content management', 'SSL and security hardening', 'Monthly performance reports'],
    technologies: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL', 'Vercel', 'AWS', 'WordPress', 'Strapi', 'Sanity'],
  },
  {
    slug: 'mobile-app-development', title: 'Mobile App Development (iOS & Android)', shortTitle: 'Mobile App',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Smartphone'), tagline: 'Native and cross-platform apps users love',
    heroDescription: 'From idea to App Store, we build mobile experiences that engage users, drive retention, and scale.',
    description: 'We design and develop high-performance mobile applications for iOS and Android. Whether native or cross-platform, we deliver apps that users love and businesses rely on.',
    features: feat([['Native iOS & Android', 'Platform-specific development for maximum performance and native feel.', 'Smartphone'], ['Cross-Platform (Flutter/RN)', 'Cost-effective development with single codebase for both platforms.', 'MonitorSmartphone'], ['UI/UX Excellence', 'Intuitive interfaces designed for thumb-friendly mobile interactions.', 'Layout'], ['Push Notifications', 'Real-time engagement with targeted push notification systems.', 'MessageSquare'], ['Offline Capabilities', 'Apps that work seamlessly even without internet connection.', 'Database'], ['App Store Launch', 'Full submission support for App Store and Google Play with ASO.', 'Rocket']]),
    process: proc([['App Strategy', 'Define app purpose, target users, and monetization model.'], ['UI/UX Design', 'Mobile-first design with interactive prototypes.'], ['Development', 'Agile sprints with regular builds and testing.'], ['Testing & QA', 'Device testing, performance optimization, and bug fixes.'], ['Launch & Growth', 'Store submission, ASO, and post-launch support.']]),
    benefits: ['Single codebase for iOS & Android with Flutter/RN', 'Native performance with cross-platform efficiency', 'App Store & Google Play approved', 'Push notification and real-time features', 'Analytics and crash reporting built-in', 'Post-launch maintenance and updates'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'GraphQL', 'AWS Amplify', 'SQLite', 'Redux', 'Expo', 'Fastlane'],
  },
  {
    slug: 'ui-ux-design', title: 'UI/UX Design', shortTitle: 'UI/UX',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Layout'), tagline: 'User-centered design that drives engagement',
    heroDescription: 'Design is not decoration — it is strategy. We create interfaces that users intuitively understand and businesses profit from.',
    description: 'We craft beautiful, intuitive interfaces backed by user research and data. Our design process transforms complex workflows into simple, delightful experiences.',
    features: feat([['User Research', 'In-depth user interviews, surveys, and behavioral analysis to inform design decisions.', 'Users'], ['Wireframing & Prototyping', 'Interactive prototypes that let you experience the product before development.', 'Layout'], ['Visual Design', 'Stunning visual systems with consistent design language and brand alignment.', 'PenTool'], ['Design Systems', 'Scalable component libraries that ensure consistency across your product.', 'Layers'], ['Usability Testing', 'Real user testing sessions to validate design decisions and uncover issues.', 'TestTube'], ['Accessibility (a11y)', 'WCAG compliant designs that work for everyone including users with disabilities.', 'Eye']]),
    process: proc([['Research & Discovery', 'User personas, journey mapping, and competitive analysis.'], ['Information Architecture', 'Sitemap, user flows, and content structure.'], ['Wireframing', 'Low-fidelity wireframes and interactive prototypes.'], ['Visual Design', 'High-fidelity mockups, animations, and design system.'], ['Handoff & Support', 'Developer handoff, design QA, and iteration.']]),
    benefits: ['40% increase in user engagement', 'Reduced development rework', 'Consistent brand experience', 'Higher conversion rates', 'Reduced customer support tickets', 'Scalable design system for growth'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Zeplin', 'Storybook', 'Tailwind CSS'],
  },
  {
    slug: 'e-commerce-solutions', title: 'E-commerce Solutions', shortTitle: 'E-commerce',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('ShoppingCart'), tagline: 'Online stores that sell and scale',
    heroDescription: 'Turn browsers into buyers with e-commerce platforms engineered for conversion and speed.',
    description: 'We build high-converting e-commerce platforms with seamless checkout experiences, inventory management, and multi-channel selling capabilities.',
    features: feat([['Custom E-commerce', 'Bespoke online stores built exactly to your business requirements.', 'ShoppingCart'], ['Payment Integration', 'Multiple payment gateways including Stripe, PayPal, bKash, and local options.', 'CreditCard'], ['Inventory Management', 'Real-time stock tracking, low-stock alerts, and automated reordering.', 'Box'], ['Multi-vendor Support', 'Marketplace functionality for multiple sellers and vendors.', 'Store'], ['Analytics Dashboard', 'Sales analytics, customer insights, and revenue tracking.', 'BarChart3'], ['Mobile Commerce', 'Optimized mobile shopping experience with app-like interactions.', 'Smartphone']]),
    process: proc([['Business Analysis', 'Understand products, target market, and sales goals.'], ['Platform Selection', 'Choose between custom, Shopify, or WooCommerce based on needs.'], ['Design & Development', 'Store design, product catalog, and checkout flow development.'], ['Payment & Logistics', 'Payment gateway setup, shipping integration, and fulfillment workflow.'], ['Launch & Growth', 'Go live with marketing support and optimization.']]),
    benefits: ['Conversion-optimized checkout flow', 'Multiple payment gateway support', 'Real-time inventory tracking', 'Mobile-first shopping experience', 'SEO-friendly product pages', 'Scalable to millions of products'],
    technologies: ['Shopify', 'WooCommerce', 'Next.js Commerce', 'Stripe', 'bKash', 'SSLCommerz', 'Redis', 'PostgreSQL', 'Elasticsearch', 'AWS'],
  },
  {
    slug: 'landing-page-design', title: 'Landing Page Design', shortTitle: 'Landing Page',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('FileText'), tagline: 'High-converting pages that capture leads',
    heroDescription: 'Purpose-built landing pages designed with one goal: converting visitors into customers.',
    description: 'We design and develop landing pages laser-focused on conversion. Every element is strategically placed to guide visitors toward your goal.',
    features: feat([['Conversion Focused', 'Every element strategically designed to maximize conversion rates.', 'Target'], ['A/B Testing Ready', 'Built for experimentation with variant testing capabilities.', 'TestTube'], ['Fast Loading', 'Optimized for speed because every second costs you conversions.', 'Rocket'], ['Responsive Design', 'Perfect on desktop, tablet, and mobile devices.', 'MonitorSmartphone'], ['SEO Optimized', 'Built with semantic HTML and meta tags for search visibility.', 'Search'], ['Analytics Integrated', 'Track visitors, conversions, and user behavior from day one.', 'BarChart3']]),
    process: proc([['Goal Definition', 'Identify the primary conversion goal and target audience.'], ['Copy & Structure', 'Compelling copywriting and page structure planning.'], ['Design', 'Visual design with conversion-optimized layout.'], ['Development', 'Pixel-perfect implementation with animations.'], ['Launch & Optimize', 'Go live with analytics and start optimizing.']]),
    benefits: ['2-3x higher conversion rates', 'Fast load times under 1.5 seconds', 'Mobile-optimized experience', 'A/B testing infrastructure', 'Integrated analytics tracking', 'CMS-editable content sections'],
    technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'Google Analytics', 'Hotjar', 'Vercel', 'Webflow', 'Unbounce'],
  },
  {
    slug: 'payment-gateway-integration', title: 'Payment Gateway Integration', shortTitle: 'Payment Gateway',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('CreditCard'), tagline: 'Seamless and secure payment processing',
    heroDescription: 'Enable your business to accept payments globally with secure, seamless, multi-currency payment processing.',
    description: 'We integrate reliable payment gateways into your platform, enabling smooth transactions with support for multiple currencies, recurring billing, and PCI compliance.',
    features: feat([['Multi-Gateway Support', 'Integration with Stripe, PayPal, bKash, SSLCommerz, and more.', 'CreditCard'], ['Recurring Payments', 'Subscription management with automatic billing and invoicing.', 'DollarSign'], ['PCI Compliant', 'Secure payment processing that meets industry standards.', 'Lock'], ['Multi-Currency', 'Accept payments in multiple currencies with auto-conversion.', 'DollarSign'], ['Refund Management', 'Automated refund processing and transaction management.', 'ArrowRightLeft'], ['Webhook Integration', 'Real-time payment notifications and automated workflows.', 'Plug']]),
    process: proc([['Requirement Analysis', 'Understand payment flows, currencies, and business rules.'], ['Gateway Selection', 'Recommend and configure optimal payment gateways.'], ['Integration', 'Secure integration with proper error handling.'], ['Testing', 'Sandbox testing with all payment scenarios.'], ['Go Live', 'Production deployment with monitoring and support.']]),
    benefits: ['Support for 50+ payment methods', 'PCI DSS compliant processing', 'Automated recurring billing', 'Real-time transaction monitoring', 'Multi-currency support', 'Detailed payment analytics'],
    technologies: ['Stripe', 'PayPal', 'bKash', 'SSLCommerz', 'Aamarpay', 'Razorpay', 'Square', 'Webhooks', 'Node.js', 'API Integration'],
  },
  {
    slug: 'api-third-party-integration', title: 'API & Third-party Integration', shortTitle: 'API Integration',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Plug'), tagline: 'Connect everything, automate anything',
    heroDescription: 'Break down data silos and automate workflows by connecting your systems with the tools your business depends on.',
    description: 'We integrate third-party APIs and services into your platform, enabling seamless data flow between systems and automating complex business workflows.',
    features: feat([['REST & GraphQL APIs', 'Expert integration with both RESTful and GraphQL APIs.', 'Plug'], ['Cloud Services', 'Integration with AWS, Google Cloud, Azure, and Firebase.', 'Cloud'], ['CRM & ERP Connectors', 'Connect Salesforce, HubSpot, SAP, and other enterprise systems.', 'Database'], ['Payment & Finance APIs', 'Banking, payment, and fintech API integrations.', 'CreditCard'], ['Communication APIs', 'Twilio, SendGrid, WhatsApp Business, and email service integrations.', 'MessageSquare'], ['Custom API Development', 'Build and expose your own APIs for partners and clients.', 'Code2']]),
    process: proc([['API Audit', 'Analyze existing systems and integration requirements.'], ['Architecture Design', 'Design integration architecture with proper error handling.'], ['Development', 'Implement integrations with robust retry and logging.'], ['Testing', 'End-to-end testing of all integration flows.'], ['Documentation', 'Comprehensive API documentation and monitoring setup.']]),
    benefits: ['Eliminate manual data entry', 'Real-time data synchronization', 'Automated business workflows', 'Reduced operational costs', 'Scalable integration architecture', 'Comprehensive error handling'],
    technologies: ['REST API', 'GraphQL', 'WebSocket', 'Node.js', 'Python', 'Zapier', 'Make.com', 'AWS Lambda', 'RabbitMQ', 'Redis', 'PostgreSQL'],
  },
  {
    slug: 'app-store-optimization', title: 'App Store Optimization (ASO)', shortTitle: 'ASO',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Rocket'), tagline: 'Get your app discovered and downloaded',
    heroDescription: 'Maximize your app visibility and organic downloads with data-driven App Store Optimization strategies.',
    description: 'We optimize your app store presence to increase visibility, drive organic downloads, and improve conversion rates for both App Store and Google Play.',
    features: feat([['Keyword Research', 'Identify high-impact keywords your target users are searching for.', 'Search'], ['Metadata Optimization', 'Optimize titles, descriptions, and subtitles for maximum visibility.', 'FileText'], ['Screenshot Design', 'Compelling screenshots that showcase your app best features.', 'Layout'], ['Review Management', 'Strategies to increase positive ratings and manage reviews.', 'Star'], ['Competitor Analysis', 'Analyze competitor strategies and identify opportunities.', 'BarChart3'], ['A/B Testing', 'Test different visuals and copy to optimize conversion rates.', 'TestTube']]),
    process: proc([['Audit', 'Current ASO audit and competitor benchmarking.'], ['Keyword Strategy', 'Research and select optimal keywords.'], ['Optimization', 'Optimize metadata, visuals, and description.'], ['Launch & Monitor', 'Publish changes and monitor performance.'], ['Iterate', 'Continuous optimization based on data and results.']]),
    benefits: ['3-5x increase in organic downloads', 'Higher app store ranking', 'Improved conversion rates', 'Better user reviews', 'Data-driven optimization', 'Competitive advantage'],
    technologies: ['App Annie', 'Sensor Tower', 'Google Play Console', 'App Store Connect', 'SplitMetrics', 'A/B Testing Tools'],
  },
  {
    slug: 'business-process-automation', title: 'Business Process Automation', shortTitle: 'BPA',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Bot'), tagline: 'Automate repetitive tasks, focus on growth',
    heroDescription: 'Eliminate bottlenecks, reduce human error, and accelerate operations with intelligent process automation.',
    description: 'We identify, analyze, and automate repetitive business processes to reduce manual effort, minimize errors, and free your team to focus on high-value work.',
    features: feat([['Process Mapping', 'Identify and document processes ripe for automation.', 'Layers'], ['Workflow Automation', 'Build automated workflows that connect tools and teams.', 'ArrowRightLeft'], ['AI-Powered Bots', 'Intelligent chatbots and virtual assistants for customer service.', 'Bot'], ['Document Automation', 'Auto-generate reports, invoices, and documents from templates.', 'FileText'], ['Email Automation', 'Triggered email sequences based on user behavior and events.', 'Mail'], ['Data Pipeline', 'Automated data collection, transformation, and reporting.', 'Database']]),
    process: proc([['Process Audit', 'Map current processes and identify automation opportunities.'], ['Solution Design', 'Design automation workflows and select tools.'], ['Development', 'Build and configure automation solutions.'], ['Testing', 'Thorough testing of automated workflows.'], ['Deployment', 'Go live with training and monitoring.']]),
    benefits: ['70% reduction in manual tasks', '99% fewer processing errors', '3x faster process completion', 'Significant cost savings', 'Better employee satisfaction', 'Scalable automation framework'],
    technologies: ['Zapier', 'Make.com', 'n8n', 'Python', 'Node.js', 'AWS Lambda', 'Power Automate', 'UiPath', 'Slack API', 'Google Workspace API'],
  },
  {
    slug: 'qa-testing', title: 'QA & Testing', shortTitle: 'QA & Testing',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('TestTube'), tagline: 'Quality assurance that protects your reputation',
    heroDescription: 'Ship with confidence. Our rigorous testing processes catch bugs before your users do.',
    description: 'Our comprehensive QA and testing services ensure your software is reliable, secure, and performs flawlessly across all devices and scenarios.',
    features: feat([['Functional Testing', 'Verify every feature works as specified across all scenarios.', 'TestTube'], ['Performance Testing', 'Load testing, stress testing, and performance benchmarking.', 'Rocket'], ['Security Testing', 'Vulnerability assessment, penetration testing, and security audits.', 'ShieldCheck'], ['Automation Testing', 'Automated test suites for rapid regression testing.', 'Bot'], ['Compatibility Testing', 'Cross-browser, cross-device, and cross-platform testing.', 'MonitorSmartphone'], ['Usability Testing', 'Real user testing to validate user experience and flow.', 'Users']]),
    process: proc([['Test Planning', 'Define test strategy, scope, and success criteria.'], ['Test Case Design', 'Create comprehensive test cases and scenarios.'], ['Execution', 'Manual and automated test execution.'], ['Defect Management', 'Track, prioritize, and verify bug fixes.'], ['Reporting', 'Detailed test reports and quality metrics.']]),
    benefits: ['95%+ bug detection rate', '50% faster release cycles', 'Reduced post-launch issues', 'Comprehensive test coverage', 'Automated regression suite', 'Detailed quality metrics'],
    technologies: ['Selenium', 'Cypress', 'Jest', 'Playwright', 'Jira', 'Postman', 'JMeter', 'OWASP ZAP', 'BrowserStack', 'TestRail'],
  },
  {
    slug: 'data-migration-services', title: 'Data Migration Services', shortTitle: 'Data Migration',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Database'), tagline: 'Move your data safely and seamlessly',
    heroDescription: 'Migrate your valuable business data safely, accurately, and with zero disruption to your operations.',
    description: 'We plan and execute data migrations with zero downtime and zero data loss. From legacy systems to modern platforms, we handle complex data transformations.',
    features: feat([['Zero Downtime', 'Migration strategies that keep your systems running throughout.', 'Server'], ['Data Validation', 'Rigorous validation to ensure 100% data accuracy.', 'FileCheck'], ['Legacy Migration', 'Move from outdated systems to modern platforms seamlessly.', 'ArrowRightLeft'], ['Data Transformation', 'Clean, transform, and restructure data for new systems.', 'Layers'], ['Rollback Plan', 'Comprehensive rollback strategy for complete safety.', 'ShieldCheck'], ['Post-Migration Support', 'Monitoring and support after migration to ensure stability.', 'Wrench']]),
    process: proc([['Assessment', 'Analyze source systems, data volume, and complexity.'], ['Planning', 'Create migration plan, mapping, and rollback strategy.'], ['Preparation', 'Set up target environment and transformation scripts.'], ['Execution', 'Execute migration with real-time monitoring.'], ['Validation', 'Verify data integrity and decommission legacy systems.']]),
    benefits: ['Zero data loss guarantee', 'Zero downtime migration', '100% data accuracy verification', 'Comprehensive rollback plan', 'Legacy system expertise', 'Post-migration monitoring'],
    technologies: ['AWS DMS', 'Azure Migration', 'ETL Tools', 'Python', 'SQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
  },
  {
    slug: 'website-app-maintenance-support', title: 'Website/App Maintenance & Support (AMC)', shortTitle: 'Maintenance',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Wrench'), tagline: 'Keep your digital assets running smoothly',
    heroDescription: 'Proactive maintenance and rapid support that keeps your digital products secure, fast, and always available.',
    description: 'Our Annual Maintenance Contracts ensure your websites and applications stay secure, up-to-date, and performing optimally so you can focus on your business.',
    features: feat([['24/7 Monitoring', 'Continuous uptime monitoring with instant alerting.', 'Eye'], ['Security Patches', 'Regular security updates and vulnerability patches.', 'ShieldCheck'], ['Performance Tuning', 'Ongoing optimization for speed and efficiency.', 'Rocket'], ['Bug Fixes', 'Rapid resolution of issues and bugs.', 'Wrench'], ['Content Updates', 'Regular content updates and feature enhancements.', 'FileText'], ['Backup & Recovery', 'Automated backups with disaster recovery planning.', 'Database']]),
    process: proc([['Audit', 'Comprehensive system audit and health check.'], ['SLA Definition', 'Define response times, scope, and priorities.'], ['Monitoring Setup', 'Deploy monitoring tools and alerting systems.'], ['Regular Maintenance', 'Scheduled updates, backups, and optimization.'], ['Reporting', 'Monthly health reports and recommendations.']]),
    benefits: ['99.9% uptime guarantee', 'Same-day bug resolution', 'Proactive security monitoring', 'Monthly health reports', 'Priority support channel', 'Cost predictability with AMC'],
    technologies: ['Datadog', 'New Relic', 'Sentry', 'AWS CloudWatch', 'UptimeRobot', 'GitHub Actions', 'Docker', 'Kubernetes'],
  },
  {
    slug: 'cloud-hosting-devops', title: 'Cloud Hosting & DevOps Setup', shortTitle: 'Cloud & DevOps',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Cloud'), tagline: 'Enterprise-grade infrastructure, simplified',
    heroDescription: 'Deploy faster, scale smarter, and sleep better with enterprise-grade cloud infrastructure and DevOps automation.',
    description: 'We set up and manage your cloud infrastructure with DevOps best practices from CI/CD pipelines to container orchestration and auto-scaling.',
    features: feat([['Cloud Architecture', 'Design and set up scalable cloud infrastructure on AWS, GCP, or Azure.', 'Cloud'], ['CI/CD Pipelines', 'Automated build, test, and deployment pipelines.', 'Rocket'], ['Container Orchestration', 'Docker and Kubernetes setup for containerized deployments.', 'Server'], ['Auto-Scaling', 'Automatic scaling based on traffic and resource utilization.', 'BarChart3'], ['Monitoring & Logging', 'Comprehensive monitoring, logging, and alerting systems.', 'Eye'], ['Cost Optimization', 'Right-sizing and optimization to minimize cloud costs.', 'DollarSign']]),
    process: proc([['Infrastructure Assessment', 'Analyze requirements and recommend cloud strategy.'], ['Architecture Design', 'Design scalable, secure cloud architecture.'], ['Setup & Configuration', 'Provision resources and configure services.'], ['CI/CD Implementation', 'Build automated deployment pipelines.'], ['Handover & Support', 'Documentation, training, and ongoing support.']]),
    benefits: ['99.99% uptime SLA', '10x faster deployments', '60% reduction in infrastructure costs', 'Automated scaling', 'Zero-downtime deployments', '24/7 monitoring and alerts'],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'Nginx', 'Redis', 'Cloudflare'],
  },
  {
    slug: 'domain-hosting-services', title: 'Domain & Hosting Services', shortTitle: 'Domain & Hosting',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Server'), tagline: 'Reliable hosting, hassle-free management',
    heroDescription: 'Reliable, fast, and secure hosting infrastructure with complete domain management.',
    description: 'We provide end-to-end domain registration and hosting management services, ensuring your website is always fast, secure, and accessible.',
    features: feat([['Domain Registration', 'Register and manage domains across all major TLDs.', 'Globe'], ['SSL Certificates', 'Free and premium SSL certificates for secure connections.', 'Lock'], ['Managed Hosting', 'Fully managed hosting with automatic updates and backups.', 'Server'], ['CDN Setup', 'Content delivery network for global fast loading.', 'Cloud'], ['Email Hosting', 'Professional email setup with your custom domain.', 'Mail'], ['DNS Management', 'Expert DNS configuration and management.', 'Settings']]),
    process: proc([['Consultation', 'Understand hosting needs and traffic expectations.'], ['Setup', 'Register domain, configure hosting, and set up email.'], ['Security', 'Configure SSL, firewall, and security settings.'], ['Optimization', 'Set up CDN, caching, and performance optimization.'], ['Management', 'Ongoing management, renewals, and support.']]),
    benefits: ['Free SSL certificate', '99.9% uptime guarantee', 'Automatic backups', 'Global CDN for speed', 'Professional email included', 'Hassle-free renewals'],
    technologies: ['AWS', 'Cloudflare', 'Vercel', 'Netlify', 'DigitalOcean', 'Namecheap', 'Google Workspace', 'cPanel', 'Nginx', 'Lets Encrypt'],
  },
  {
    slug: 'ai-automation-integration', title: 'AI/Automation Integration (Chatbot, AI Tools)', shortTitle: 'AI Integration',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('Bot'), tagline: 'Integrate AI to work smarter, not harder',
    heroDescription: 'Supercharge your business with AI — intelligent chatbots, automated workflows, and data-driven insights.',
    description: 'We integrate cutting-edge AI capabilities into your existing systems from intelligent chatbots to AI-powered analytics and automation.',
    features: feat([['AI Chatbots', 'Intelligent conversational bots for customer support and engagement.', 'Bot'], ['NLP Integration', 'Natural language processing for text analysis and understanding.', 'MessageSquare'], ['AI Analytics', 'Predictive analytics and intelligent data insights.', 'BarChart3'], ['Computer Vision', 'Image recognition, classification, and processing.', 'Eye'], ['AI Automation', 'Intelligent process automation that learns and improves.', 'ArrowRightLeft'], ['Custom AI Models', 'Fine-tuned models specific to your business domain.', 'Database']]),
    process: proc([['AI Readiness Assessment', 'Evaluate which AI capabilities will benefit your business most.'], ['Solution Design', 'Design AI integration architecture and data pipeline.'], ['Development', 'Build and train AI models, chatbots, or automation.'], ['Integration', 'Seamlessly integrate AI into your existing systems.'], ['Optimization', 'Monitor, retrain, and continuously improve AI performance.']]),
    benefits: ['24/7 AI-powered customer support', '60% reduction in response time', 'Intelligent data-driven decisions', 'Automated repetitive tasks', 'Scalable AI infrastructure', 'Continuous learning and improvement'],
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'Hugging Face', 'Pinecone', 'Vector DB', 'Node.js', 'FastAPI', 'Rasa'],
  },
  {
    slug: 'training-onboarding-support', title: 'Training & Onboarding Support', shortTitle: 'Training',
    category: 'software', categoryId: 'software', categoryTitle: 'Software & Web Development',
    icon: ic('GraduationCap'), tagline: 'Empower your team to use technology effectively',
    heroDescription: 'Technology is only as good as the people using it. We ensure your team is confident and productive from day one.',
    description: 'We provide comprehensive training and onboarding programs to ensure your team can effectively use and manage the technology solutions we build.',
    features: feat([['Team Training', 'Hands-on training sessions tailored to your teams skill level.', 'Users'], ['Documentation', 'Comprehensive user guides, manuals, and knowledge bases.', 'BookOpen'], ['Video Tutorials', 'Step-by-step video guides for self-paced learning.', 'Film'], ['Admin Training', 'Specialized training for system administrators and managers.', 'Settings'], ['Ongoing Support', 'Continued support and refresher training as needed.', 'MessageSquare'], ['Knowledge Transfer', 'Complete knowledge transfer for internal team empowerment.', 'GraduationCap']]),
    process: proc([['Needs Assessment', 'Identify training needs and skill gaps.'], ['Program Design', 'Create customized training curriculum.'], ['Delivery', 'Conduct training sessions in-person or virtual.'], ['Materials', 'Provide documentation and video tutorials.'], ['Follow-up', 'Assessment, feedback, and ongoing support.']]),
    benefits: ['Faster team adoption', 'Reduced support tickets', 'Increased productivity', 'Self-sufficient team', 'Custom training materials', 'Ongoing knowledge support'],
    technologies: ['Loom', 'Notion', 'Confluence', 'Google Workspace', 'LMS Platforms', 'Screen Recording', 'Slack', 'Teams'],
  },
];

// Remaining categories - empty for now, will be populated in next steps
const brandingServices: ServiceData[] = [
  {
    slug: 'branding-rebranding', title: 'Branding & Re-branding', shortTitle: 'Branding',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('PenTool'), tagline: 'Build a brand identity that resonates and endures',
    heroDescription: 'From naming to narrative, we craft brand identities that cut through the noise — creating emotional connections that turn audiences into loyal advocates.',
    description: 'We build complete brand identities from the ground up or reimagine existing ones. Our strategic approach combines market research, creative thinking, and brand psychology to deliver identities that are memorable, authentic, and built to scale.',
    features: feat([['Brand Strategy', 'Data-driven brand positioning that defines your unique value proposition and market stance.', 'Target'], ['Visual Identity System', 'Cohesive visual language including color systems, typography, and graphic elements.', 'Palette'], ['Brand Voice & Messaging', 'Distinct tone of voice and messaging framework that speaks to your audience.', 'FileText'], ['Brand Guidelines', 'Comprehensive brand book documenting every rule for consistent application.', 'BookOpen'], ['Market Positioning', 'Strategic positioning that differentiates you from competitors.', 'TrendingUp'], ['Brand Audit', 'Deep analysis of existing brand perception, strengths, and growth opportunities.', 'Eye']]),
    process: proc([['Discovery', 'Deep-dive into your business, audience, competitors, and market landscape.'], ['Strategy', 'Define brand positioning, personality, values, and messaging framework.'], ['Identity Design', 'Create visual identity — logo, colors, typography, and design system.'], ['Guidelines', 'Document comprehensive brand guidelines for consistent application.'], ['Launch & Rollout', 'Plan and execute brand launch across all touchpoints.']]),
    benefits: ['Distinctive market positioning', 'Emotional brand connection', 'Consistent brand experience', 'Increased brand recall', 'Clear competitive differentiation', 'Scalable brand framework'],
    technologies: ['Adobe Creative Suite', 'Figma', 'Canva Pro', 'Brandbook Tools', 'Miro', 'Notion', 'Google Trends', 'SurveyMonkey'],
  },
  {
    slug: 'brand-kit-logo-design', title: 'Brand Kit & Logo Design', shortTitle: 'Logo Design',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('Palette'), tagline: 'A logo that tells your story in a single glance',
    heroDescription: 'Your logo is the face of your brand. We design versatile, timeless logos and complete brand kits that work everywhere — from mobile screens to billboards.',
    description: 'We design professional logos and complete brand kits that capture your brand essence. Every element is crafted with intention — from iconography and typography to color psychology and spatial relationships.',
    features: feat([['Custom Logo Design', 'Multiple unique logo concepts crafted specifically for your brand.', 'Palette'], ['Logo Variations', 'Full logo suite — primary, secondary, icon, monochrome, and responsive versions.', 'Layers'], ['Color Palette', 'Strategic color system with primary, secondary, and accent palettes.', 'Palette'], ['Typography System', 'Curated font pairings for headlines, body text, and UI elements.', 'FileText'], ['Brand Patterns', 'Custom patterns and textures for visual brand recognition.', 'Layers'], ['Mockup Presentations', 'Real-world mockups showing your brand on products, screens, and print.', 'Eye']]),
    process: proc([['Brief & Research', 'Understand your vision, values, target audience, and competitive landscape.'], ['Concept Exploration', 'Sketch and develop multiple logo directions and concepts.'], ['Refinement', 'Narrow down to the strongest concept and refine every detail.'], ['Brand Kit Assembly', 'Build complete brand kit with all variations and guidelines.'], ['Final Delivery', 'Deliver all assets in every format needed for any application.']]),
    benefits: ['Multiple unique concepts', 'All file formats included', 'Scalable vector files', 'Complete brand documentation', 'Print and digital ready', 'Unlimited revisions on selected concept'],
    technologies: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop', 'Inkscape', 'Coolors', 'FontPair', 'Looka', 'Hatchful'],
  },
  {
    slug: 'social-media-post-design', title: 'Social Media Post Design', shortTitle: 'Social Post Design',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('Layers'), tagline: 'Scroll-stopping visuals for every platform',
    heroDescription: 'Stand out in crowded feeds with professionally designed social media content that drives engagement, builds recognition, and reinforces your brand with every post.',
    description: 'We create eye-catching social media post designs that maintain brand consistency while maximizing engagement on every platform — from Instagram carousels to LinkedIn thought leadership visuals.',
    features: feat([['Platform-Specific Design', 'Optimized designs for Instagram, Facebook, LinkedIn, Twitter/X, and more.', 'Smartphone'], ['Story & Reel Templates', 'Animated and static templates for stories, reels, and short-form video.', 'Film'], ['Carousel Designs', 'Multi-slide carousel posts that tell stories and drive swipe-throughs.', 'Layers'], ['Brand-Consistent Templates', 'Reusable template systems that maintain visual consistency.', 'Palette'], ['Seasonal Campaigns', 'Themed designs for holidays, events, and seasonal promotions.', 'Calendar'], ['Infographic Posts', 'Data-driven infographic designs that educate and engage.', 'BarChart3']]),
    process: proc([['Content Calendar Review', 'Review your content plan and identify design opportunities.'], ['Concept & Wireframe', 'Sketch concepts and plan visual hierarchy for each post.'], ['Design Creation', 'Design posts with brand-consistent visuals and compelling layouts.'], ['Review & Refine', 'Client review, feedback incorporation, and final refinements.'], ['Delivery & Schedule', 'Deliver optimized files ready for posting and scheduling.']]),
    benefits: ['Platform-optimized formats', 'Increased engagement rates', 'Consistent brand presence', 'Reusable template system', 'Quick turnaround times', 'Animated and static options'],
    technologies: ['Adobe Photoshop', 'Canva Pro', 'Figma', 'Adobe After Effects', 'CapCut', 'Photoshop Express', 'Over', 'Typorama'],
  },
  {
    slug: 'motion-graphics-video-editing', title: 'Motion Graphics / Video Editing', shortTitle: 'Motion Graphics',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('Film'), tagline: 'Bring your brand story to life with motion',
    heroDescription: 'From explainer videos to social media reels, we create compelling motion graphics and video content that captures attention and communicates your message with impact.',
    description: 'We produce professional motion graphics and video editing services that transform static ideas into dynamic visual stories. Whether it is product demos, brand animations, or social content, we deliver broadcast-quality results.',
    features: feat([['Explainer Videos', 'Animated explainer videos that simplify complex ideas and products.', 'Film'], ['Logo Animations', 'Dynamic logo reveals and animated brand marks for intros and outros.', 'Palette'], ['Social Media Videos', 'Short-form video content optimized for reels, TikTok, and stories.', 'Smartphone'], ['Product Demos', 'Professional product showcase videos with 3D elements and effects.', 'Box'], ['Title Sequences', 'Animated title cards and lower thirds for corporate videos.', 'Layers'], ['Color Grading', 'Professional color grading for cinematic visual consistency.', 'Eye']]),
    process: proc([['Script & Storyboard', 'Develop narrative structure, script, and visual storyboard.'], ['Asset Creation', 'Design illustrations, graphics, and visual elements needed.'], ['Animation & Editing', 'Animate graphics, edit footage, add effects and transitions.'], ['Sound Design', 'Add music, sound effects, and voiceover synchronization.'], ['Final Render', 'Export in all required formats and resolutions for distribution.']]),
    benefits: ['Cinematic quality output', 'Multi-format delivery', 'Increased audience retention', 'Brand-consistent animations', 'Fast turnaround available', 'Unlimited revision rounds'],
    technologies: ['Adobe After Effects', 'Adobe Premiere Pro', 'DaVinci Resolve', 'Cinema 4D', 'Blender', 'CapCut Pro', 'Audition', 'Lottie'],
  },
  {
    slug: 'packaging-design', title: 'Packaging Design', shortTitle: 'Packaging',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('Package'), tagline: 'Packaging that sells before the product is opened',
    heroDescription: 'We design packaging that combines shelf appeal with functional excellence — creating an unboxing experience that delights customers and reinforces your brand at every touchpoint.',
    description: 'We create packaging designs that are both beautiful and functional. From concept to print-ready files, our designs are engineered to stand out on shelves while meeting all production requirements.',
    features: feat([['Product Packaging', 'Custom packaging design for retail products that commands attention.', 'Package'], ['Label Design', 'Professional label designs that communicate quality and compliance.', 'Layers'], ['Box & Carton Design', 'Structural packaging design with die-line creation and 3D mockups.', 'Box'], ['Unboxing Experience', 'Design the complete unboxing journey from outer box to inner reveal.', 'Star'], ['Print-Ready Files', 'Production-ready files with proper bleeds, dielines, and specifications.', 'Printer'], ['Sustainable Options', 'Eco-friendly packaging design with sustainable material guidance.', 'Globe']]),
    process: proc([['Research & Brief', 'Understand product, target market, competitors, and shelf context.'], ['Concept Development', 'Explore multiple design directions with sketches and mood boards.'], ['3D Mockup & Refinement', 'Create 3D mockups, refine designs, and get client approval.'], ['Production Files', 'Prepare print-ready files with dielines and specifications.'], ['Printer Coordination', 'Liaise with printers for color proofing and production quality.']]),
    benefits: ['Shelf-standout designs', 'Complete print-ready files', '3D mockup previews', 'Dieline and spec compliance', 'Eco-conscious options', 'Printer coordination included'],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Cinema 4D', 'Blender', 'ArtiosCAD', 'Esko', 'Canva', 'Packhelp'],
  },
  {
    slug: 'print-design', title: 'Print Design', shortTitle: 'Print Design',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('Printer'), tagline: 'Print materials that make a lasting impression',
    heroDescription: 'From business cards to brochures, we design professional print collateral that elevates your brand in the physical world with precision and impact.',
    description: 'We design all types of print materials with meticulous attention to color accuracy, typography, and production specifications. Every piece reinforces your brand while serving its intended purpose beautifully.',
    features: feat([['Business Cards', 'Premium business card designs that make memorable first impressions.', 'CreditCard'], ['Brochures & Flyers', 'Multi-page brochures and single-page flyers with compelling layouts.', 'FileText'], ['Banners & Posters', 'Large-format designs for events, trade shows, and retail displays.', 'Layout'], ['Stationery Suite', 'Complete letterheads, envelopes, and branded stationery systems.', 'FileText'], ['Catalogs & Magazines', 'Multi-page publication design with professional layout and typography.', 'BookOpen'], ['Event Materials', 'Conference badges, programs, menus, and event-specific collateral.', 'Calendar']]),
    process: proc([['Requirements & Specs', 'Gather print specifications, quantity, and distribution context.'], ['Design Concept', 'Develop layout concepts with brand-consistent design language.'], ['Mockup & Proof', 'Create digital mockups and prepare color proofs for review.'], ['Print Preparation', 'Finalize files with bleeds, crop marks, and CMYK conversion.'], ['Print Coordination', 'Coordinate with print vendors for production and delivery.']]),
    benefits: ['CMYK-optimized files', 'Bleed and trim accuracy', 'Multiple format options', 'Brand-consistent designs', 'Print vendor coordination', 'Fast turnaround available'],
    technologies: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva Pro', 'Affinity Publisher', 'QuarkXPress', 'Prepress Tools', 'Pantone'],
  },
  {
    slug: 'corporate-profile-design', title: 'Corporate Profile Design', shortTitle: 'Corporate Profile',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('BookOpen'), tagline: 'Tell your corporate story with authority and elegance',
    heroDescription: 'A well-crafted corporate profile is your most powerful business introduction. We design profiles that communicate your vision, capabilities, and credibility with sophistication.',
    description: 'We design comprehensive corporate profiles and company documents that present your business with authority and visual sophistication. From company profiles to capability statements, every page is designed to impress.',
    features: feat([['Company Profiles', 'Multi-page corporate profile design with compelling narrative and visuals.', 'BookOpen'], ['Capability Statements', 'Professional capability documents for proposals and government contracts.', 'FileText'], ['Annual Reports', 'Data-rich annual report design with infographics and executive summaries.', 'BarChart3'], ['Presentation Decks', 'Investor pitch decks and corporate presentation design.', 'Layout'], ['Case Study Layouts', 'Professional case study templates that showcase your successes.', 'Star'], ['Brand Storytelling', 'Narrative-driven design that communicates your journey and vision.', 'PenTool']]),
    process: proc([['Content Gathering', 'Collect company information, photos, data, and brand assets.'], ['Structure & Outline', 'Plan document structure, sections, and content flow.'], ['Design & Layout', 'Design page layouts with typography, imagery, and data visualization.'], ['Review & Iteration', 'Client review cycles with refinement and content updates.'], ['Final Output', 'Deliver print-ready and digital PDF versions of the complete document.']]),
    benefits: ['Professional credibility boost', 'Print and digital formats', 'Data visualization included', 'Investor-ready quality', 'Consistent brand language', 'Multi-language support'],
    technologies: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro', 'PowerPoint', 'Google Slides', 'Visme'],
  },
  {
    slug: 'photography-videography-brand-content', title: 'Photography/Videography for Brand Content', shortTitle: 'Brand Photography',
    category: 'branding', categoryId: 'branding', categoryTitle: 'Branding & Creative Design',
    icon: ic('Camera'), tagline: 'Authentic visuals that build trust and desire',
    heroDescription: 'Professional photography and videography that captures your brand essence — from product shots to team portraits, we create visual assets that tell your story authentically.',
    description: 'We provide professional photography and videography services tailored for brand content creation. Our team captures authentic, high-quality visuals that elevate your marketing materials and social presence.',
    features: feat([['Product Photography', 'Studio-quality product shots with professional lighting and styling.', 'Camera'], ['Corporate Headshots', 'Professional team portraits and executive headshots.', 'Users'], ['Event Coverage', 'Complete event photography and videography coverage.', 'Calendar'], ['Lifestyle Photography', 'Candid lifestyle shots that humanize your brand.', 'Camera'], ['Brand Video Production', 'Short-form brand films and documentary-style content.', 'Film'], ['Post-Processing', 'Professional editing, retouching, color grading, and enhancement.', 'Eye']]),
    process: proc([['Pre-Production', 'Plan shoot concepts, locations, styling, and shot lists.'], ['Production Day', 'Execute the shoot with professional equipment and direction.'], ['Selection & Editing', 'Curate best shots and perform professional post-processing.'], ['Review & Approval', 'Client selection and revision rounds on selected images.'], ['Delivery & Archive', 'Deliver edited assets in all required formats with organized archive.']]),
    benefits: ['Professional equipment and team', 'Studio and on-location options', 'Same-day preview available', 'Full post-production included', 'Organized digital archive', 'Commercial usage rights'],
    technologies: ['Adobe Lightroom', 'Adobe Photoshop', 'DaVinci Resolve', 'Premiere Pro', 'Capture One', 'Profoto Lighting', 'Sony/Canon Cinema', 'DJI Drones'],
  },
];
const marketingServices: ServiceData[] = [
  {
    slug: 'growth-building-strategies', title: 'Growth Building Strategies', shortTitle: 'Growth Strategy',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('TrendingUp'), tagline: 'Sustainable growth frameworks, not just vanity metrics',
    heroDescription: 'We architect growth systems that compound over time — combining acquisition, activation, retention, and revenue strategies into a unified engine for sustainable business growth.',
    description: 'We develop comprehensive growth strategies that go beyond superficial metrics. Our data-driven approach identifies the highest-leverage opportunities across your entire customer journey to build sustainable, compounding growth.',
    features: feat([['Growth Audit', 'Comprehensive analysis of current growth metrics, funnel health, and opportunities.', 'BarChart3'], ['Funnel Optimization', 'End-to-end funnel analysis and optimization for higher conversion rates.', 'ArrowRightLeft'], ['Experiment Framework', 'Structured A/B testing and experimentation framework for continuous improvement.', 'TestTube'], ['Revenue Modeling', 'Financial projections and revenue modeling tied to growth initiatives.', 'DollarSign'], ['Channel Strategy', 'Multi-channel acquisition strategy prioritized by ROI and scalability.', 'Target'], ['Growth Loops', 'Design self-reinforcing growth loops that drive organic, compounding growth.', 'Rocket']]),
    process: proc([['Audit & Baseline', 'Analyze current metrics, funnel performance, and growth bottlenecks.'], ['Opportunity Mapping', 'Identify highest-impact growth opportunities across the customer journey.'], ['Strategy Design', 'Build comprehensive growth strategy with clear priorities and KPIs.'], ['Implementation', 'Execute growth initiatives with structured testing and measurement.'], ['Optimize & Scale', 'Continuously optimize based on data and scale winning strategies.']]),
    benefits: ['Data-driven decision making', 'Sustainable compounding growth', 'Higher conversion rates', 'Reduced customer acquisition cost', 'Clear growth roadmap', 'Measurable ROI framework'],
    technologies: ['Google Analytics', 'Mixpanel', 'Amplitude', 'GrowthBook', 'Optimizely', 'Hotjar', 'Segment', 'Northbeam'],
  },
  {
    slug: 'ad-marketing-google-meta-ads', title: 'Ad Marketing (Google Ads, Meta Ads)', shortTitle: 'Paid Ads',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Megaphone'), tagline: 'Precision-targeted ads that convert clicks into customers',
    heroDescription: 'We create and manage high-performance ad campaigns across Google and Meta platforms — maximizing every dollar spent with data-driven targeting, creative optimization, and continuous refinement.',
    description: 'We manage end-to-end paid advertising across Google Ads and Meta (Facebook/Instagram) platforms. Our team combines strategic audience targeting, compelling ad creative, and rigorous optimization to deliver measurable ROI.',
    features: feat([['Google Ads Management', 'Full-service Google Ads management including Search, Display, and YouTube.', 'Search'], ['Meta Ads Management', 'Facebook and Instagram ad campaigns with advanced audience targeting.', 'Users'], ['Audience Targeting', 'Precision audience segmentation using demographics, behaviors, and interests.', 'Target'], ['Ad Creative Design', 'Scroll-stopping ad creatives optimized for each platform and placement.', 'Palette'], ['Bid Optimization', 'AI-powered bid strategies to maximize conversions within budget.', 'DollarSign'], ['Performance Reporting', 'Detailed performance reports with actionable insights and recommendations.', 'BarChart3']]),
    process: proc([['Account Audit', 'Deep audit of existing ad accounts, tracking, and past performance.'], ['Strategy & Planning', 'Define target audiences, campaign structure, and budget allocation.'], ['Campaign Launch', 'Build campaigns with optimized targeting, creatives, and landing pages.'], ['Optimization', 'Continuous A/B testing, bid optimization, and audience refinement.'], ['Reporting & Scaling', 'Performance analysis, reporting, and strategic scaling of winning campaigns.']]),
    benefits: ['Higher ROAS on ad spend', 'Advanced audience targeting', 'A/B tested ad creatives', 'Transparent performance reports', 'Cross-platform management', 'Dedicated account specialist'],
    technologies: ['Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'Google Tag Manager', 'Facebook Pixel', 'Unbounce', 'Hotjar', 'Optmyzr'],
  },
  {
    slug: 'seo-services', title: 'SEO (Search Engine Optimization)', shortTitle: 'SEO',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Search'), tagline: 'Rank higher, get found, drive organic growth',
    heroDescription: 'Dominate search results with our technical SEO, content strategy, and link building expertise — driving sustainable organic traffic that converts into customers.',
    description: 'We deliver comprehensive SEO services that improve your search rankings, increase organic traffic, and drive qualified leads. Our approach combines technical excellence, strategic content, and authoritative link building.',
    features: feat([['Technical SEO', 'Site speed, crawlability, schema markup, and technical foundation optimization.', 'Code2'], ['On-Page SEO', 'Content optimization, meta tags, internal linking, and keyword targeting.', 'FileText'], ['Content Strategy', 'Data-driven content planning focused on search intent and topical authority.', 'BookOpen'], ['Link Building', 'White-hat link acquisition from authoritative, relevant domains.', 'Plug'], ['Local SEO', 'Google Business Profile optimization and local search dominance.', 'MapPin'], ['SEO Auditing', 'Comprehensive site audits with prioritized action plans.', 'FileCheck']]),
    process: proc([['SEO Audit', 'Complete technical and content audit with competitive analysis.'], ['Keyword Research', 'Identify high-value keywords with commercial intent and ranking potential.'], ['On-Page Optimization', 'Optimize existing pages and create new content targeting priority keywords.'], ['Off-Page & Links', 'Build authoritative backlinks and strengthen domain authority.'], ['Monitor & Report', 'Track rankings, traffic, and conversions with regular reporting.']]),
    benefits: ['Sustainable organic traffic', 'Higher search rankings', 'Increased domain authority', 'Better user experience', 'Long-term compounding results', 'Measurable keyword growth'],
    technologies: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'Surfer SEO', 'Clearscope', 'Moz', 'PageSpeed Insights'],
  },
  {
    slug: 'smm-services', title: 'SMM Services', shortTitle: 'SMM',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('BarChart3'), tagline: 'Strategic social media that builds brands and drives results',
    heroDescription: 'We manage and grow your social media presence with strategic content, community engagement, and performance analytics that turn followers into customers.',
    description: 'Our Social Media Marketing services combine strategic planning, creative content, community management, and data-driven optimization to build engaged audiences and drive business results across all major platforms.',
    features: feat([['Content Strategy', 'Platform-specific content strategies aligned with business objectives.', 'FileText'], ['Community Management', 'Active community engagement, response management, and relationship building.', 'MessageSquare'], ['Analytics & Reporting', 'In-depth performance analytics with actionable growth insights.', 'LineChart'], ['Hashtag Strategy', 'Research-optimized hashtag strategies for maximum content discovery.', 'Search'], ['Content Calendar', 'Strategic content calendars ensuring consistent, timely posting.', 'Calendar'], ['Competitor Analysis', 'Social media competitive benchmarking and opportunity identification.', 'Target']]),
    process: proc([['Audit & Benchmark', 'Analyze current social presence and benchmark against competitors.'], ['Strategy Development', 'Create platform-specific strategies with content pillars and KPIs.'], ['Content Creation', 'Produce engaging content including graphics, copy, and video.'], ['Publish & Engage', 'Schedule content, manage communities, and engage with audiences.'], ['Analyze & Optimize', 'Measure performance, refine strategies, and scale what works.']]),
    benefits: ['Consistent brand presence', 'Increased engagement rates', 'Growing follower base', 'Platform-specific strategies', 'Data-driven optimization', 'Transparent monthly reporting'],
    technologies: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later', 'Canva Pro', 'Meta Business Suite', 'Twitter Analytics', 'LinkedIn Analytics'],
  },
  {
    slug: 'social-media-page-management', title: 'Social Media Page Management', shortTitle: 'Page Management',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Users'), tagline: 'Your social profiles, managed like a pro',
    heroDescription: 'We take complete ownership of your social media profiles — from setup and optimization to daily management, ensuring every profile reflects your brand perfectly and performs at its best.',
    description: 'We provide comprehensive social media page management services, handling everything from profile setup and optimization to content scheduling, community engagement, and performance monitoring across all platforms.',
    features: feat([['Profile Optimization', 'Complete profile setup and optimization for maximum brand impact.', 'Settings'], ['Content Scheduling', 'Strategic scheduling across platforms for optimal reach and engagement.', 'Calendar'], ['DM & Comment Management', 'Professional response management for comments, messages, and reviews.', 'MessageSquare'], ['Profile Monitoring', '24/7 monitoring for mentions, tags, and brand conversations.', 'Eye'], ['Cross-Platform Management', 'Unified management across Facebook, Instagram, LinkedIn, Twitter, and more.', 'Globe'], ['Growth Tracking', 'Monthly growth reports with follower, engagement, and reach metrics.', 'TrendingUp']]),
    process: proc([['Profile Audit', 'Review and audit all existing social media profiles.'], ['Optimization', 'Optimize bios, images, links, and settings across all platforms.'], ['Content Pipeline', 'Build content pipeline and establish publishing workflows.'], ['Daily Management', 'Handle daily posting, engagement, and community management.'], ['Reporting', 'Monthly performance reports with insights and recommendations.']]),
    benefits: ['Professional profile presence', 'Consistent brand voice', 'Faster response times', 'Cross-platform consistency', 'Growth-focused management', 'Detailed monthly reports'],
    technologies: ['Hootsuite', 'Sprout Social', 'Meta Business Suite', 'Buffer', 'Canva Pro', 'Linktree', 'Later', 'SocialBee'],
  },
  {
    slug: 'content-writing-copywriting', title: 'Content Writing / Copywriting', shortTitle: 'Content Writing',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('FileText'), tagline: 'Words that inform, persuade, and convert',
    heroDescription: 'From blog posts to landing page copy, we craft compelling content that educates your audience, builds authority, and drives measurable business results.',
    description: 'We produce high-quality content and copywriting that connects with your audience and drives action. Our writers specialize in creating SEO-optimized, brand-aligned content for every channel and purpose.',
    features: feat([['Blog & Article Writing', 'SEO-optimized blog posts and articles that build topical authority.', 'BookOpen'], ['Website Copywriting', 'Compelling website copy that communicates value and drives conversions.', 'Globe'], ['Landing Page Copy', 'High-converting landing page copy optimized for specific campaign goals.', 'Layout'], ['Product Descriptions', 'Engaging product descriptions that highlight benefits and drive purchases.', 'ShoppingCart'], ['Email Copywriting', 'Persuasive email subject lines and body copy that boost open and click rates.', 'Mail'], ['Technical Writing', 'Clear, accurate technical documentation, whitepapers, and case studies.', 'FileCheck']]),
    process: proc([['Research & Brief', 'Research topic, audience, competitors, and search intent thoroughly.'], ['Outline & Strategy', 'Create content outline with SEO strategy and key messaging points.'], ['Writing', 'Craft compelling, well-structured content aligned with brand voice.'], ['Review & SEO', 'Editorial review, SEO optimization, and fact-checking.'], ['Delivery & Revision', 'Deliver final content with revision rounds and performance tracking.']]),
    benefits: ['SEO-optimized content', 'Brand-consistent voice', 'Conversion-focused copy', 'Research-backed writing', 'Multiple content types', 'Revision rounds included'],
    technologies: ['Google Docs', 'Grammarly', 'Surfer SEO', 'Clearscope', 'Hemingway Editor', 'Ahrefs', 'BuzzSumo', 'Notion'],
  },
  {
    slug: 'email-marketing', title: 'Email Marketing', shortTitle: 'Email Marketing',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Mail'), tagline: 'Inboxes that generate revenue, not just opens',
    heroDescription: 'We design and execute email marketing programs that nurture leads, retain customers, and drive revenue — from automated sequences to targeted campaigns.',
    description: 'We build complete email marketing systems that convert. From strategy and template design to automation workflows and list management, we handle every aspect of your email marketing with data-driven precision.',
    features: feat([['Email Strategy', 'Comprehensive email marketing strategy aligned with business goals.', 'Target'], ['Automation Workflows', 'Behavioral trigger sequences, welcome flows, and nurture campaigns.', 'ArrowRightLeft'], ['Template Design', 'Custom, responsive email templates that reflect your brand perfectly.', 'Palette'], ['List Management', 'Segmentation, hygiene, and growth strategies for healthy email lists.', 'Database'], ['A/B Testing', 'Systematic testing of subject lines, content, timing, and CTAs.', 'TestTube'], ['Analytics & Reporting', 'Detailed email performance analytics with deliverability insights.', 'BarChart3']]),
    process: proc([['Audit & Strategy', 'Audit existing email setup and design comprehensive strategy.'], ['Setup & Design', 'Configure platforms, design templates, and build automation flows.'], ['Content Creation', 'Write compelling email copy and design visual content.'], ['Launch & Monitor', 'Launch campaigns, monitor deliverability, and optimize performance.'], ['Report & Scale', 'Analyze results, refine strategies, and scale successful campaigns.']]),
    benefits: ['Automated revenue generation', 'Higher open and click rates', 'Improved deliverability', 'Behavioral segmentation', 'Brand-consistent templates', 'Detailed performance insights'],
    technologies: ['Mailchimp', 'Klaviyo', 'ConvertKit', 'ActiveCampaign', 'HubSpot', 'Brevo', 'Mailgun', 'SendGrid'],
  },
  {
    slug: 'whatsapp-business-api-chatbot', title: 'WhatsApp Business API / Chatbot Marketing', shortTitle: 'WhatsApp Marketing',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('MessageSquare'), tagline: 'Conversational marketing on the world\'s biggest messaging platform',
    heroDescription: 'Leverage WhatsApp Business API and intelligent chatbots to engage customers directly — providing instant support, personalized marketing, and seamless transactions.',
    description: 'We implement WhatsApp Business API solutions and AI-powered chatbots that transform how you engage with customers. From automated marketing messages to intelligent support bots, we build conversational experiences that drive results.',
    features: feat([['WhatsApp API Setup', 'Complete WhatsApp Business API integration and configuration.', 'MessageSquare'], ['AI Chatbot Development', 'Intelligent chatbots with NLP for natural conversations and automation.', 'Bot'], ['Automated Campaigns', 'Broadcast campaigns and automated message sequences for marketing.', 'Megaphone'], ['Customer Support Bot', '24/7 automated customer support with smart escalation to human agents.', 'Users'], ['WhatsApp Commerce', 'Product catalogs, order notifications, and in-chat purchasing flows.', 'ShoppingCart'], ['Analytics Dashboard', 'Message delivery, response, and conversion analytics in real time.', 'BarChart3']]),
    process: proc([['Requirements Analysis', 'Understand business needs, customer journey, and use cases.'], ['API Integration', 'Set up WhatsApp Business API and configure messaging templates.'], ['Chatbot Development', 'Build and train AI chatbot with conversation flows and NLP.'], ['Testing & Launch', 'Thorough testing, compliance review, and production deployment.'], ['Monitor & Optimize', 'Monitor performance, refine conversations, and scale automation.']]),
    benefits: ['Direct customer engagement', '98% message open rates', '24/7 automated support', 'Reduced response time', 'WhatsApp commerce enabled', 'Real-time analytics'],
    technologies: ['WhatsApp Business API', 'Twilio', 'Wati', 'Dialogflow', 'Rasa', 'Node.js', 'Python', 'Webhook'],
  },
  {
    slug: 'influencer-marketing', title: 'Influencer Marketing', shortTitle: 'Influencer Marketing',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Star'), tagline: 'Partner with the right voices to amplify your brand',
    heroDescription: 'We connect your brand with the right influencers to build authentic partnerships that expand your reach, build trust, and drive measurable engagement and sales.',
    description: 'We manage end-to-end influencer marketing campaigns — from identifying the perfect influencers and negotiating partnerships to managing content creation, tracking performance, and measuring ROI.',
    features: feat([['Influencer Discovery', 'Data-driven identification of influencers matching your brand and audience.', 'Search'], ['Partnership Management', 'End-to-end relationship management from outreach to campaign completion.', 'Users'], ['Campaign Strategy', 'Strategic campaign design with clear objectives, KPIs, and content briefs.', 'Target'], ['Content Coordination', 'Brief development, content review, and quality assurance.', 'FileText'], ['Performance Tracking', 'Real-time campaign monitoring with engagement and conversion tracking.', 'BarChart3'], ['ROI Analysis', 'Comprehensive post-campaign analysis with ROI calculation and insights.', 'DollarSign']]),
    process: proc([['Research & Shortlist', 'Research and shortlist influencers based on relevance, reach, and engagement.'], ['Outreach & Negotiation', 'Handle influencer outreach, negotiation, and contract management.'], ['Brief & Planning', 'Develop creative briefs and campaign timelines.'], ['Campaign Execution', 'Manage content creation, approvals, and publishing.'], ['Report & Analyze', 'Measure performance, calculate ROI, and provide strategic recommendations.']]),
    benefits: ['Authentic brand advocacy', 'Expanded audience reach', 'Trust-driven engagement', 'Performance-based partnerships', 'Cross-platform campaigns', 'Transparent ROI reporting'],
    technologies: ['Upfluence', 'AspireIQ', 'HypeAuditor', 'CreatorIQ', 'Grin', 'Social Blade', 'Klear', 'Traackr'],
  },
  {
    slug: 'affiliate-marketing', title: 'Affiliate Marketing Setup & Management', shortTitle: 'Affiliate Marketing',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('DollarSign'), tagline: 'Build a performance-based sales army',
    heroDescription: 'We set up and manage affiliate marketing programs that turn partners into revenue generators — with proper tracking, fraud prevention, and incentive optimization.',
    description: 'We build and manage complete affiliate marketing programs from platform setup to partner recruitment and performance optimization. Our focus is on creating sustainable, profitable affiliate ecosystems.',
    features: feat([['Program Setup', 'End-to-end affiliate program setup with tracking, commissions, and rules.', 'Settings'], ['Affiliate Recruitment', 'Strategic partner identification, outreach, and onboarding.', 'Users'], ['Commission Structure', 'Optimized commission models that incentivize performance and profitability.', 'DollarSign'], ['Fraud Prevention', 'Advanced fraud detection and prevention to protect your budget.', 'ShieldCheck'], ['Creative Assets', 'Affiliate-ready banners, links, landing pages, and promotional materials.', 'Layers'], ['Performance Optimization', 'Continuous program optimization based on data and affiliate feedback.', 'BarChart3']]),
    process: proc([['Strategy & Platform', 'Define commission structure and select affiliate platform.'], ['Program Setup', 'Configure tracking, creatives, rules, and affiliate portal.'], ['Recruitment', 'Identify, recruit, and onboard quality affiliate partners.'], ['Management', 'Manage relationships, resolve issues, and support affiliates.'], ['Optimize & Scale', 'Analyze performance, optimize commissions, and scale the program.']]),
    benefits: ['Performance-based marketing', 'Low risk, high reward model', 'Scalable revenue channel', 'Fraud protection built-in', 'Dedicated program management', 'Transparent tracking and reporting'],
    technologies: ['ShareASale', 'CJ Affiliate', 'Impact', 'Refersion', 'Post Affiliate Pro', 'PartnerStack', 'Tapfiliate', 'Cake'],
  },
  {
    slug: 'marketplace-management', title: 'Marketplace Management', shortTitle: 'Marketplace',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Store'), tagline: 'Win on every marketplace, every day',
    heroDescription: 'We manage your presence across major e-commerce marketplaces — optimizing listings, managing inventory, running ads, and maximizing sales on every platform.',
    description: 'We provide comprehensive marketplace management services across platforms like Amazon, Daraz, Shopify Marketplace, and more. From listing optimization to advertising and inventory management, we handle everything.',
    features: feat([['Listing Optimization', 'SEO-optimized product listings with compelling titles, descriptions, and images.', 'Search'], ['Marketplace Advertising', 'Sponsored product and brand advertising for increased visibility.', 'Megaphone'], ['Inventory Management', 'Real-time inventory tracking and replenishment across platforms.', 'Box'], ['Pricing Strategy', 'Dynamic pricing strategies to maximize margins and competitiveness.', 'DollarSign'], ['Review Management', 'Proactive review solicitation and reputation management.', 'Star'], ['Multi-Platform Sync', 'Unified management across Amazon, Daraz, and other marketplaces.', 'ArrowRightLeft']]),
    process: proc([['Marketplace Audit', 'Analyze current marketplace presence, competitors, and opportunities.'], ['Strategy & Setup', 'Develop platform-specific strategies and optimize all listings.'], ['Advertising Launch', 'Set up and manage marketplace advertising campaigns.'], ['Daily Management', 'Handle inventory, orders, customer service, and performance optimization.'], ['Report & Scale', 'Monthly reporting, analysis, and strategic scaling recommendations.']]),
    benefits: ['Increased marketplace sales', 'Optimized product listings', 'Better ad performance', 'Streamlined inventory', 'Multi-platform presence', 'Competitive pricing advantage'],
    technologies: ['Amazon Seller Central', 'Daraz Seller Center', 'Shopify', 'Jungle Scout', 'Helium 10', 'Sellics', 'Feedvisor', 'ChannelAdvisor'],
  },
  {
    slug: 'market-research-competitor-analysis', title: 'Market Research & Competitor Analysis', shortTitle: 'Market Research',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Target'), tagline: 'Make decisions backed by data, not guesswork',
    heroDescription: 'We conduct deep market research and competitor analysis that gives you the strategic intelligence to make confident, informed business decisions.',
    description: 'We deliver comprehensive market research and competitive intelligence that reveals opportunities, threats, and strategic advantages. Our research combines quantitative data with qualitative insights for actionable business intelligence.',
    features: feat([['Market Sizing', 'Total addressable market analysis and segment sizing for your industry.', 'PieChart'], ['Competitor Intelligence', 'Deep-dive competitor analysis covering strategies, strengths, and weaknesses.', 'Eye'], ['Customer Research', 'Surveys, interviews, and behavioral analysis of your target customers.', 'Users'], ['Trend Analysis', 'Industry trend identification and future market forecasting.', 'TrendingUp'], ['SWOT Analysis', 'Comprehensive strengths, weaknesses, opportunities, and threats assessment.', 'ShieldCheck'], ['Opportunity Mapping', 'Identification of underserved segments and market gaps.', 'MapPin']]),
    process: proc([['Scope Definition', 'Define research scope, objectives, and key questions.'], ['Data Collection', 'Gather primary and secondary data through multiple research methods.'], ['Analysis', 'Analyze data, identify patterns, and draw strategic insights.'], ['Report & Presentation', 'Deliver comprehensive report with findings and recommendations.'], ['Strategy Workshop', 'Present findings and facilitate strategic planning session.']]),
    benefits: ['Data-backed decisions', 'Competitive advantage insights', 'Customer behavior understanding', 'Market opportunity identification', 'Risk mitigation intelligence', 'Actionable recommendations'],
    technologies: ['Google Trends', 'SEMrush', 'Ahrefs', 'Statista', 'SurveyMonkey', 'Google Forms', 'Crunchbase', 'SimilarWeb'],
  },
  {
    slug: 'pr-online-reputation-management', title: 'PR & Online Reputation Management', shortTitle: 'Reputation Management',
    category: 'marketing', categoryId: 'marketing', categoryTitle: 'Digital Marketing & Growth',
    icon: ic('Eye'), tagline: 'Your brand reputation, protected and elevated',
    heroDescription: 'We manage your online reputation and PR strategy — monitoring brand mentions, responding to reviews, and building the positive public perception your brand deserves.',
    description: 'We provide comprehensive PR and online reputation management services that protect and enhance your brand image. From monitoring and crisis response to proactive reputation building and media relations.',
    features: feat([['Brand Monitoring', 'Real-time monitoring of brand mentions, reviews, and sentiment across the web.', 'Eye'], ['Review Management', 'Strategic review response and reputation building across all platforms.', 'Star'], ['Crisis Communication', 'Rapid crisis response plans and communication strategies.', 'ShieldCheck'], ['Media Relations', 'Press release distribution and media relationship management.', 'Megaphone'], ['Content Suppression', 'Strategic content creation to promote positive search results.', 'Search'], ['Reputation Reports', 'Monthly reputation health reports with sentiment analysis and trends.', 'BarChart3']]),
    process: proc([['Reputation Audit', 'Audit current online reputation, reviews, and search results.'], ['Strategy Development', 'Develop PR and reputation management strategy with clear objectives.'], ['Monitoring Setup', 'Deploy monitoring tools and establish alert systems.'], ['Active Management', 'Manage reviews, respond to mentions, and execute PR initiatives.'], ['Report & Refine', 'Monthly reporting, sentiment analysis, and strategy refinement.']]),
    benefits: ['Proactive reputation protection', 'Positive search results', 'Crisis-ready communication', 'Improved online ratings', 'Media relationship building', 'Brand sentiment tracking'],
    technologies: ['Brandwatch', 'Mention', 'Google Alerts', 'Reputation.com', 'BirdEye', 'Podium', 'Meltwater', 'Cision'],
  },
];
const erpServices: ServiceData[] = [
  {
    slug: 'custom-erp-solutions', title: 'Custom ERP Solutions', shortTitle: 'Custom ERP',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('Briefcase'), tagline: 'One system to run your entire business',
    heroDescription: 'We build custom ERP systems that unify all your business operations — from finance and HR to inventory and procurement — into one intelligent, streamlined platform.',
    description: 'We design and develop custom Enterprise Resource Planning systems tailored to your specific business processes. Unlike off-the-shelf solutions, our ERPs are built around how your business actually works, eliminating friction and maximizing efficiency.',
    features: feat([['Module-Based Architecture', 'Modular design allowing you to start with core modules and expand over time.', 'Layers'], ['Finance & Accounting', 'Complete financial management with general ledger, AP/AR, and reporting.', 'DollarSign'], ['Procurement Management', 'End-to-end procurement workflows from requisition to payment.', 'ShoppingCart'], ['Project Management', 'Integrated project tracking, resource allocation, and timeline management.', 'Calendar'], ['Multi-Location Support', 'Multi-branch, multi-warehouse, and multi-currency capabilities.', 'Globe'], ['Custom Reporting', 'Ad-hoc and scheduled reports with exportable dashboards.', 'BarChart3']]),
    process: proc([['Business Analysis', 'Deep analysis of current processes, pain points, and requirements.'], ['System Design', 'Architect ERP modules, data models, and integration points.'], ['Development', 'Build and test each module with iterative client feedback.'], ['Integration', 'Connect with existing systems, APIs, and third-party tools.'], ['Deploy & Train', 'Production deployment with comprehensive staff training.']]),
    benefits: ['Unified business operations', 'Eliminated data silos', 'Real-time business insights', 'Automated workflows', 'Scalable architecture', 'Custom-fit to your processes'],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'React', 'Docker', 'Redis', 'REST APIs', 'GraphQL'],
  },
  {
    slug: 'pos-system-development', title: 'POS System Development', shortTitle: 'POS System',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('MonitorSmartphone'), tagline: 'Fast, reliable point-of-sale built for your business',
    heroDescription: 'We develop custom POS systems that handle transactions, inventory, and customer data with speed and reliability — designed specifically for your retail or hospitality operation.',
    description: 'We build custom Point of Sale systems that go beyond basic transaction processing. Our POS solutions integrate with your inventory, CRM, and accounting systems to provide a seamless retail management experience.',
    features: feat([['Transaction Processing', 'Fast, reliable checkout with multiple payment method support.', 'CreditCard'], ['Inventory Sync', 'Real-time inventory synchronization between POS and warehouse.', 'ArrowRightLeft'], ['Customer Management', 'Built-in CRM with purchase history, loyalty points, and profiles.', 'Users'], ['Multi-Store Support', 'Centralized management for multiple retail locations.', 'Store'], ['Offline Capability', 'Continue processing transactions even without internet connectivity.', 'Server'], ['Receipt & Invoice', 'Customizable receipts, invoices, and thermal printer support.', 'Printer']]),
    process: proc([['Requirements Gathering', 'Understand retail workflow, payment needs, and hardware requirements.'], ['System Design', 'Design POS interface, database schema, and integration architecture.'], ['Development', 'Build POS application with hardware integration and testing.'], ['Hardware Setup', 'Configure barcode scanners, printers, cash drawers, and payment terminals.'], ['Launch & Support', 'Deploy, train staff, and provide ongoing technical support.']]),
    benefits: ['Lightning-fast transactions', 'Real-time inventory sync', 'Multi-payment support', 'Offline capability', 'Multi-store management', 'Hardware integration ready'],
    technologies: ['React', 'Electron', 'Node.js', 'PostgreSQL', 'Socket.io', 'Stripe SDK', 'ESC/POS', 'Bluetooth API'],
  },
  {
    slug: 'inventory-supply-chain-management', title: 'Inventory & Supply Chain Management Software', shortTitle: 'Inventory Management',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('Box'), tagline: 'Never lose track of a single unit again',
    heroDescription: 'We build intelligent inventory and supply chain management systems that give you complete visibility and control over your stock — from warehouse to customer doorstep.',
    description: 'We develop comprehensive inventory and supply chain management software that provides real-time visibility, automated reordering, and intelligent demand forecasting to optimize your entire supply chain.',
    features: feat([['Real-Time Tracking', 'Live inventory levels across all warehouses and locations.', 'Eye'], ['Automated Reordering', 'Smart reorder points and automated purchase order generation.', 'ArrowRightLeft'], ['Barcode & QR', 'Barcode and QR code scanning for fast, accurate stock management.', 'Search'], ['Warehouse Management', 'Zone-based warehouse layout, pick-pack-ship workflows.', 'Store'], ['Demand Forecasting', 'AI-powered demand prediction for optimal stock levels.', 'TrendingUp'], ['Supplier Management', 'Supplier portal, performance tracking, and order management.', 'Users']]),
    process: proc([['Process Mapping', 'Map current inventory workflows and supply chain processes.'], ['System Design', 'Design database, workflows, and integration architecture.'], ['Development', 'Build inventory system with barcode integration and automation.'], ['Testing & Migration', 'Test thoroughly and migrate existing inventory data.'], ['Training & Go-Live', 'Staff training, deployment, and post-launch support.']]),
    benefits: ['Real-time stock visibility', 'Reduced stockouts and overstock', 'Automated reordering', 'Faster order fulfillment', 'Demand forecasting', 'Multi-warehouse support'],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'React', 'Barcode APIs', 'Socket.io', 'Redis', 'Docker'],
  },
  {
    slug: 'hr-payroll-management', title: 'HR & Payroll Management Software', shortTitle: 'HR & Payroll',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('Calendar'), tagline: 'Streamline your people operations end to end',
    heroDescription: 'We build comprehensive HR and payroll management systems that automate employee lifecycle management — from hiring and onboarding to payroll processing and compliance reporting.',
    description: 'We develop custom HR and payroll management software that handles the entire employee lifecycle. From recruitment and onboarding to attendance tracking, leave management, and payroll processing, everything is automated and compliant.',
    features: feat([['Employee Database', 'Centralized employee records with document management and history.', 'Database'], ['Attendance & Leave', 'Automated attendance tracking with leave management and approvals.', 'Calendar'], ['Payroll Processing', 'Automated salary calculation, deductions, tax compliance, and payslip generation.', 'DollarSign'], ['Recruitment Module', 'Job posting, applicant tracking, interview scheduling, and offer management.', 'Users'], ['Performance Reviews', 'Goal setting, review cycles, 360 feedback, and performance analytics.', 'BarChart3'], ['Compliance Reports', 'Automated labor law compliance reports and statutory filings.', 'FileCheck']]),
    process: proc([['HR Process Audit', 'Audit current HR processes, payroll structure, and compliance needs.'], ['System Design', 'Design HR modules, payroll logic, and reporting frameworks.'], ['Development', 'Build HR and payroll system with compliance rules and calculations.'], ['Data Migration', 'Migrate employee data and configure payroll parameters.'], ['Deploy & Train', 'Deploy system, train HR team, and provide ongoing support.']]),
    benefits: ['Automated payroll processing', 'Compliance-ready system', 'Self-service employee portal', 'Real-time attendance tracking', 'Performance management', 'Comprehensive reporting'],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'React', 'PDF Generation', 'Email APIs', 'OAuth', 'REST APIs'],
  },
  {
    slug: 'crm-development', title: 'CRM Development', shortTitle: 'CRM',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('PanelTop'), tagline: 'Turn relationships into revenue',
    heroDescription: 'We build custom CRM systems that give you complete visibility into your customer journey — from first contact to long-term loyalty — with intelligent automation and actionable insights.',
    description: 'We develop custom Customer Relationship Management systems tailored to your sales process and customer journey. Our CRMs go beyond contact management to provide intelligent pipeline tracking, automation, and deep customer insights.',
    features: feat([['Contact Management', 'Comprehensive contact and company records with interaction history.', 'Users'], ['Pipeline Management', 'Visual sales pipeline with deal tracking, stages, and forecasting.', 'ArrowRightLeft'], ['Task Automation', 'Automated follow-ups, task assignments, and workflow triggers.', 'Bot'], ['Email Integration', 'Native email integration with tracking, templates, and sequences.', 'Mail'], ['Analytics Dashboard', 'Sales analytics, conversion funnels, and performance dashboards.', 'PieChart'], ['Mobile Access', 'Fully responsive or native mobile app for on-the-go access.', 'Smartphone']]),
    process: proc([['Sales Process Analysis', 'Map your sales process, customer journey, and touchpoints.'], ['CRM Design', 'Design custom fields, pipelines, automation rules, and dashboards.'], ['Development', 'Build CRM with integrations, automation, and reporting.'], ['Data Import', 'Migrate existing contacts, deals, and historical data.'], ['Launch & Optimize', 'Deploy, train sales team, and continuously optimize based on usage.']]),
    benefits: ['Increased sales conversion', 'Automated follow-ups', 'Complete customer visibility', 'Sales forecasting', 'Pipeline transparency', 'Mobile-ready access'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Email APIs', 'Webhook', 'Socket.io', 'REST APIs'],
  },
  {
    slug: 'custom-dashboard-analytics-tools', title: 'Custom Dashboard & Analytics Tools', shortTitle: 'Dashboards',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('PieChart'), tagline: 'Your business data, visualized and actionable',
    heroDescription: 'We build custom dashboards and analytics tools that transform raw data into clear, actionable insights — giving you the visibility to make faster, smarter decisions.',
    description: 'We design and develop custom dashboard and analytics tools that consolidate data from multiple sources into intuitive, real-time visualizations. Our dashboards are built to surface the metrics that matter most to your business.',
    features: feat([['Real-Time Dashboards', 'Live data dashboards with automatic refresh and alerting.', 'BarChart3'], ['Data Visualization', 'Charts, graphs, heatmaps, and custom visualizations for complex data.', 'LineChart'], ['Multi-Source Integration', 'Connect and consolidate data from databases, APIs, and spreadsheets.', 'Plug'], ['Custom KPI Tracking', 'Track business KPIs with targets, trends, and variance analysis.', 'Target'], ['Export & Scheduling', 'Export reports in PDF/Excel and schedule automated delivery.', 'Mail'], ['Role-Based Access', 'Granular permissions controlling who sees what data.', 'ShieldCheck']]),
    process: proc([['Data Audit', 'Identify data sources, key metrics, and visualization requirements.'], ['Dashboard Design', 'Design layout, chart types, and interaction patterns.'], ['Data Pipeline', 'Build data pipelines connecting sources to the dashboard.'], ['Development', 'Develop interactive dashboards with real-time updates.'], ['Deploy & Iterate', 'Deploy, gather feedback, and continuously refine dashboards.']]),
    benefits: ['Real-time business visibility', 'Data-driven decisions', 'Automated reporting', 'Multi-source data consolidation', 'Interactive exploration', 'Custom KPI tracking'],
    technologies: ['React', 'D3.js', 'Chart.js', 'ECharts', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
  },
  {
    slug: 'data-analytics-business-intelligence', title: 'Data Analytics & Business Intelligence (BI)', shortTitle: 'Business Intelligence',
    category: 'erp', categoryId: 'erp', categoryTitle: 'Custom ERP & Management Software',
    icon: ic('LineChart'), tagline: 'Transform raw data into strategic advantage',
    heroDescription: 'We build data analytics and BI solutions that uncover hidden patterns, predict trends, and give your leadership team the intelligence to outperform the competition.',
    description: 'We develop comprehensive business intelligence solutions that go beyond simple reporting. Our BI systems combine advanced analytics, data warehousing, and intelligent visualization to turn your data into a strategic asset.',
    features: feat([['Data Warehousing', 'Centralized data warehouse consolidating all business data sources.', 'Database'], ['Advanced Analytics', 'Statistical analysis, trend detection, and pattern recognition.', 'BarChart3'], ['Predictive Modeling', 'Machine learning models for forecasting and predictive insights.', 'TrendingUp'], ['ETL Pipelines', 'Automated data extraction, transformation, and loading workflows.', 'ArrowRightLeft'], ['Self-Service BI', 'Drag-and-drop report builders for non-technical team members.', 'Layout'], ['Executive Dashboards', 'C-suite dashboards with strategic KPIs and business health metrics.', 'PanelTop']]),
    process: proc([['Data Assessment', 'Assess data sources, quality, and analytical requirements.'], ['Architecture Design', 'Design data warehouse, ETL pipelines, and BI architecture.'], ['Development', 'Build data pipelines, warehouse, and visualization layer.'], ['Modeling & Analysis', 'Develop analytical models and predictive algorithms.'], ['Deploy & Enable', 'Deploy BI platform, train users, and establish governance.']]),
    benefits: ['Strategic data advantage', 'Predictive business insights', 'Automated data pipelines', 'Self-service analytics', 'Executive-ready dashboards', 'Data governance framework'],
    technologies: ['Python', 'R', 'Apache Spark', 'PostgreSQL', 'Apache Airflow', 'Tableau', 'Power BI', 'Metabase'],
  },
];
const consultancyServices: ServiceData[] = [
  {
    slug: 'tech-stack-selection', title: 'Tech Stack Selection', shortTitle: 'Tech Stack',
    category: 'consultancy', categoryId: 'consultancy', categoryTitle: 'IT Consultancy & Compliance',
    icon: ic('Settings'), tagline: 'Choose the right tools before you build',
    heroDescription: 'We help you select the optimal technology stack for your project — balancing performance, scalability, team expertise, and long-term maintainability to set your project up for success from day one.',
    description: 'We provide expert technology stack selection consulting that evaluates your project requirements against available technologies. Our recommendations are based on technical merit, team capabilities, ecosystem maturity, and total cost of ownership.',
    features: feat([['Requirements Analysis', 'Deep analysis of project requirements, scale expectations, and constraints.', 'Target'], ['Technology Evaluation', 'Comprehensive evaluation of frontend, backend, database, and infrastructure options.', 'Code2'], ['Cost-Benefit Analysis', 'Total cost of ownership analysis including development, hosting, and maintenance.', 'DollarSign'], ['Team Fit Assessment', 'Evaluate technology fit with your existing team skills and hiring market.', 'Users'], ['Scalability Planning', 'Architecture review ensuring the stack supports your growth trajectory.', 'TrendingUp'], ['Risk Assessment', 'Identify technology risks, vendor lock-in potential, and mitigation strategies.', 'ShieldCheck']]),
    process: proc([['Discovery', 'Understand project goals, timeline, budget, and technical constraints.'], ['Research', 'Research and evaluate candidate technologies across all stack layers.'], ['Recommendation', 'Present ranked technology recommendations with detailed trade-off analysis.'], ['Validation', 'Build proof-of-concept to validate key technical assumptions.'], ['Documentation', 'Deliver comprehensive tech stack document with architecture guidelines.']]),
    benefits: ['Informed technology decisions', 'Reduced technical debt', 'Optimal team productivity', 'Future-proof architecture', 'Cost-effective choices', 'Reduced vendor lock-in'],
    technologies: ['Various Frameworks', 'Cloud Platforms', 'Databases', 'DevOps Tools', 'CI/CD Systems', 'Monitoring Tools'],
  },
  {
    slug: 'digital-transformation-consultancy', title: 'Digital Transformation Consultancy', shortTitle: 'Digital Transformation',
    category: 'consultancy', categoryId: 'consultancy', categoryTitle: 'IT Consultancy & Compliance',
    icon: ic('Rocket'), tagline: 'Evolve your business for the digital age',
    heroDescription: 'We guide organizations through digital transformation — from strategy definition to technology implementation — helping you modernize operations, enhance customer experience, and unlock new revenue streams.',
    description: 'We provide end-to-end digital transformation consulting that helps businesses leverage technology to fundamentally improve operations, customer experiences, and business models. Our approach is pragmatic, phased, and focused on measurable outcomes.',
    features: feat([['Digital Maturity Assessment', 'Evaluate your current digital capabilities and maturity level.', 'BarChart3'], ['Transformation Roadmap', 'Phased transformation roadmap with clear milestones and success metrics.', 'MapPin'], ['Process Digitization', 'Identify and prioritize processes for digital automation and improvement.', 'ArrowRightLeft'], ['Change Management', 'Comprehensive change management strategy for smooth organizational adoption.', 'Users'], ['Technology Selection', 'Recommend and evaluate technologies that enable transformation goals.', 'Settings'], ['ROI Framework', 'Define measurable ROI metrics and track transformation business value.', 'DollarSign']]),
    process: proc([['Assessment', 'Digital maturity assessment and opportunity identification.'], ['Strategy', 'Develop digital transformation strategy and phased roadmap.'], ['Quick Wins', 'Implement high-impact, low-risk digital improvements first.'], ['Deep Transformation', 'Execute core transformation initiatives with change management.'], ['Optimize', 'Measure results, optimize, and plan next transformation phase.']]),
    benefits: ['Modernized operations', 'Enhanced customer experience', 'New revenue streams', 'Improved efficiency', 'Data-driven culture', 'Competitive advantage'],
    technologies: ['Cloud Platforms', 'ERP Systems', 'CRM Systems', 'Automation Tools', 'AI/ML Platforms', 'Analytics Tools'],
  },
  {
    slug: 'localization-multi-language-support', title: 'Localization / Multi-language Support', shortTitle: 'Localization',
    category: 'consultancy', categoryId: 'consultancy', categoryTitle: 'IT Consultancy & Compliance',
    icon: ic('Languages'), tagline: 'Speak your customer\'s language, everywhere',
    heroDescription: 'We make your products and content accessible to global audiences with professional localization, internationalization, and multi-language support that goes far beyond simple translation.',
    description: 'We provide comprehensive localization and internationalization services that adapt your digital products for global markets. From UI text and content to date formats, currencies, and cultural nuances, we ensure your product feels native in every language.',
    features: feat([['Internationalization (i18n)', 'Architecture-level i18n setup supporting RTL, LTR, and complex scripts.', 'Globe'], ['Content Localization', 'Professional translation and cultural adaptation of all content.', 'FileText'], ['UI Adaptation', 'UI layout adaptation for different text lengths, directions, and conventions.', 'Layout'], ['Cultural Adaptation', 'Cultural sensitivity review and adaptation for images, colors, and messaging.', 'Eye'], ['Locale Management', 'Content management system for translations with workflow and review.', 'Database'], ['Testing & QA', 'Comprehensive linguistic and functional testing for each locale.', 'TestTube']]),
    process: proc([['Locale Planning', 'Identify target markets, languages, and localization priorities.'], ['i18n Implementation', 'Implement internationalization framework in your application.'], ['Content Extraction', 'Extract all translatable content and prepare translation files.'], ['Translation & Adaptation', 'Professional translation with cultural adaptation and review.'], ['Testing & Launch', 'Linguistic testing, functional QA, and staged locale rollout.']]),
    benefits: ['Global market access', 'Cultural relevance', 'Improved user experience', 'SEO in multiple languages', 'Scalable translation workflow', 'Consistent brand voice across locales'],
    technologies: ['i18next', 'React Intl', 'Crowdin', 'Phrase', 'Lokalise', 'Transifex', 'POEditor', 'Google Translate API'],
  },
  {
    slug: 'legal-compliance-tech-setup', title: 'Legal/Compliance Tech Setup (GDPR, Data Privacy)', shortTitle: 'Compliance Tech',
    category: 'consultancy', categoryId: 'consultancy', categoryTitle: 'IT Consultancy & Compliance',
    icon: ic('Lock'), tagline: 'Build trust through compliant technology',
    heroDescription: 'We set up the technical infrastructure for legal compliance — from GDPR and data privacy to industry-specific regulations — ensuring your systems meet global standards and protect user trust.',
    description: 'We implement the technical measures required for legal compliance across data privacy regulations like GDPR, CCPA, and industry-specific standards. Our approach combines legal understanding with technical implementation to create compliant-by-design systems.',
    features: feat([['GDPR Compliance', 'Technical implementation of GDPR requirements including data subject rights.', 'Lock'], ['Data Encryption', 'End-to-end encryption for data at rest and in transit.', 'ShieldCheck'], ['Consent Management', 'Cookie consent and data collection consent management systems.', 'FileCheck'], ['Data Mapping', 'Complete data flow mapping and personal data inventory.', 'Database'], ['Access Control', 'Role-based access control and data minimization implementation.', 'Users'], ['Audit Logging', 'Comprehensive audit trails and activity logging for compliance evidence.', 'FileText']]),
    process: proc([['Compliance Audit', 'Assess current systems against applicable regulations and identify gaps.'], ['Gap Analysis', 'Document compliance gaps and prioritize remediation efforts.'], ['Technical Implementation', 'Implement required technical measures — encryption, consent, access control.'], ['Documentation', 'Create compliance documentation, data processing agreements, and policies.'], ['Monitoring & Review', 'Set up ongoing compliance monitoring and periodic review cycles.']]),
    benefits: ['Regulation-compliant systems', 'Protected user privacy', 'Reduced legal risk', 'Audit-ready documentation', 'Data breach prevention', 'Global compliance readiness'],
    technologies: ['AWS KMS', 'HashiCorp Vault', 'OneTrust', 'CookieYes', 'Osano', 'Cloudflare', 'Let\'s Encrypt', 'OAuth 2.0'],
  },
];

export const categories: CategoryData[] = [
  { 
    id: 'software', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" strokeWidth={1.5} opacity={0.6} />
      </svg>
    ), 
    title: 'Software & Web Development', 
    shortTitle: 'Development', 
    tagline: 'Architecting high-performance web, mobile, and custom software systems with scalable cloud infrastructure and intuitive UI/UX.', 
    color: '#2563eb', 
    services: softwareServices 
  },
  { 
    id: 'branding', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18c2.5 0 4-1.5 4-3.5 0-1-.5-2-1.5-2.5-1-.5-1.5-1.5-1.5-2.5 0-1.5 1.5-3 3.5-3h1.5A4.5 4.5 0 0 0 21 7.5" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
        <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ), 
    title: 'Branding & Creative Design', 
    shortTitle: 'Branding', 
    tagline: 'Crafting authoritative brand identities, comprehensive design systems, and digital assets that command market recognition.', 
    color: '#9333ea', 
    services: brandingServices 
  },
  { 
    id: 'marketing', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
        <path d="M2 20h20" strokeWidth={1.5} opacity={0.4} />
      </svg>
    ), 
    title: 'Digital Marketing & Growth', 
    shortTitle: 'Marketing', 
    tagline: 'Executing data-driven SEO, high-conversion ad campaigns, and full-funnel marketing strategies that drive sustained revenue growth.', 
    color: '#059669', 
    services: marketingServices 
  },
  { 
    id: 'erp', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
        <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
        <path d="M10 6.5h4M17.5 10v4M14 17.5h-4M6.5 14v-4" strokeWidth={1.5} strokeDasharray="2 2" opacity={0.7} />
      </svg>
    ), 
    title: 'Custom ERP & Management Software', 
    shortTitle: 'ERP', 
    tagline: 'Engineering integrated enterprise ERPs, automated CRM pipelines, and real-time inventory systems to streamline operations.', 
    color: '#d97706', 
    services: erpServices 
  },
  { 
    id: 'consultancy', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeWidth={2} />
      </svg>
    ), 
    title: 'IT Consultancy & Compliance', 
    shortTitle: 'Consultancy', 
    tagline: 'Providing strategic technology roadmaps, cloud architecture audits, SOC-2/ISO compliance, and enterprise cybersecurity.', 
    color: '#0284c7', 
    services: consultancyServices 
  },
];

export const allServices: ServiceData[] = [...softwareServices, ...brandingServices, ...marketingServices, ...erpServices, ...consultancyServices];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getCategoryByServiceSlug(slug: string): CategoryData | undefined {
  return categories.find((c) => c.services.some((s) => s.slug === slug));
}
