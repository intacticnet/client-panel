'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { industriesData } from '@/data/industries';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';
import IndustryCardMotion from '@/components/industries/IndustryCardMotion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Individual, BG-Less, High-Grade Bold & Aggressive Vector Icons
 * Razor-sharp architectural geometry, thick vector paths, and high-impact silhouettes.
 */
function getIndustryIcon(iconName: string, className: string = 'w-10 h-10') {
  const map: Record<string, React.ReactNode> = {
    // Fintech & Digital Banking (Aggressive High-Throughput Ledger Temple)
    'landmark': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 20h20M2 10h20M12 2 2 7.5h20L12 2Z" />
        <path d="M5 10v10M9.5 10v10M14.5 10v10M19 10v10" />
        <path d="M12 11.5v7M9.5 15h5" strokeWidth={1.8} />
      </svg>
    ),
    // EdTech & Digital Learning (Aggressive Academic Matrix)
    'graduation-cap': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m2 9 10-5 10 5-10 5-10-5Z" />
        <path d="M6 11.5v6c0 1.5 2.7 3.5 6 3.5s6-2 6-3.5v-6" />
        <path d="M22 9v7.5M20 16.5l2 2 2-2" />
        <circle cx="12" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
    // E-Commerce & Retail (Aggressive Geometric Smart Checkout)
    'shopping-bag': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 3 2 7.5v12.5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.5L19 3H5Z" />
        <path d="M2 7.5h20" />
        <path d="M8 11.5a4 4 0 0 0 8 0" />
        <path d="m11 15 2 2 4-4" strokeWidth={2.2} />
      </svg>
    ),
    // Healthcare & Telemedicine (Aggressive Biometric Voltage Shield)
    'heart-pulse': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22S2 16.5 2 8.5a5.5 5.5 0 0 1 10-2.8 5.5 5.5 0 0 1 10 2.8c0 8-10 13.5-10 13.5Z" />
        <path d="M6.5 12h2.5l1.5-4 3 8 1.5-4h2.5" strokeWidth={2.4} strokeLinecap="square" />
      </svg>
    ),
    // Logistics & Supply Chain (Aggressive Heavy Cargo Transport)
    'truck': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M1 5h14v11H1zM15 9h4.5l3.5 3.5V16h-8V9z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="17.5" cy="18.5" r="2.5" />
        <path d="M8 18.5h7M4 9h6M4 12h4" />
      </svg>
    ),
    // DeepTech & AI (Aggressive Quantum Silicon Processor)
    'cpu': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.25" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        <path d="M12 9v6M9 12h6" strokeWidth={1.8} />
      </svg>
    ),
    // Startups & Scalable SaaS (Aggressive Hyper-Thrust Rocket)
    'rocket': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 16.5c-1.5 1.5-2 5.5-2 5.5s4-.5 5.5-2c1-.9 1-2.5 0-3.5s-2.6-1-3.5 0Z" />
        <path d="M12 15 9 12c4-6 7.5-9 13-10-1 5.5-4 9-10 13Z" />
        <path d="M9 12 4.5 7.5 7 5l4.5 4.5M12 15l4.5 4.5 2.5-2.5-4.5-4.5" />
        <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
    // Enterprise & PropTech (Aggressive Monolith Towers)
    'building-2': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 22V2h12v20" />
        <path d="M18 9h4v13h-4M2 22h20M6 14H2v8h4" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" strokeWidth={2.2} />
      </svg>
    ),
    // Manufacturing & Industry 4.0 (Aggressive Industrial Automation)
    'factory': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 20h20V9l-6 4V9l-6 4V4H2v16Z" />
        <path d="M6 8h2M6 12h2M6 16h2M18 14h1M18 17h1" strokeWidth={2.2} />
      </svg>
    ),
    // Media & Streaming (Aggressive Broadcast Visualizer)
    'tv': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="m17 2-5 5-5-5" />
        <path d="M7 16v-4M10 18v-8M14 18v-5M17 16v-2" strokeWidth={2.2} strokeLinecap="round" />
      </svg>
    ),
    // GovTech & Cybersecurity (Aggressive Heavy Cyber Aegis)
    'shield': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4.5 8-11.5V4.5l-8-3-8 3v6C4 17.5 12 22 12 22Z" />
        <path d="M12 7v8M8.5 11h7" strokeWidth={2.2} />
        <circle cx="12" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ),
    // Travel & Aviation (Aggressive Supersonic Interceptor)
    'plane': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 19 16 11l4-4c1.5-1.5 2-3 1.5-3.5s-2 0-3.5 1.5L14 9 6 7l-2 2 5.5 3L6 15.5 3 15l-1.5 1.5 3 2.5 2.5 3 1.5-1.5-.5-3 3.5-3.5 3 5.5 2-2Z" />
      </svg>
    ),
    // LegalTech & Compliance (Aggressive Razor Sovereign Scales)
    'scale': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v20M5 22h14M2 6h20" />
        <path d="m5 6-3 8h6L5 6ZM19 6l-3 8h6l-3-8Z" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
  };
  return map[iconName] ?? <Sparkles className={className} />;
}

/**
 * Distinct Complementary Watermark SVGs for Background Emblems
 * Provides a high-grade dual-layered visual story for each industry.
 */
function getIndustryWatermarkIcon(iconName: string, className: string = 'w-48 h-48') {
  const watermarkMap: Record<string, React.ReactNode> = {
    // Fintech -> Security Vault & Shield Grid
    'landmark': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="16" r="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4M12 4v2" />
      </svg>
    ),
    // EdTech -> Global Knowledge Globe Network
    'graduation-cap': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
    // E-Commerce -> High-Velocity Lightning & Checkout Mesh
    'shopping-bag': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    // Healthcare -> Biometric Cross & DNA Helix Shield
    'heart-pulse': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
      </svg>
    ),
    // Logistics -> Geospatial Radar & Compass Target
    'truck': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    // Manufacturing -> Industrial Gear Precision
    'factory': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    // Media & OTT -> Broadcast Wave Equalizer
    'tv': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 10a10 10 0 0 1 20 0M5 13a7 7 0 0 1 14 0M8 16a4 4 0 0 1 8 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
    // GovTech -> Sovereign Civic Pillar
    'shield': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
    // Travel -> Global Flight Orbit & Meridian
    'plane': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
    // LegalTech -> Encrypted Document Seal
    'scale': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    // SaaS/IT -> Multi-Tenant Cloud Cluster
    'cpu': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17.5 19.5h-11A4.5 4.5 0 0 1 2 15c0-2.19 1.57-4.02 3.66-4.42C6.31 7.22 9.38 5 13 5c3.87 0 7 3.13 7 7 0 .52-.06 1.03-.17 1.51A4.5 4.5 0 0 1 17.5 19.5z" />
      </svg>
    ),
    // Startups -> Hyper Orbit Launch Trajectory
    'rocket': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
    // PropTech -> 3D Blueprint Spatial Cube
    'building-2': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  };
  return watermarkMap[iconName] ?? getIndustryIcon(iconName, className);
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* ──────────────────────────────────────────────────────────────
   IndustryCard — Ultra-Aggressive Dark Strike Card (Custom Tint & Watermark)
   ────────────────────────────────────────────────────────────── */
function IndustryCard({
  ind, idx, hero = false,
}: {
  ind: typeof industriesData[number]; idx: number; hero?: boolean;
}) {
  const c = ind.accentColor;

  return (
    <motion.div
      variants={cardVariants}
      data-stack-card
      className={`industries-stack-card ${hero ? 'sm:col-span-2 lg:col-span-2' : ''}`}
    >
      <div className="industries-stack-inner sm:h-full">
        <Link
          href={`/industries/${ind.slug}`}
          style={{ '--fold-rim': `${c}8C` } as React.CSSProperties}
          className={`group relative flex flex-col justify-between h-full min-h-[185px] sm:min-h-[220px] lg:min-h-[235px] overflow-hidden transition-all duration-250 ease-out bg-[#020610] hover:-translate-y-[3px] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_48px_-8px_rgba(0,0,0,0.55)] ${
            hero ? 'rounded-[10px] sm:rounded-[12px]' : 'rounded-[8px] sm:rounded-[12px]'
          }`}
        >
        {/* Base dark tint using accent color — tuned darker for maximum text legibility */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 opacity-[0.13] group-hover:opacity-[0.22]" 
          style={{ backgroundColor: c }} 
        />

        {/* Ambient Radial Spotlight Aura in Top-Left */}
        <div
          className="absolute -top-16 -left-16 w-52 h-52 rounded-full blur-[45px] pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle, ${c}88 0%, transparent 70%)` }}
        />

        {/* Industry-Specific Kinetic SVG Topology Motion — GPU Composited & Ultralight */}
        <div className="absolute inset-0 opacity-25 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none">
          <IndustryCardMotion motionType={ind.motionType} />
        </div>

        {/* Subtle diagonal slash pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #fff 0px, #fff 1px,
              transparent 1px, transparent 8px
            )`,
          }}
        />

        {/* Distinct Complementary Watermark SVG Icon in Background */}
        <div 
          className="absolute top-1/2 -right-6 -translate-y-1/2 opacity-[0.09] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:opacity-[0.15]"
          style={{ color: c }}
        >
          {getIndustryWatermarkIcon(ind.iconName, 'w-44 h-44 sm:w-52 sm:h-52')}
        </div>

        {/* On hover — accent flood from top */}
        <div
          className="absolute top-0 left-0 right-0 h-0 group-hover:h-[100px] transition-all duration-300 ease-out pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${c}2A, transparent)`,
          }}
        />

        <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 lg:p-6.5">
          <div>
            {/* Icon row: Clean Standalone BGLESS White Icon */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div
                className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 text-white"
              >
                {getIndustryIcon(ind.iconName, 'w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9')}
              </div>
            </div>

            {/* HEADLINE — stark white, uniform big typography across all cards */}
            <h3
              className="font-display font-black uppercase leading-tight transition-colors duration-150 text-[18px] sm:text-[20px] lg:text-[22px] tracking-[0.015em]"
              style={{ color: '#ffffff' }}
            >
              {ind.name}
            </h3>

            {/* Description — crystal-clear readability on dark background;
                compact on mobile so each card stays short in the stacking deck */}
            <p className="mt-1.5 sm:mt-2 leading-[1.5] sm:leading-relaxed font-body font-normal text-slate-200 group-hover:text-white transition-colors duration-200 text-[13px] sm:text-[15px] lg:text-[15.5px] tracking-[0.016em]">
              {ind.cardDescription || ind.heroDescription}
            </p>
          </div>

          {/* BOTTOM — yellow learn more + high-visibility sharp divider */}
          <div
            className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 flex items-center justify-between border-t transition-colors duration-300 border-white/20 group-hover:border-white/40"
          >
            <span
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-[0.1em] transition-all duration-200 text-[#F5A623]"
            >
              <span>Learn More</span>
              <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1.5" />
            </span>
            <ArrowUpRight
              size={15}
              className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F5A623] opacity-80 group-hover:opacity-100"
            />
          </div>
        </div>
        </Link>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Industries Section
   ────────────────────────────────────────────────────────────── */
export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.industriesVisible = entry.isIntersecting ? 'true' : 'false';
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Mobile scroll-driven sticky stacking cards ─────────────
     ONLY the headline locks under the navbar (the eyebrow badge
     scrolls away in normal flow); each industry card sticks 14px
     lower than the previous one, later cards sliding over earlier
     ones — which scale down & dim as they cover. Each card carries
     an accent-tinted paper rim + crease shadow (CSS) so the stuck
     stack reads as a deck of FOLDED cards, not flat dark strips.
     On mobile the CTA lives BELOW the deck as a light banner in
     normal flow; afterwards the section releases into the next. */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639.98px)');
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>('[data-stack-card]')
    );
    const header = section.querySelector<HTMLElement>('[data-stack-header]');
    if (!header || cards.length === 0) return;

    const DECK_GAP = 14;  /* px each card sits lower in the stuck deck —
                             wide enough that every fold strip reads clearly */
    const TOP_GAP = 14;   /* breathing room below the stuck headline */

    let raf = 0;
    const update = () => {
      raf = 0;
      const nav = document.querySelector<HTMLElement>('.navbar-header');
      /* Live bottom edge — navbar shrinks when scrolled, so rect > offsetHeight */
      const navBottom = nav ? nav.getBoundingClientRect().bottom : 80;
      header.style.top = `${navBottom}px`;
      const baseTop = navBottom + header.offsetHeight + TOP_GAP;

      /* Visible deck only — the sm+ CTA grid card is display:none on mobile */
      const deck = cards
        .map((card) => ({
          card,
          inner: card.querySelector<HTMLElement>('.industries-stack-inner'),
        }))
        .filter(({ card }) => card.offsetWidth > 0);

      /* Arrival progress (0→1) of every card at its own deck slot —
         grows smoothly while the card slides up into the stack. */
      const arr = deck.map(({ card }, i) => {
        const slotTop = baseTop + i * DECK_GAP;
        const top = card.getBoundingClientRect().top;
        const cardH = card.offsetHeight || 1;
        return Math.min(1, Math.max(0, 1 - (top - slotTop) / cardH));
      });

      for (let i = 0; i < deck.length; i++) {
        const { card, inner } = deck[i];
        const cardTop = baseTop + i * DECK_GAP;
        card.style.top = `${cardTop}px`;

        if (!inner) continue;

        /* Depth = how many cards have arrived on top of this one.
           The deeper a card sits, the more it shrinks & dims — building
           a fanned, folded-deck silhouette instead of flat strips. */
        let depth = 0;
        for (let j = i + 1; j < deck.length; j++) depth += arr[j];

        /* The last card is never covered — keep it full */
        if (i === deck.length - 1 || depth <= 0.001) {
          inner.style.transform = '';
          inner.style.filter = '';
          continue;
        }

        const scale = (1 - 0.012 * Math.min(depth, 12)).toFixed(4);
        const bright = (1 - 0.03 * Math.min(depth, 10)).toFixed(3);
        inner.style.transform = `scale(${scale})`;
        inner.style.filter = `brightness(${bright})`;
      }
    };

    const schedule = () => {
      if (mq.matches && !raf) raf = requestAnimationFrame(update);
    };
    const clear = () => {
      cards.forEach((c) => { c.style.top = ''; });
      cards.forEach((c) => {
        const el = c.querySelector<HTMLElement>('.industries-stack-inner');
        if (el) { el.style.transform = ''; el.style.filter = ''; }
      });
    };
    const onChange = () => (mq.matches ? schedule() : clear());

    /* Navbar shrinks/grows on scroll state change — keep offsets in sync */
    const nav = document.querySelector<HTMLElement>('.navbar-header');
    const navObserver = nav ? new ResizeObserver(schedule) : null;
    if (navObserver && nav) navObserver.observe(nav);

    if (mq.matches) update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      mq.removeEventListener('change', onChange);
      if (navObserver) navObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
      clear();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      data-industries-visible="false"
      className="relative bg-slate-50 text-slate-900 py-20 sm:py-28 lg:py-32 overflow-x-clip border-t border-slate-200/80"
    >
      {/* Ambient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand/[0.012] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header — mobile: ancestors use display:contents so the
             sticky headline's containing block spans the whole section ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 max-sm:contents">
          <div className="max-w-2xl max-sm:contents">
            {/* Eyebrow badge — centered on mobile, left-aligned on sm+ */}
            <div className="flex justify-center sm:justify-start w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 mb-3.5 shadow-2xs">
                <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker">
                  Domain Expertise
                </span>
              </div>
            </div>
            {/* Mobile: ONLY the headline locks under the navbar while the deck
                stacks beneath. Clean cut — no border, no shadow under the stuck line. */}
            <div
              data-stack-header
              className="sticky top-14 z-30 sm:static -mx-4 px-4 py-3.5 sm:mx-0 sm:px-0 sm:py-0 bg-slate-50/95 backdrop-blur-md border-b border-slate-200/80 sm:border-none shadow-2xs sm:shadow-none transition-all duration-300"
            >
              <h2 className="text-[17px] xs:text-[18.5px] sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight leading-[1.15] flex items-center justify-center gap-2.5 sm:gap-0 sm:block text-slate-950 text-center sm:text-left">
                <span>YOUR <span className="text-brand">INDUSTRY</span></span>
                <span className="h-3.5 w-[1.5px] bg-slate-300 sm:hidden flex-shrink-0 mx-1" aria-hidden="true" />
                <span>OUR <span className="text-brand">EXPERTISE</span></span>
              </h2>
            </div>
            <p className="mt-4 mb-12 sm:mb-0 text-base sm:text-lg lg:text-[19px] text-slate-700 leading-relaxed font-body font-medium text-center sm:text-left">
              Deep sector knowledge, applied through modern technology across every industry we serve.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-bold uppercase tracking-[0.08em] text-navy bg-accent hover:bg-accent-light transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Discuss Your Industry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Industry Grid — mobile: sticky stacking deck / sm+: uniform professional grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-fr gap-4 sm:gap-5"
        >
          {industriesData.map((ind, idx) => (
            <IndustryCard
              key={ind.slug}
              ind={ind}
              idx={idx}
              hero={idx === 0}
            />
          ))}

          {/* sm+ only — dark CTA card completing the grid's final row into a
              perfectly balanced rectangle (4×4 on lg, full rows on sm/md).
              Mobile uses the light banner below the deck instead. */}
          <motion.div
            variants={cardVariants}
            data-stack-card
            className="industries-stack-card max-sm:hidden sm:col-span-2"
          >
            <div className="industries-stack-inner sm:h-full">
              <div className="group relative flex flex-col items-center justify-center h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[235px] overflow-hidden rounded-[8px] sm:rounded-[12px] bg-[#020610] px-6 py-9 sm:py-10 text-center shadow-[0_4px_16px_-4px_rgba(0,0,0,0.35)] hover:-translate-y-[3px] hover:shadow-[0_24px_48px_-8px_rgba(0,0,0,0.55)] transition-all duration-250 ease-out">
                {/* Ambient yellow spotlight aura */}
                <div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[60px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle, #F5A62366 0%, transparent 70%)' }}
                />
                {/* Watermark question emblem */}
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 opacity-[0.08] pointer-events-none text-[#F5A623] transition-transform duration-500 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-44 h-44 sm:w-52 sm:h-52"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.4-3 4" />
                    <circle cx="12" cy="17.6" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                {/* Subtle diagonal slash pattern overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.015]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      -45deg,
                      #fff 0px, #fff 1px,
                      transparent 1px, transparent 8px
                    )`,
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="font-display font-black uppercase leading-tight text-white text-[19px] sm:text-[24px] lg:text-[26px] tracking-[0.015em]">
                    Is your industry <span className="text-[#F5A623]">not listed here?</span>
                  </h3>
                  <p className="mt-2.5 max-w-md leading-relaxed font-body font-normal text-slate-200 text-[13.5px] sm:text-[15px] tracking-[0.016em]">
                    We engineer sovereign digital systems tailored to your regulatory framework, data sovereignty policies, and domain constraints.
                  </p>
                  <div className="mt-5 sm:mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#F5A623] px-7 py-3 sm:px-8 sm:py-3.5 text-[12.5px] sm:text-[14px] font-black uppercase tracking-[0.1em] text-slate-950 shadow-md hover:shadow-lg transition-all hover:bg-[#ffc44d] hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Let&apos;s Talk</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Mobile-only CTA finale — light banner in normal flow, waiting
             beneath the stacked deck. After the last industry card settles,
             scrolling releases the deck and this banner scrolls into view
             (sm+ shows the dark CTA grid card instead) ── */}
        <div className="mt-10 sm:hidden px-2 text-center">
          <h3 className="text-[21px] font-display font-black uppercase tracking-[0.015em] text-slate-950 leading-[1.12]">
            Is your industry <span className="text-brand">not listed here?</span>
          </h3>
          <p className="mt-2.5 mx-auto max-w-md text-[13.5px] leading-[1.55] text-slate-700 font-body font-normal tracking-[0.016em]">
            We engineer sovereign digital systems tailored to your regulatory framework, data sovereignty policies, and domain constraints.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#F5A623] px-8 py-3.5 text-[13px] font-black uppercase tracking-[0.1em] text-slate-950 shadow-md hover:shadow-lg transition-all hover:bg-[#ffc44d] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
