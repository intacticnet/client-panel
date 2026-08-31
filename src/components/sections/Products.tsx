'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '@/data/products';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
  FileText,
  ExternalLink,
  Users,
  Globe,
  TrendingUp,
} from 'lucide-react';

const productIcons: Record<string, typeof Sparkles> = {
  pdfingpro: FileText,
  ibyay: TrendingUp,
  'intactic-flow': Layers,
  'intactic-paygate': Zap,
  'intactic-cloudpulse': Cpu,
  'intactic-guardai': ShieldCheck,
};

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = productsData.length;
  const current = productsData[currentIndex];
  const Icon = productIcons[current.slug] || Sparkles;

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section
      id="products"
      className="relative bg-white text-slate-900 py-20 sm:py-28 overflow-hidden border-t border-slate-200/80"
    >
      {/* Subtle ambient grid */}
      <div className="absolute inset-0 geo-grid opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Center-Aligned Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 mb-3.5 shadow-2xs mx-auto">
            <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker">
              Proprietary Software Suite
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-slate-950 leading-[1.1]">
            Built by Intactic.{' '}
            <span className="text-brand block sm:inline">
              Used Globally.
            </span>
          </h2>
          
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-700 leading-relaxed font-body font-normal tracking-[0.018em] max-w-xl mx-auto">
            Enterprise-grade SaaS engines and client-first digital platforms engineered and maintained by our core teams.
          </p>
        </div>

        {/* ── Single Product Showcase Card ── */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm"
            >
              {/* 1. Clean Product Image (No overlays, static, no hover motion) */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/8] bg-slate-100 overflow-hidden border-b border-slate-200/80">
                <img
                  src={current.heroImage}
                  alt={current.name}
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top block"
                />
              </div>

              {/* 2. Product Details & Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  {/* Left block: Category, Title, Tagline, Summary */}
                  <div className="flex-1">
                    {/* Category Pill */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                        <Icon size={12} />
                        {current.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 leading-tight">
                      {current.name}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-1 text-sm font-semibold text-brand">
                      {current.tagline}
                    </p>

                    {/* Summary Description */}
                    <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] text-slate-700 leading-relaxed font-body font-normal tracking-[0.018em] max-w-2xl">
                      {current.summary}
                    </p>
                  </div>

                  {/* Right block: Two Secondary-Colored Metric Chips */}
                  <div className="flex flex-wrap md:flex-col gap-2 min-w-[200px] lg:min-w-[220px]">
                    <div className="flex-1 md:flex-none inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-[4px] bg-accent border border-accent-dark/30 text-xs font-medium text-slate-950 shadow-2xs">
                      <Users size={16} className="text-slate-950 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-900/80 uppercase tracking-wider block font-mono font-bold">Active Scale</span>
                        <span className="font-extrabold text-slate-950 text-xs sm:text-sm leading-tight block">{current.activeUsers}</span>
                      </div>
                    </div>

                    {current.metrics && current.metrics[0] && (
                      <div className="flex-1 md:flex-none inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-[4px] bg-accent border border-accent-dark/30 text-xs font-medium text-slate-950 shadow-2xs">
                        <Globe size={16} className="text-slate-950 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-900/80 uppercase tracking-wider block font-mono font-bold">{current.metrics[0].label}</span>
                          <span className="font-extrabold text-slate-950 text-xs sm:text-sm leading-tight block">{current.metrics[0].metric}</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* 3. Bottom Row: VISIT & LEARN MORE Buttons (Same row) */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2.5 sm:gap-3">
                  {current.liveUrl && (
                    <a
                      href={current.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 inline-flex items-center justify-center gap-2 px-5 rounded-[4px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                    >
                      <span>VISIT</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  <Link
                    href={`/products/${current.slug}`}
                    className="h-10 inline-flex items-center justify-center gap-2 px-5 rounded-[4px] text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200/90 border border-slate-200 transition-colors cursor-pointer active:scale-[0.98]"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Below-Card Centered Navigation Controls ── */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous product"
            className="w-10 h-10 rounded-[4px] border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-brand flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-2xs"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next product"
            className="w-10 h-10 rounded-[4px] border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-brand flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-2xs"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
