'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { insightsArticles } from '@/data/insights';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';
import {
  Clock,
  Calendar,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Insights() {
  const featured = insightsArticles.find((a) => a.featured) || insightsArticles[0];
  const sideArticles = insightsArticles.filter((a) => a.slug !== featured.slug).slice(0, 3);

  return (
    <section id="insights" className="relative bg-[#f8fafc] text-slate-900 py-20 sm:py-28 overflow-hidden border-t border-slate-200/80">
      {/* Ambient subtle architectural grid */}
      <div className="absolute inset-0 geo-grid opacity-[0.14] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand/5 border border-brand/15 mb-3.5 shadow-2xs">
              <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand eyebrow-kicker">
                Research &amp; Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-slate-950 leading-[1.1]">
              Engineering Perspectives &amp;{' '}
              <span className="text-brand">Industry Intelligence</span>.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-body leading-relaxed">
              Strategic frameworks, enterprise AI architectures, and technical deep-dives authored by our senior engineering leadership.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Explore All Insights</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Featured Editorial Layout: 1 Hero Card + 3 Stacked Rows ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="lg:col-span-7 flex"
          >
            <Link
              href={`/insights/${featured.slug}`}
              className="group relative w-full rounded-2xl border-2 border-slate-200/90 bg-white hover:border-brand/60 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(17,95,201,0.14)] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Thumbnail with Subtle Overlay */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-md">
                    {featured.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-accent text-slate-950 shadow-xs">
                    Featured Whitepaper
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400" />
                      {featured.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-400" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold font-display text-slate-950 group-hover:text-brand transition-colors leading-snug tracking-tight">
                    {featured.title}
                  </h3>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-brand group-hover:translate-x-1 transition-transform">
                    <span>Read Full Teardown</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Stacked 3 Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-between">
            {sideArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease }}
                className="flex-1 flex"
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="group relative p-4 sm:p-5 rounded-xl border border-slate-200/90 bg-white hover:border-brand/50 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex gap-3.5 sm:gap-4 items-start w-full justify-between h-full"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900 relative mt-0.5">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand">
                          {article.category}
                        </span>
                        <span className="text-slate-300 text-[10px]">•</span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {article.readTime}
                        </span>
                      </div>

                      <h4 className="text-[15px] sm:text-[16.5px] lg:text-[17px] font-extrabold font-display text-slate-950 group-hover:text-brand transition-colors leading-snug tracking-tight">
                        {article.title}
                      </h4>
                    </div>

                    <div className="mt-3.5 flex items-center justify-between text-[11px] text-slate-500 font-mono border-t border-slate-100/80 pt-2">
                      <span>{article.date}</span>
                      <span className="text-brand font-bold uppercase tracking-wider text-[10.5px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-mono">
                        <span>Read</span>
                        <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Corporate Executive CTA Bar ── */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-extrabold font-display text-slate-950">
              Looking for more technical whitepapers &amp; reports?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body leading-relaxed">
              Access all engineering frameworks and case studies on our insights portal.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] text-xs sm:text-sm font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all duration-200 shadow-xs hover:shadow-md group cursor-pointer flex-shrink-0"
          >
            <span>Explore All Research &amp; Insights</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
