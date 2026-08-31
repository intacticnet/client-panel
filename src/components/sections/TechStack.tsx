'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  ServerCog,
  Database as DatabaseIcon,
  CloudCog,
  BrainCircuit,
  ShoppingCart,
  GitBranch,
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiSvelte,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiExpo,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiGo,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiVercel,
  SiNginx,
  SiTensorflow,
  SiLangchain,
  SiHuggingface,
  SiShopify,
  SiWordpress,
  SiWoocommerce,
  SiStripe,
  SiGraphql,
  SiFigma,
  SiSentry,
  SiCypress,
} from 'react-icons/si';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';

/* ───────────────────────────────────────────────────────────────
   DATA
   ─────────────────────────────────────────────────────────────── */

interface TechItem {
  name: string;
  Icon: React.ElementType;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'React',        Icon: SiReact },
  { name: 'Next.js',      Icon: SiNextdotjs },
  { name: 'Vue.js',       Icon: SiVuedotjs },
  { name: 'TypeScript',   Icon: SiTypescript },
  { name: 'Tailwind',     Icon: SiTailwindcss },
  { name: 'Angular',      Icon: SiAngular },
  { name: 'Svelte',       Icon: SiSvelte },
  { name: 'Flutter',      Icon: SiFlutter },
  { name: 'Swift',        Icon: SiSwift },
  { name: 'Kotlin',       Icon: SiKotlin },
  { name: 'Expo',         Icon: SiExpo },
  { name: 'Node.js',      Icon: SiNodedotjs },
  { name: 'Python',       Icon: SiPython },
  { name: 'FastAPI',      Icon: SiFastapi },
  { name: 'Go',           Icon: SiGo },
  { name: 'Laravel',      Icon: SiLaravel },
  { name: 'PostgreSQL',   Icon: SiPostgresql },
  { name: 'MongoDB',      Icon: SiMongodb },
  { name: 'Redis',        Icon: SiRedis },
  { name: 'MySQL',        Icon: SiMysql },
  { name: 'Prisma',       Icon: SiPrisma },
  { name: 'Docker',       Icon: SiDocker },
  { name: 'Kubernetes',   Icon: SiKubernetes },
  { name: 'GCP',          Icon: SiGooglecloud },
  { name: 'Vercel',       Icon: SiVercel },
  { name: 'Nginx',        Icon: SiNginx },
  { name: 'TensorFlow',   Icon: SiTensorflow },
  { name: 'LangChain',    Icon: SiLangchain },
  { name: 'Hugging Face', Icon: SiHuggingface },
  { name: 'Shopify',      Icon: SiShopify },
  { name: 'WordPress',    Icon: SiWordpress },
  { name: 'WooCommerce',  Icon: SiWoocommerce },
  { name: 'Stripe',       Icon: SiStripe },
  { name: 'GraphQL',      Icon: SiGraphql },
  { name: 'Figma',        Icon: SiFigma },
  { name: 'Sentry',       Icon: SiSentry },
  { name: 'Cypress',      Icon: SiCypress },
];

/* 4 evenly distributed rows, alternating direction */
const MARQUEE_ROWS: {
  items: TechItem[];
  direction: 'left' | 'right';
  speed: number; /* seconds for one full loop */
}[] = [
  { items: TECH_ITEMS.slice(0, 10),  direction: 'left',  speed: 55 },
  { items: TECH_ITEMS.slice(10, 19), direction: 'right', speed: 50 },
  { items: TECH_ITEMS.slice(19, 28), direction: 'left',  speed: 60 },
  { items: TECH_ITEMS.slice(28, 37), direction: 'right', speed: 52 },
];

const CATEGORIES = [
  'Frontend', 'Mobile', 'Backend', 'Database',
  'Cloud & Infra', 'AI & Data', 'CMS & Commerce', 'DevOps & Tools',
] as const;

/* Professional industry icons per category (Lucide — uniform stroke, 2px) */
const CATEGORY_ICONS: Record<(typeof CATEGORIES)[number], React.ElementType> = {
  'Frontend': Monitor,
  'Mobile': Smartphone,
  'Backend': ServerCog,
  'Database': DatabaseIcon,
  'Cloud & Infra': CloudCog,
  'AI & Data': BrainCircuit,
  'CMS & Commerce': ShoppingCart,
  'DevOps & Tools': GitBranch,
};

const easeOut = [0.16, 1, 0.3, 1] as const;

/* ───────────────────────────────────────────────────────────────
   MARQUEE ROW — Pure CSS animation, no JS measurement needed
   ─────────────────────────────────────────────────────────────── */

function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: TechItem[];
  direction: 'left' | 'right';
  speed: number;
}) {
  const cssClass = direction === 'left' ? 'tech-marquee-left' : 'tech-marquee-right';
  const originalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = originalRef.current;
    if (!el || !el.parentElement) return;
    // Clone the original set for seamless CSS marquee loop
    const clone = el.cloneNode(true) as HTMLDivElement;
    el.parentElement.appendChild(clone);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex w-max ${cssClass}`}
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        <div ref={originalRef} className="flex shrink-0">
          {items.map((tech) => (
            <TechChip key={tech.name} tech={tech} />
          ))}
        </div>
        {/* Duplicate set injected via useEffect cloneNode */}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   SINGLE TECH CHIP
   ─────────────────────────────────────────────────────────────── */

function TechChip({ tech }: { tech: TechItem }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 shrink-0 select-none">
      <tech.Icon size={23} className="text-white shrink-0" />
      <span className="text-[14px] font-medium text-white/80 whitespace-nowrap tracking-wide">
        {tech.name}
      </span>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   SECTION
   ─────────────────────────────────────────────────────────────── */

export default function TechStack() {
  return (
    <section className="relative bg-white overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-24 shadow-none ring-0">
      {/* Faint top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header block ── */}
        <motion.div
          className="max-w-2xl mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 mb-6 shadow-2xs">
            <IntacticBadgeIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker">
              Technology Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-slate-950 leading-[1.1]">
            Technologies That Power{' '}
            <span className="text-brand">Innovation.</span>
          </h2>

          <div className="mt-5 mb-5 w-10 h-[3px] bg-brand rounded-full" />

          <p className="text-[15px] sm:text-base text-slate-500 leading-[1.7] font-body max-w-xl">
            A curated arsenal of modern technologies — battle-tested across
            enterprise platforms, high-growth startups, and mission-critical systems.
          </p>
        </motion.div>

        {/*  Category tags: Compact 2-column grid on mobile / auto-fit on desktop  */}
        <motion.div
          className="hidden sm:grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
        >
          {CATEGORIES.map((cat) => {
            const CatIcon = CATEGORY_ICONS[cat];
            return (
              <div
                key={cat}
                className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-slate-50 border border-slate-200 text-slate-700 text-[10.5px] font-mono font-semibold uppercase tracking-[0.1em]"
              >
                <CatIcon size={12} strokeWidth={2.2} className="shrink-0 text-slate-500" />
                <span className="truncate">{cat}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Marquee container: Full-width on Mobile, Boxed Container on PC (Desktop) ── */}
      <div className="w-full sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden w-full sm:rounded-[6px] border-y sm:border border-[#0e2a52] shadow-xl"
          style={{ backgroundColor: '#081d3a' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent z-30" />

          {/* Marquee rows */}
          <div className="relative z-10 py-8 sm:py-12 flex flex-col gap-4 sm:gap-6">
            {MARQUEE_ROWS.map((row, ri) => (
              <MarqueeRow
                key={ri}
                items={row.items}
                direction={row.direction}
                speed={row.speed}
              />
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent z-30" />
        </motion.div>
      </div>

    </section>
  );
}