import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Intactic — build world-class software, AI systems, and digital products for global enterprises. Remote-first culture, competitive compensation, and career-defining projects.',
  openGraph: {
    title: 'Careers at Intactic | Intactic',
    description: 'Open engineering, design, and strategy roles. Remote-first, competitive pay, and career-defining projects across 12+ industries.',
    url: '/careers',
  },
};

export default function CareersPage() {
  return <CareersContent />;
}