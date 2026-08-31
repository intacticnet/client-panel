import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results from real engagements — explore how Intactic delivered measurable impact across fintech, healthcare, logistics, and enterprise SaaS.',
  openGraph: {
    title: 'Case Studies | Intactic',
    description: 'See how Intactic transformed businesses across banking, logistics, healthcare, e-commerce, and defence with measurable outcomes.',
    url: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}