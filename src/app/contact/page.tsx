import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Intactic for enterprise software engineering, AI-driven automation, and digital transformation. Response within 4 business hours.',
  openGraph: {
    title: 'Contact Intactic | Intactic',
    description: 'Enterprise-grade consultation. Email, phone, WhatsApp, or Messenger — reach our solutions architects within 4 business hours.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}