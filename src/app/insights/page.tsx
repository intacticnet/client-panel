import type { Metadata } from 'next';
import InsightsContent from './InsightsContent';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Technical articles on enterprise AI, cloud architecture, cybersecurity, and software engineering by the Intactic team.',
  openGraph: {
    title: 'Insights | Intactic',
    description: 'Deep-dive technical articles on Agentic AI, zero-trust security, micro-frontends, and modern software architecture.',
    url: '/insights',
  },
};

export default function InsightsPage() {
  return <InsightsContent />;
}