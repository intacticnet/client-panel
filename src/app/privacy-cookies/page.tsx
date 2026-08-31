import type { Metadata } from 'next';
import PrivacyContent from './privacy-content';

export const metadata: Metadata = {
  title: 'Privacy & Cookies',
  description:
    'How Intactic collects, processes, and protects your personal data — your rights as a data subject, the cookies this site uses, and the controls available to you at any time.',
  openGraph: {
    title: 'Privacy & Cookies | Intactic',
    description:
      'How Intactic collects, processes, and protects your personal data — your rights as a data subject, the cookies this site uses, and the controls available to you at any time.',
    url: '/privacy-cookies',
  },
};

export default function PrivacyCookiesPage() {
  return <PrivacyContent />;
}
