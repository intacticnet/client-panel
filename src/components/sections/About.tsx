'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Cpu, Lock, Users, Award, GitMerge, TrendingUp,
} from 'lucide-react';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';

const easeQuint = [0.16, 1, 0.3, 1] as const;

/* ─── DATA ─── */

interface Capability {
  id: string;
  title: string;
  description: string;
  outcome: string;
  Icon: React.ElementType;
}

const CAPABILITIES: Capability[] = [
  {
    id: '01',
    title: 'AI-First Enterprise Architecture',
    description:
      'Autonomous neural workflows and vector RAG pipelines that turn static applications into self-optimizing operational assets.',
    outcome: '3.8x faster retrieval · 2.4M queries/day',
    Icon: Cpu,
  },
  {
    id: '02',
    title: 'Zero-Trust Security & Compliance',
    description:
      'ISO and SOC-2 Type II certified. Enterprise-grade security posture that opens doors to regulated procurement worldwide.',
    outcome: 'Zero critical findings across all audits',
    Icon: Lock,
  },
  {
    id: '03',
    title: '100% In-House Senior Squads',
    description:
      'Zero outsourcing. Zero information leakage. Direct access to principal engineers who own your architecture end to end.',
    outcome: 'Zero contractor turnover in 14-month builds',
    Icon: Users,
  },
  {
    id: '04',
    title: 'Battle-Tested Cloud Architecture',
    description:
      'Multi-region, zero-downtime deployments with Kubernetes canary releases and full OpenTelemetry observability.',
    outcome: 'Zero-downtime at high-concurrency scale',
    Icon: Award,
  },
  {
    id: '05',
    title: 'End-to-End Co-Ownership',
    description:
      'Single partner accountability from discovery through production. GitOps-driven IaC with 24/7 SLI/SLO monitoring.',
    outcome: 'Single-partner SLA · full lifecycle',
    Icon: GitMerge,
  },
  {
    id: '06',
    title: 'Quantifiable Business ROI',
    description:
      'Milestone-gated deliverables with FinOps cost engineering. Payments tied to verified outcomes, not arbitrary timelines.',
    outcome: 'Zero idle compute waste · serverless-first',
    Icon: TrendingUp,
  },
];

/* ─── CAPABILITY CARD ─── */

function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const { Icon, id, title, description, outcome } = capability;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: easeQuint }}
      className="group relative"
    >
      <div className="relative h-full rounded-[3px] bg-white border border-slate-200/70 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/30 hover:shadow-[0_8px_30px_-8px_rgba(17,95,201,0.10),0_1px_3px_rgba(0,0,0,0.04)]">
        {/* ── Top accent bar ── */}
        <div className="h-[3px] w-full bg-gradient-to-r from-brand/80 to-brand/30 transition-all duration-300 group-hover:from-brand group-hover:to-brand-light" />

        <div className="p-5 sm:p-6 lg:p-7">
          {/* ── Top row: number + icon ── */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <span className="font-accent text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-none text-slate-200/80 select-none -mt-0.5 transition-colors duration-300 group-hover:text-brand/20">
              {id}
            </span>
            <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] bg-brand/[0.04] border border-brand/[0.08] flex items-center justify-center transition-all duration-300 group-hover:bg-brand/[0.08] group-hover:border-brand/20 group-hover:scale-105">
              <Icon size={18} strokeWidth={1.5} className="text-brand/60 group-hover:text-brand transition-colors duration-300" />
            </div>
          </div>

          {/* ── Title ── */}
          <h3 className="font-display font-bold text-[15px] sm:text-[15.5px] lg:text-base text-slate-900 leading-snug tracking-tight mb-2 sm:mb-2.5 transition-colors duration-300 group-hover:text-brand">
            {title}
          </h3>

          {/* ── Description ── */}
          <p className="text-[13px] sm:text-[13.5px] text-slate-500 font-body leading-[1.75] mb-5 sm:mb-6">
            {description}
          </p>

          {/* ── Outcome metrics bar ── */}
          <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 group-hover:border-brand/10 transition-colors duration-300">
            <span className="shrink-0 w-1.5 h-1.5 rounded-[1px] bg-emerald-500/80 group-hover:bg-emerald-500 transition-colors duration-300" />
            <p className="text-[11px] sm:text-[11.5px] font-body font-semibold text-slate-400 tracking-wide group-hover:text-slate-500 transition-colors duration-300">
              {outcome}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── SECTION ─── */

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-white overflow-hidden pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: easeQuint }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-brand/5 border border-brand/15 shadow-2xs mb-6 sm:mb-7">
              <IntacticBadgeIcon className="w-3.5 h-3.5 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker">
                Our Capabilities
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold font-display uppercase tracking-tight text-slate-950 leading-[1.1]">
              Built for businesses that refuse to{' '}
              <span className="text-brand">settle.</span>
            </h2>

            <div className="mt-5 mb-6 w-10 h-[3px] bg-brand rounded-full" />

            <p className="text-[15px] sm:text-base text-slate-500 leading-[1.75] font-body max-w-lg mb-8">
              We architect digital ecosystems that compound growth and create
              defensible advantage — engineered by ISO-certified in-house
              senior squads.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[3px] bg-brand text-white text-[13px] font-bold uppercase tracking-[0.08em] hover:bg-brand-dark transition-all duration-200 shadow-sm hover:shadow-lg group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* ── RIGHT COLUMN: Capability Cards ── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-[14px]">
            {CAPABILITIES.map((cap, i) => (
              <CapabilityCard key={cap.id} capability={cap} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
