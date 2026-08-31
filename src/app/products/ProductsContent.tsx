'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';
import { motion } from 'framer-motion';
import { productsData, type Product } from '@/data/products';
import { getTechLogo } from '@/data/caseStudies';
import {
  Search,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const categories = [
  'All Products',
  'Workplace & Team SaaS',
  'Fintech & Global Payments',
  'Business Finance & Analytics',
  'DevOps & FinOps Platform',
  'Cybersecurity & Compliance',
];

export default function ProductsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All Products' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout
      badge="INTACTIC SOFTWARE SUITE • LIVE PRODUCTS"
      title="Software Products Built for Global Teams."
      subtitle="Explore our suite of live SaaS applications, payment gateways, and FinOps platforms built and maintained in-house by Intactic."
    >
      {/* ── High-Impact Stats Banner ── */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            14k+
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Active Teams
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Using our workplace tools</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            $180M+
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Processed Volume
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Across payment products</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">
            $4.8M+
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
            Cloud Costs Saved
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">For 500+ tech businesses</div>
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
      </section>

      {/* ── Search & Filter Controls ── */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-[6px] border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search stack, engines, latency..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-[5px] border border-slate-200 bg-white text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand"
            />
          </div>
        </div>
      </section>

      {/* ── Products List ── */}
      <section className="space-y-8 mb-16">
        {filteredProducts.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06, ease }}
          >
            <Link
              href={`/products/${p.slug}`}
              className="group block rounded-2xl border-2 border-slate-200 bg-slate-50/70 hover:bg-white hover:border-brand/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Visual, Status & KPIs */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#060e1a] text-white relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={p.heroImage}
                      alt={p.name}
                      loading="lazy" decoding="async"
                      className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/80 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-xs">
                        {p.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-mono font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                        {p.status}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight group-hover:text-brand-light transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">{p.tagline}</p>
                  </div>

                  {/* Benchmark metrics row */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2">
                    {p.metrics.map((m, mIdx) => (
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

                {/* Right Column: Features & Tech Stack */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body mb-5">
                      {p.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {p.keyFeatures.slice(0, 4).map((f, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded-lg bg-slate-50 border border-slate-200/70"
                        >
                          <div className="text-xs font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            <span>{f.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                            {f.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack with Real Logos */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        STACK:
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {p.techStack.map((t) => (
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

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      Model: {p.pricingModel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:translate-x-1 transition-transform">
                      <span>Explore Technical Docs &amp; Benchmarks</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-sm">No products in this category yet. <Link href="/contact" className="text-brand hover:underline">Contact us</Link> to learn about upcoming releases.</p>
          </div>
        )}
      </section>

      {/* ── Consultation & Private Sandbox Banner ── */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-accent text-[11px] font-mono font-bold tracking-wider uppercase mb-2">
            <CheckCircle2 size={13} className="text-accent" />
            <span>ENTERPRISE CO-DEVELOPMENT &amp; LICENSING</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold">
            Looking to license or customize our platforms for your stack?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            We provide full source licensing, custom proprietary model tuning, and dedicated 24/7 Tier-3 engineering support.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-7 py-3.5 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all flex-shrink-0 shadow-sm"
        >
          Schedule Enterprise Briefing
        </Link>
      </section>
    </PageLayout>
  );
}