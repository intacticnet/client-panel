import type { Metadata } from 'next';
import TermsContent from './terms-content';

export const metadata: Metadata = {
  title: 'Terms & Policies',
  description:
    'The contractual framework governing your use of intactic.net and engagement of Intactic professional services — covering intellectual property, acceptable use, liability, payments, and governing law.',
  openGraph: {
    title: 'Terms & Policies | Intactic',
    description:
      'The contractual framework governing your use of intactic.net and engagement of Intactic professional services — covering intellectual property, acceptable use, liability, payments, and governing law.',
    url: '/terms-policies',
  },
};

export default function TermsPoliciesPage() {
  return <TermsContent />;
}
