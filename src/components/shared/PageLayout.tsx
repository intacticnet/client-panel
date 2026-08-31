'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';

const ease = [0.22, 1, 0.36, 1] as const;

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, badge, children }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-brand selection:text-white">
      {/* ── Official Global Navbar (Identical across all pages) ── */}
      <Navbar />

      {/* ── Page Hero ── */}
      <div className="relative pt-24 sm:pt-32 pb-8 sm:pb-10 overflow-hidden bg-white border-b border-slate-200/80">
        <div className="absolute inset-0 geo-grid opacity-[0.14] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/[0.025] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="max-w-3xl"
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 mb-4 shadow-2xs">
                <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs font-bold tracking-widest uppercase text-brand eyebrow-kicker">
                  {badge}
                </span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed font-body">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Decorative bar — full width, lomba */}
        <div className="mt-6 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center gap-2">
          <div className="h-[3px] flex-1 bg-gradient-to-r from-brand via-brand/60 to-transparent rounded-full" />
          <div className="h-[3px] w-8 bg-accent rounded-full" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="flex-1 relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
        >
          {children}
        </motion.div>
      </main>

      {/* ── Official Global Footer (Identical across all pages) ── */}
      <Footer />
    </div>
  );
}
