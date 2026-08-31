'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Settings, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronRight
} from 'lucide-react';
import { type CategoryItem } from '@/lib/data/icons';
import { resolveIcon } from '@/lib/data/icons';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Mobile Accordion Palettes (when opened — flat solid colors, no gradients) ─── */
const mobileThemes: Record<
  string,
  {
    bgGradient: string;
    border: string;
    accentGlow: string;
    tileBg: string;
    tileHover: string;
    tileBorder: string;
    textColor: string;
    textMuted: string;
    bulletColor: string;
    badgeBg: string;
    ctaBg: string;
    ctaTextColor: string;
  }
> = {
  software: {
    bgGradient: 'bg-[#0f2855]',
    border: 'border-sky-500/30',
    accentGlow: '#38bdf8',
    tileBg: 'bg-white/[0.07]',
    tileHover: 'hover:bg-white/[0.14]',
    tileBorder: 'border-white/10 hover:border-sky-400/30',
    textColor: 'text-white',
    textMuted: 'text-sky-100/70',
    bulletColor: '#38bdf8',
    badgeBg: 'bg-sky-500/20 text-sky-300',
    ctaBg: 'bg-accent hover:bg-accent-light',
    ctaTextColor: 'text-navy',
  },
  branding: {
    bgGradient: 'bg-[#2e1065]',
    border: 'border-purple-500/30',
    accentGlow: '#c084fc',
    tileBg: 'bg-white/[0.07]',
    tileHover: 'hover:bg-white/[0.14]',
    tileBorder: 'border-white/10 hover:border-purple-400/30',
    textColor: 'text-white',
    textMuted: 'text-purple-100/70',
    bulletColor: '#e879f9',
    badgeBg: 'bg-purple-500/20 text-purple-300',
    ctaBg: 'bg-accent hover:bg-accent-light',
    ctaTextColor: 'text-navy',
  },
  marketing: {
    bgGradient: 'bg-[#064e3b]',
    border: 'border-emerald-500/30',
    accentGlow: '#34d399',
    tileBg: 'bg-white/[0.07]',
    tileHover: 'hover:bg-white/[0.14]',
    tileBorder: 'border-white/10 hover:border-emerald-400/30',
    textColor: 'text-white',
    textMuted: 'text-emerald-100/70',
    bulletColor: '#34d399',
    badgeBg: 'bg-emerald-500/20 text-emerald-300',
    ctaBg: 'bg-accent hover:bg-accent-light',
    ctaTextColor: 'text-navy',
  },
  erp: {
    bgGradient: 'bg-[#451a03]',
    border: 'border-amber-500/30',
    accentGlow: '#fbbf24',
    tileBg: 'bg-white/[0.07]',
    tileHover: 'hover:bg-white/[0.14]',
    tileBorder: 'border-white/10 hover:border-amber-400/30',
    textColor: 'text-white',
    textMuted: 'text-amber-100/70',
    bulletColor: '#fbbf24',
    badgeBg: 'bg-amber-500/20 text-amber-300',
    ctaBg: 'bg-accent hover:bg-accent-light',
    ctaTextColor: 'text-navy',
  },
  consultancy: {
    bgGradient: 'bg-[#0c4a6e]',
    border: 'border-blue-500/30',
    accentGlow: '#60a5fa',
    tileBg: 'bg-white/[0.07]',
    tileHover: 'hover:bg-white/[0.14]',
    tileBorder: 'border-white/10 hover:border-blue-400/30',
    textColor: 'text-white',
    textMuted: 'text-blue-100/70',
    bulletColor: '#60a5fa',
    badgeBg: 'bg-blue-500/20 text-blue-300',
    ctaBg: 'bg-accent hover:bg-accent-light',
    ctaTextColor: 'text-navy',
  },
};

/* ─── Desktop Accordion: Large decorative background SVGs per category ─── */
function DesktopBgIcon({ categoryId }: { categoryId: string }) {
  const cls = 'absolute right-6 lg:right-10 bottom-6 lg:bottom-8 w-44 lg:w-56 h-44 lg:h-56 opacity-[0.06] pointer-events-none select-none';
  switch (categoryId) {
    case 'software':
      return (
        <svg viewBox="0 0 120 120" fill="none" className={cls}>
          <polyline points="35,25 95,60 35,95" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="85,25 25,60 85,95" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="60" y1="15" x2="60" y2="105" stroke="currentColor" strokeWidth={3} opacity={0.5} />
        </svg>
      );
    case 'branding':
      return (
        <svg viewBox="0 0 120 120" fill="none" className={cls}>
          <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth={4} />
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth={3} opacity={0.6} />
          <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth={2.5} opacity={0.4} />
          <circle cx="45" cy="50" r="5" fill="currentColor" opacity={0.5} />
          <circle cx="75" cy="50" r="5" fill="currentColor" opacity={0.5} />
          <circle cx="60" cy="75" r="5" fill="currentColor" opacity={0.5} />
        </svg>
      );
    case 'marketing':
      return (
        <svg viewBox="0 0 120 120" fill="none" className={cls}>
          <polyline points="15,90 40,65 60,75 85,40 105,25" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="90,25 105,25 105,40" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15" y1="105" x2="105" y2="105" stroke="currentColor" strokeWidth={3} opacity={0.4} />
        </svg>
      );
    case 'erp':
      return (
        <svg viewBox="0 0 120 120" fill="none" className={cls}>
          <rect x="10" y="10" width="40" height="40" rx="6" stroke="currentColor" strokeWidth={4} />
          <rect x="70" y="10" width="40" height="40" rx="6" stroke="currentColor" strokeWidth={4} />
          <rect x="70" y="70" width="40" height="40" rx="6" stroke="currentColor" strokeWidth={4} />
          <rect x="10" y="70" width="40" height="40" rx="6" stroke="currentColor" strokeWidth={4} />
          <line x1="50" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth={2.5} strokeDasharray="4 3" opacity={0.6} />
          <line x1="90" y1="50" x2="90" y2="70" stroke="currentColor" strokeWidth={2.5} strokeDasharray="4 3" opacity={0.6} />
          <line x1="70" y1="90" x2="50" y2="90" stroke="currentColor" strokeWidth={2.5} strokeDasharray="4 3" opacity={0.6} />
          <line x1="30" y1="70" x2="30" y2="50" stroke="currentColor" strokeWidth={2.5} strokeDasharray="4 3" opacity={0.6} />
        </svg>
      );
    case 'consultancy':
      return (
        <svg viewBox="0 0 120 120" fill="none" className={cls}>
          <path d="M60 110s40-20 40-50V25L60 5 20 25v35c0 30 40 50 40 50z" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="40,60 55,75 80,45" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const enterpriseBadges: Record<string, { badge: string; metrics: string; tech: string[] }> = {
  software: { 
    badge: 'High-Concurrency & Microservices', 
    metrics: '99.99% SLA • Zero-Downtime CI/CD',
    tech: ['Next.js 16', 'TypeScript', 'Node.js', 'PostgreSQL'] 
  },
  branding: { 
    badge: 'Vector Design Systems & Figma Tokens', 
    metrics: 'Enterprise Multi-Brand Governance',
    tech: ['Figma Tokens', 'Design Systems', '3D Motion', 'SVG Systems'] 
  },
  marketing: { 
    badge: 'ROAS Attribution & Growth Funnels', 
    metrics: 'Data-Backed Conversion Engineering',
    tech: ['GA4 / Attribution', 'Meta Ads', 'Search Engine Ops', 'CRO Funnels'] 
  },
  erp: { 
    badge: 'Distributed ACID Workflows', 
    metrics: 'Real-Time Enterprise Telemetry',
    tech: ['Enterprise ERP', 'PostgreSQL', 'Redis Pipelines', 'Custom CRM'] 
  },
  consultancy: { 
    badge: 'Zero-Trust Security & ISO/SOC-2', 
    metrics: 'Tier-1 Enterprise Governance',
    tech: ['AWS KMS', 'Vault', 'SOC-2 / ISO', 'Cloud Audits'] 
  },
};

/* ─── Mobile Accordion Item (Optimized for 60-120 FPS Butter-Smooth Expansion) ─── */
function MobileAccordionItem({
  category,
  isOpen,
  onToggle,
  index,
}: {
  category: CategoryItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const theme = mobileThemes[category.id] ?? mobileThemes.software;
  const badgeInfo = enterpriseBadges[category.id] ?? enterpriseBadges.software;
  const [showAllServices, setShowAllServices] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const maxInitial = 5;
  const hasMore = category.services.length > maxInitial;
  const initialServices = category.services.slice(0, maxInitial);
  const remainingServices = category.services.slice(maxInitial);

  // When card opens, smoothly scroll it into clear view so it never gets cut off
  useEffect(() => {
    if (isOpen && cardRef.current) {
      const timer = setTimeout(() => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const navOffset = 75;
        if (rect.top < navOffset || rect.bottom > window.innerHeight) {
          const targetY = window.scrollY + rect.top - navOffset;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // When 'View All' expands, ensure bottom CTA is fully in view
  useEffect(() => {
    if (showAllServices && cardRef.current) {
      const timer = setTimeout(() => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const navOffset = 75;
        if (rect.top < navOffset || rect.bottom > window.innerHeight) {
          const targetY = window.scrollY + rect.top - navOffset;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [showAllServices]);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-[8px] sm:rounded-[10px] overflow-hidden transition-all duration-200 scroll-mt-20 ${
        isOpen
          ? `${theme.bgGradient} ring-1 ${theme.border} shadow-md`
          : 'bg-white border-2 border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs'
      }`}
    >
      {/* Accordion Trigger (Balanced Medium Height & Clean Typography) */}
      <button
        type="button"
        onClick={() => {
          if (isOpen) setShowAllServices(false);
          onToggle();
        }}
        className="relative w-full min-h-[102px] sm:min-h-[115px] flex items-center gap-4 px-5 sm:px-6 py-5 sm:py-6 text-left cursor-pointer select-none group"
      >
        {/* Modern Standalone Icon */}
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
          style={{
            color: isOpen ? '#ffffff' : category.color,
          }}
        >
          {resolveIcon(category.icon, 20)}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 pr-1">
          <h3
            className={`font-display font-bold uppercase tracking-tight text-[17px] sm:text-[18.5px] md:text-xl leading-snug transition-colors duration-150 ${
              isOpen ? 'text-white' : 'text-slate-950'
            }`}
          >
            {category.title}
          </h3>
          <p
            className={`text-[13.5px] sm:text-[14.5px] leading-relaxed font-body font-normal tracking-[0.015em] mt-1 transition-colors duration-150 ${
              isOpen ? 'text-white/95' : 'text-slate-700'
            }`}
          >
            {category.tagline}
          </p>
        </div>

        {/* Boxy Chevron Button */}
        <div
          className={`flex-shrink-0 w-8.5 h-8.5 rounded-[6px] flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? 'bg-white text-brand rotate-180 shadow-xs'
              : 'bg-brand text-white rotate-0 group-hover:bg-brand-dark'
          }`}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </div>
      </button>

      {/* Accordion Body (Ultra-Smooth Framer Motion) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.18, ease: 'easeOut' },
            }}
            className="overflow-hidden will-change-[height]"
          >
            <div className="px-5 sm:px-6 pt-1 pb-5.5 space-y-1.5 relative z-10">
              {/* Service tiles (Clean High-Performance Renders) */}
              <div className="space-y-1.5 pt-0.5">
                {initialServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-[6px] ${theme.tileBg} ${theme.tileHover} border ${theme.tileBorder} group transition-colors duration-150 cursor-pointer text-left`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-1 h-3.5 rounded-[1px] flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: theme.bulletColor }}
                      />
                      <span className="text-[13.5px] sm:text-sm font-semibold text-white transition-colors line-clamp-1">
                        {service.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {service.technologies && service.technologies.length > 0 && (
                        <div className="hidden xs:flex items-center gap-1">
                          {service.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 rounded-[3px] text-[9px] font-mono font-medium bg-white/10 text-white/75 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <ChevronRight
                        size={14}
                        className="flex-shrink-0 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-150"
                      />
                    </div>
                  </Link>
                ))}

                {/* Smooth Animated Extra Services */}
                {hasMore && (
                  <AnimatePresence initial={false}>
                    {showAllServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.18, ease: 'easeOut' },
                        }}
                        className="overflow-hidden space-y-1.5"
                      >
                        {remainingServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-[6px] ${theme.tileBg} ${theme.tileHover} border ${theme.tileBorder} group transition-colors duration-150 cursor-pointer text-left`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className="w-1 h-3.5 rounded-[1px] flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: theme.bulletColor }}
                              />
                              <span className="text-[13.5px] sm:text-sm font-semibold text-white transition-colors line-clamp-1">
                                {service.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              {service.technologies && service.technologies.length > 0 && (
                                <div className="hidden xs:flex items-center gap-1">
                                  {service.technologies.slice(0, 2).map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-1.5 py-0.5 rounded-[3px] text-[9px] font-mono font-medium bg-white/10 text-white/75 border border-white/10"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <ChevronRight
                                size={14}
                                className="flex-shrink-0 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-150"
                              />
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>

              {/* + View All / Show Less Toggle Button */}
              {hasMore && (
                <div className="pt-1.5">
                  <button
                    type="button"
                    onClick={() => setShowAllServices(!showAllServices)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-[6px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-bold text-white/85 hover:text-white transition-colors cursor-pointer group"
                  >
                    <span>
                      {showAllServices
                        ? 'Show Less'
                        : `+ View All ${category.services.length} Services (${category.services.length - maxInitial} more)`}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${showAllServices ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                </div>
              )}

              {/* Quality & SLA Telemetry Bar */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[10.5px] font-semibold text-white/70 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-400 animate-pulse" />
                  {badgeInfo.metrics}
                </span>
                <span className="text-white/40 uppercase tracking-widest text-[9px] font-mono">
                  Enterprise Ready
                </span>
              </div>

              {/* CTA Button */}
              <div className="pt-1.5">
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-[6px] text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.ctaTextColor} ${theme.ctaBg} transition-colors duration-200 cursor-pointer group`}
                >
                  <span>Discuss Your {category.shortTitle} Project</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Desktop Accordion Item ─── */
function DesktopAccordionItem({
  category,
  isOpen,
  onToggle,
}: {
  category: CategoryItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const theme = mobileThemes[category.id] ?? mobileThemes.software;
  const badgeInfo = enterpriseBadges[category.id] ?? enterpriseBadges.software;
  const [showAllServices, setShowAllServices] = useState(false);

  const maxInitial = 6;
  const hasMore = category.services.length > maxInitial;
  const displayedServices = showAllServices ? category.services : category.services.slice(0, maxInitial);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      className={`relative rounded-[8px] sm:rounded-[10px] overflow-hidden transition-all duration-300 ${
        isOpen
          ? `col-span-2 ${theme.bgGradient} ring-1 ${theme.border} shadow-lg`
          : 'bg-white border-2 border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
      }`}
    >
      {/* Accordion Trigger (Taller Spacious Height & Clean Typography) */}
      <button
        type="button"
        onClick={() => {
          if (isOpen) setShowAllServices(false);
          onToggle();
        }}
        className={`relative w-full min-h-[115px] lg:min-h-[128px] flex items-center gap-5 px-6 lg:px-9 py-7 lg:py-8 text-left cursor-pointer select-none group transition-colors duration-200 ${
          isOpen ? 'text-white' : 'text-slate-950'
        }`}
      >
        {/* Category Icon */}
        <div
          className={`w-12 h-12 lg:w-13 lg:h-13 rounded-[6px] flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 ${
            isOpen ? 'text-white' : ''
          }`}
          style={{ color: isOpen ? '#ffffff' : category.color }}
        >
          {resolveIcon(category.icon, 22)}
        </div>

        {/* Title & Tagline */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold uppercase tracking-tight text-lg lg:text-xl xl:text-[22px] leading-snug transition-colors duration-150">
            {category.title}
          </h3>
          <p
            className={`text-[15px] lg:text-[16px] leading-relaxed font-body font-normal tracking-[0.018em] mt-1.5 transition-colors duration-150 ${
              isOpen ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            {category.tagline}
          </p>
        </div>

        {/* Service Count Badge — hidden on PC view per design spec */ }

        {/* Chevron */}
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-[6px] flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? 'bg-white text-brand rotate-180 shadow-xs'
              : 'bg-brand text-white rotate-0 group-hover:bg-brand-dark'
          }`}
        >
          <ChevronDown size={17} strokeWidth={2.5} />
        </div>
      </button>

      {/* Accordion Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="desktop-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2, ease: 'easeOut' },
            }}
            className="overflow-hidden will-change-[height]"
          >
            <div className="relative px-6 lg:px-8 pt-1 pb-6 lg:pb-8">
              {/* Large decorative background icon */}
              <DesktopBgIcon categoryId={category.id} />

              {/* Service tiles grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2">
                {displayedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-[6px] ${theme.tileBg} ${theme.tileHover} border ${theme.tileBorder} group/tile transition-colors duration-150 cursor-pointer text-left`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-1 h-4 rounded-sm flex-shrink-0 opacity-80 group-hover/tile:opacity-100 transition-opacity"
                        style={{ backgroundColor: theme.bulletColor }}
                      />
                      <span className="text-sm font-bold text-white transition-colors line-clamp-1">
                        {service.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {service.technologies && service.technologies.length > 0 && (
                        <div className="hidden md:flex items-center gap-1">
                          {service.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 rounded-[3px] text-[9px] font-mono font-medium bg-white/10 text-white/75 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <ChevronRight
                        size={14}
                        className="flex-shrink-0 text-white/40 group-hover/tile:text-white group-hover/tile:translate-x-0.5 transition-transform duration-150"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              {/* + View All / Show Less */}
              {hasMore && (
                <div className="relative z-10 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAllServices(!showAllServices)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-[6px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-bold text-white/85 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>
                      {showAllServices
                        ? 'Show Less'
                        : `+ View All ${category.services.length} Services (${category.services.length - maxInitial} more)`}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${showAllServices ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                </div>
              )}

              {/* Quality & SLA Bar */}
              <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-white/70 px-1">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-400 animate-pulse" />
                  {badgeInfo.metrics}
                </span>
                <span className="text-white/40 uppercase tracking-widest text-[10px] font-mono">
                  Enterprise Ready
                </span>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 pt-3">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2.5 py-3 px-6 rounded-[6px] text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.ctaTextColor} ${theme.ctaBg} transition-all duration-200 cursor-pointer group/cta hover:shadow-md`}
                >
                  <span>Discuss Your {category.shortTitle} Project</span>
                  <ArrowUpRight size={15} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ─── MAIN SERVICES SECTION ─── */
export default function Services() {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [openMobileId, setOpenMobileId] = useState<string>('');
  const [openDesktopId, setOpenDesktopId] = useState<string>('');

  useEffect(() => {
    fetch('/api/services')
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  const toggleMobile = (id: string) => {
    setOpenMobileId((prev) => (prev === id ? '' : id));
  };

  const toggleDesktop = (id: string) => {
    setOpenDesktopId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="services" className="relative pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-10 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 geo-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-brand/[0.02] rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[400px] h-[400px] bg-amber-500/[0.015] rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-slate-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 mb-3.5 shadow-2xs">
                <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-gray-950 leading-[1.1] uppercase">
                Comprehensive Solutions,{' '}
                <span className="text-brand">
                  One Partner
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-slate-200 flex flex-col justify-end"
            >
              <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed mb-4">
                From high-concurrency custom architectures to full-funnel growth systems — we build scalable digital backbones that outperform conventional solutions.
              </p>
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  <span>Explore All Services</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP VIEW: Accordion Cards (hidden on mobile/tablet) */}
        <div className="hidden lg:grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <DesktopAccordionItem
              key={cat.id}
              category={cat}
              isOpen={openDesktopId === cat.id}
              onToggle={() => toggleDesktop(cat.id)}
            />
          ))}

          {/* CTA Card — fills the 6th grid spot */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <div
              className="group relative flex flex-col items-center justify-center text-center h-full min-h-[128px] rounded-[3px] overflow-hidden bg-brand p-6 lg:p-8 hover:bg-brand-dark transition-all duration-300"
            >
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20 rounded-tl-[3px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/20 rounded-br-[3px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-accent text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Free Consultation
                </span>
                <h3 className="font-display font-bold text-[17px] sm:text-lg leading-snug text-white uppercase tracking-tight">
                  Get a Free Technical
                  Consultation
                </h3>
              </div>

              <div className="relative z-10 mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-[11px] font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-navy transition-all duration-200 hover:shadow-md cursor-pointer group/btn"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight
                    size={13}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE VIEW: Dedicated Category-Themed Accordion (< 1024px) */}
        <div className="lg:hidden flex flex-col gap-3">
          {categories.map((cat, i) => (
            <MobileAccordionItem
              key={cat.id}
              category={cat}
              isOpen={openMobileId === cat.id}
              onToggle={() => toggleMobile(cat.id)}
              index={i}
            />
          ))}

          {/* Mobile Bottom Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4 text-center"
          >
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-[4px] text-xs sm:text-sm font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Get a Free Technical Consultation
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
