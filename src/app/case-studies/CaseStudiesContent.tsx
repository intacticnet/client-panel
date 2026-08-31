'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';
import { motion } from 'framer-motion';
import { caseStudiesData, getTechLogo } from '@/data/caseStudies';
import {
  ChevronRight,
  ShieldCheck,
  Search,
  CheckCircle2,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const industries = [
  'All Industries',
  'Fintech & Banking',
  'Logistics & Supply Chain',
  'Healthcare & Biotech',
  'Enterprise SaaS',
  'Defence & Security',
];

export default function CaseStudiesContent() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCases = caseStudiesData.filter((cs) => {
    const matchesIndustry =
      selectedIndustry === 'All Industries' || cs.clientIndustry === selectedIndustry;
    const matchesSearch =
      searchQuery === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  return (
    <PageLayout
      badge="PROVEN OUTCOMES • ARCHITECTURE BLUEPRINTS"
      title="Engineering Excellence Delivered in Production."
      subtitle="Detailed architectural breakdowns and real production metrics across banking, autonomous logistics, healthcare, and high-frequency systems."
    >
      {/* ── Key Impact Stats Banner ── */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            $4.2B+
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Daily Volume Handled
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Zero transactional loss</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            99.999%
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Uptime SLA
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Across multi-region cloud</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            3.1M+
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Active Users
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Supported simultaneously</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            100%
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Security Compliance
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">SOC-2, HIPAA, ISO-27001</div>
        </div>
      </section>

      {/* ── Search & Filter Controls ── */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          {/* Industry Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-[6px] border border-slate-200/80">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search stack, client, metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-[5px] border border-slate-200 bg-white text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand"
            />
          </div>
        </div>
      </section>

      {/* ── Case Studies List ── */}
      <section className="space-y-8 mb-16">
        {filteredCases.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06, ease }}
          >
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group block rounded-2xl border-2 border-slate-200 bg-slate-50/70 hover:bg-white hover:border-brand/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Visual & Metrics */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#060e1a] text-white relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={cs.heroImage}
                      alt={cs.title}
                      loading="lazy" decoding="async"
                      className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/80 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-xs">
                        {cs.clientIndustry}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cs.clientLocation}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight group-hover:text-brand-light transition-colors">
                      {cs.client}
                    </h3>
                  </div>

                  {/* Impact metrics row */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2">
                    {cs.impactMetrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-xl font-mono font-extrabold text-accent">
                          {m.metric}
                        </div>
                        <div className="text-[10px] font-bold uppercase text-slate-300 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug group-hover:text-brand transition-colors mb-3">
                      {cs.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body mb-5">
                      {cs.summary}
                    </p>

                    <div className="space-y-2 mb-6">
                      {cs.architectureHighlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack with Real Logos */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        STACK:
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {cs.technologies.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-[11px] font-semibold text-slate-800 transition-colors shadow-2xs"
                          >
                            <img
                              src={getTechLogo(t)}
                              alt={t}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain flex-shrink-0"
                              loading="lazy" decoding="async"
                            />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:translate-x-1 transition-transform">
                      <span>Read Full Architecture Blueprint</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* ── Consultation Banner ── */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-accent text-[11px] font-mono font-bold tracking-wider uppercase mb-2">
            <CheckCircle2 size={13} className="text-accent" />
            <span>START YOUR TRANSFORMATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold">
            Ready to achieve comparable architectural milestones?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Book a confidential technical session with our principal systems engineers to discuss your architecture roadmap.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-7 py-3.5 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all flex-shrink-0 shadow-sm"
        >
          Schedule Technical Scoping
        </Link>
      </section>
    </PageLayout>
  );
}