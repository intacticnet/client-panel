import type { Metadata } from 'next';
import ProductsContent from './ProductsContent';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Intactic products — enterprise-grade SaaS solutions for document automation, team collaboration, and business operations.',
  openGraph: {
    title: 'Products | Intactic',
    description: 'Production-ready SaaS products built by Intactic — from PDF automation to DevOps platforms.',
    url: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}