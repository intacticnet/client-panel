import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Founded in Chittagong, Bangladesh, Intactic is a next-generation technology partner combining engineering excellence, AI-first thinking, and creative strategy to deliver outcomes that last across 12+ industries.',
  openGraph: {
    title: 'About Intactic | Intactic',
    description: '70+ projects delivered, 50+ active clients, 98% satisfaction. Learn about Intactic — a technology partner combining engineering excellence with AI-first thinking.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}