/**
 * Lightweight category data for Navbar dropdown ONLY.
 * The full services data is in services.tsx (~111KB) — this file avoids
 * pulling that massive file into the Navbar's eager-loaded bundle.
 */
import { type ReactNode } from 'react';

export interface NavService {
  slug: string;
  title: string;
}

export interface NavCategory {
  id: string;
  icon: ReactNode;
  title: string;
  shortTitle: string;
  tagline: string;
  color: string;
  services: NavService[];
}

export const navCategories: NavCategory[] = [
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
    services: [
      { slug: 'software-development', title: 'Software Development' },
      { slug: 'web-development', title: 'Web Development' },
      { slug: 'mobile-app-development', title: 'Mobile App Development' },
      { slug: 'ui-ux-design', title: 'UI/UX Design' },
      { slug: 'e-commerce-solutions', title: 'E-commerce Solutions' },
      { slug: 'landing-page-design', title: 'Landing Page Design' },
      { slug: 'payment-gateway-integration', title: 'Payment Gateway Integration' },
      { slug: 'api-third-party-integration', title: 'API & Third-party Integration' },
      { slug: 'app-store-optimization', title: 'App Store Optimization' },
      { slug: 'business-process-automation', title: 'Business Process Automation' },
      { slug: 'qa-testing', title: 'QA & Testing' },
      { slug: 'data-migration-services', title: 'Data Migration Services' },
      { slug: 'website-app-maintenance-support', title: 'Maintenance & Support' },
      { slug: 'cloud-hosting-devops', title: 'Cloud & DevOps' },
      { slug: 'domain-hosting-services', title: 'Domain & Hosting Services' },
      { slug: 'ai-automation-integration', title: 'AI & Automation' },
      { slug: 'training-onboarding-support', title: 'Training & Support' },
    ]
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
    services: [
      { slug: 'branding-rebranding', title: 'Branding & Re-branding' },
      { slug: 'brand-kit-logo-design', title: 'Brand Kit & Logo Design' },
      { slug: 'social-media-post-design', title: 'Social Media Post Design' },
      { slug: 'motion-graphics-video-editing', title: 'Motion Graphics & Video' },
      { slug: 'packaging-design', title: 'Packaging Design' },
      { slug: 'print-design', title: 'Print Design' },
      { slug: 'corporate-profile-design', title: 'Corporate Profile Design' },
      { slug: 'photography-videography-brand-content', title: 'Photography & Videography' },
      { slug: 'growth-building-strategies', title: 'Growth Building Strategies' },
    ]
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
    services: [
      { slug: 'ad-marketing-google-meta-ads', title: 'Ad Marketing (Google & Meta)' },
      { slug: 'seo-services', title: 'SEO Services' },
      { slug: 'smm-services', title: 'SMM Services' },
      { slug: 'social-media-page-management', title: 'Social Media Page Management' },
      { slug: 'content-writing-copywriting', title: 'Content Writing / Copywriting' },
      { slug: 'email-marketing', title: 'Email Marketing' },
      { slug: 'whatsapp-business-api-chatbot', title: 'WhatsApp Marketing' },
      { slug: 'influencer-marketing', title: 'Influencer Marketing' },
      { slug: 'affiliate-marketing', title: 'Affiliate Marketing' },
      { slug: 'marketplace-management', title: 'Marketplace Management' },
      { slug: 'market-research-competitor-analysis', title: 'Market Research & Analysis' },
      { slug: 'pr-online-reputation-management', title: 'Online Reputation Mgmt' },
    ]
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
    services: [
      { slug: 'custom-erp-solutions', title: 'Custom ERP Solutions' },
      { slug: 'pos-system-development', title: 'POS System Development' },
      { slug: 'inventory-supply-chain-management', title: 'Inventory & Supply Chain' },
      { slug: 'hr-payroll-management', title: 'HR & Payroll Management' },
      { slug: 'crm-development', title: 'CRM Development' },
      { slug: 'custom-dashboard-analytics-tools', title: 'Custom Dashboards & Analytics' },
      { slug: 'data-analytics-business-intelligence', title: 'Data Analytics & BI' },
    ]
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
    services: [
      { slug: 'tech-stack-selection', title: 'Tech Stack Selection' },
      { slug: 'digital-transformation-consultancy', title: 'Digital Transformation' },
      { slug: 'localization-multi-language-support', title: 'Localization Support' },
      { slug: 'legal-compliance-tech-setup', title: 'Legal & Compliance Tech' },
      { slug: 'cybersecurity-audit', title: 'Cybersecurity Audit & Pentesting' },
    ]
  },
];
