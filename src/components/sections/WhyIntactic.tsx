'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Shield, Globe, Zap, TrendingUp, Users, Rocket, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';

/* ─── DATA ─── */

interface Metric {
  value: string;
  suffix: string;
  label: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  accent: string; // gradient class for each card
}

const METRICS: Metric[] = [
  {
    value: '70',
    suffix: '+',
    label: 'Projects Delivered',
    title: 'Proven Delivery Engine',
    description: 'Enterprise platforms, SaaS products, and mission-critical systems — shipped on time, every time.',
    Icon: Rocket,
    accent: 'from-brand/8 to-transparent',
  },
  {
    value: '98',
    suffix: '%',
    label: 'Client Retention',
    title: 'Partnership-First Model',
    description: 'We build long-term relationships. Our clients stay because measurable results build trust.',
    Icon: Users,
    accent: 'from-emerald-500/8 to-transparent',
  },
  {
    value: '40',
    suffix: '+',
    label: 'Countries Served',
    title: 'Global Engineering Reach',
    description: 'Distributed delivery across time zones with local presence — for enterprises that operate without borders.',
    Icon: Globe,
    accent: 'from-amber-500/8 to-transparent',
  },
  {
    value: '3',
    suffix: 'x',
    label: 'Faster Time-to-Market',
    title: 'Accelerated Delivery',
    description: 'Modern architectures and agile processes that compress timelines without cutting corners.',
    Icon: TrendingUp,
    accent: 'from-violet-500/8 to-transparent',
  },
];

const TRUST_SIGNALS = [
  { icon: Shield, label: '100% IP Protection' },
  { icon: Globe, label: 'Global Delivery Model' },
  { icon: Zap, label: 'Rapid Deployment Cycles' },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

/* ─── ANIMATED COUNTER ─── */

function AnimatedNumber({ value, suffix, inView }: { value: string; suffix: string; inView: boolean }) {
  const numericPart = parseInt(value, 10);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(numericPart)) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * numericPart));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, numericPart]);

  return (
    <span className='font-accent tabular-nums'>
      {display}{suffix}
    </span>
  );
}

/* ─── METRIC CARD ─── */

function MetricCard({ metric, index, inView }: { metric: Metric; index: number; inView: boolean }) {
  return (
    <motion.div
      className='group relative rounded-xl border border-slate-200/80 bg-white overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: easeOut }}
    >
      {/* Subtle gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${metric.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Top accent bar */}
      <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand via-brand/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />

      <div className='relative p-6 sm:p-7 lg:p-8 flex flex-col h-full'>
        {/* Top row: Icon + Arrow */}
        <div className='flex items-center justify-between mb-5'>
          <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-slate-950 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300'>
            <metric.Icon size={22} strokeWidth={1.5} className='text-white' />
          </div>
          <div className='w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-brand group-hover:border-brand/30 group-hover:bg-brand/5 transition-all duration-300'>
            <ArrowUpRight size={15} />
          </div>
        </div>

        {/* Big number */}
        <div className='mb-1'>
          <span className='text-4xl sm:text-5xl lg:text-6xl font-accent text-slate-950 leading-none tracking-tight'>
            <AnimatedNumber value={metric.value} suffix={metric.suffix} inView={inView} />
          </span>
        </div>
        <div className='text-[11px] sm:text-[12px] font-mono font-bold uppercase tracking-[0.12em] text-brand mb-3'>
          {metric.label}
        </div>

        {/* Title + Description */}
        <h3 className='text-base sm:text-[17px] font-display font-bold text-slate-900 mb-2 tracking-tight leading-snug'>
          {metric.title}
        </h3>
        <p className='text-[13px] sm:text-[14px] text-slate-500 font-body leading-[1.7] flex-1'>
          {metric.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── SECTION ─── */

export default function WhyIntactic() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className='relative bg-[#f8fafc] overflow-hidden pt-20 sm:pt-28 pb-20 sm:pb-24'
    >
      {/* Top divider */}
      <div className='absolute top-0 inset-x-0 h-px bg-slate-200/70' />

      {/* Subtle ambient glow */}
      <div className='absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand/[0.03] rounded-full blur-[120px] pointer-events-none' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start'>

          {/* ── Left Column ── */}
          <motion.div
            className='lg:col-span-5 lg:sticky lg:top-32'
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 shadow-2xs mb-7'>
              <IntacticBadgeIcon className='w-3.5 h-3.5 shrink-0' />
              <span className='text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker'>
                Why Intactic
              </span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-slate-950 leading-[1.1]'>
              Engineering Excellence That{' '}
              <span className='text-brand'>Drives Results.</span>
            </h2>

            <div className='mt-5 mb-6 w-10 h-[3px] bg-brand rounded-full' />

            <p className='text-[15px] sm:text-base text-slate-500 leading-[1.75] font-body max-w-lg mb-4'>
              We don&apos;t just write code — we engineer business outcomes. Every project
              is a strategic partnership built on technical depth, transparent communication,
              and an obsessive focus on quality.
            </p>

            <p className='text-[15px] sm:text-base text-slate-400 leading-[1.75] font-body max-w-lg mb-8'>
              Our clients have relied on us for over 15 years to deliver systems that
              scale, perform, and generate measurable ROI.
            </p>

            <Link
              href='/contact'
              className='inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-brand text-white text-[13px] font-bold uppercase tracking-[0.08em] hover:bg-brand-dark transition-all duration-200 shadow-sm hover:shadow-lg group'
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} className='group-hover:translate-x-0.5 transition-transform' />
            </Link>

            {/* Inline stat callout */}
            <div className='mt-10 pt-7 border-t border-slate-200/80 grid grid-cols-2 gap-6'>
              <div>
                <div className='font-accent text-2xl sm:text-3xl text-slate-900 tracking-tight leading-none'>
                  50<span className='text-brand'>+</span>
                </div>
                <div className='text-[11px] font-mono text-slate-400 uppercase tracking-[0.1em] mt-1.5'>
                  Enterprise Clients
                </div>
              </div>
              <div>
                <div className='font-accent text-2xl sm:text-3xl text-slate-900 tracking-tight leading-none'>
                  12<span className='text-brand'>+</span>
                </div>
                <div className='text-[11px] font-mono text-slate-400 uppercase tracking-[0.1em] mt-1.5'>
                  Industries Served
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Metric Cards Grid ── */}
          <div className='lg:col-span-7'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
              {METRICS.map((metric, i) => (
                <MetricCard
                  key={metric.title}
                  metric={metric}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>

            {/* Trust signals below the grid */}
            <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 px-1'>
              {TRUST_SIGNALS.map((signal) => (
                <div key={signal.label} className='flex items-center gap-2'>
                  <div className='w-7 h-7 rounded-md bg-brand/5 border border-brand/10 flex items-center justify-center'>
                    <signal.icon size={13} strokeWidth={1.8} className='text-brand/70' />
                  </div>
                  <span className='text-[11.5px] font-semibold text-slate-500'>
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
