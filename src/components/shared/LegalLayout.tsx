'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';
import { ChevronRight, Printer, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────
   Shared Types
───────────────────────────────────────────── */
export interface LegalMetaItem {
  label: string;
  value: string;
}

export interface LegalTocItem {
  id: string;
  number: string;
  title: string;
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  meta: LegalMetaItem[];
  toc: LegalTocItem[];
  children: React.ReactNode;
}

/* ─────────────────────────────────────────────
   LegalLayout — corporate dark hero + sticky
   scroll-spy TOC + print-ready content shell
───────────────────────────────────────────── */
export default function LegalLayout({
  badge,
  title,
  subtitle,
  meta,
  toc,
  children,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  /* Scroll-spy across registered sections */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-90px 0px -65% 0px', threshold: 0 }
    );

    toc.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileTocOpen(false);
    }
  };

  const activeIndex = toc.findIndex((s) => s.id === activeId);
  const progress = toc.length ? ((activeIndex + 1) / toc.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-brand selection:text-white">
      {/* ── Global Navbar ── */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* ── HERO — Corporate Deep Navy ── */}
      <section className="relative bg-[#070d19] overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20 print:hidden">
        <div className="absolute inset-0 geo-grid-dark opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d19] via-[#070d19]/95 to-[#070d19]" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-brand/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-8%] w-[420px] h-[420px] bg-[#F5A623]/[0.04] rounded-full blur-[140px] pointer-events-none" />

        {/* Floating geometric shapes — consistent with site-wide hero language */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute -top-16 right-[8%] w-60 h-60 lg:w-[300px] lg:h-[300px] text-brand/[0.03] animate-rotate-slow"
            viewBox="0 0 200 200"
            fill="none"
          >
            <polygon points="100,8 185,54 185,146 100,192 15,146 15,54" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <div className="absolute top-[32%] right-[14%] animate-float-medium" style={{ animationDelay: '1s' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <polygon points="18,3 34,33 2,33" stroke="#F5A623" strokeWidth="0.8" opacity="0.12" />
            </svg>
          </div>
          <div className="absolute bottom-[22%] left-[5%] animate-pulse-geo">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="35" stroke="#115fc9" strokeWidth="0.4" opacity="0.1" />
              <circle cx="40" cy="40" r="24" stroke="#115fc9" strokeWidth="0.3" opacity="0.08" strokeDasharray="3 3" className="animate-dash" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[13px] text-white/40 mb-7"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/25" />
            <span className="text-white/40">Legal</span>
            <ChevronRight size={13} className="text-white/25" />
            <span className="text-white/80 font-medium">{title}</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/[0.05] border border-white/10 backdrop-blur-sm mb-6"
          >
            <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" fill="#ffffff" />
            <span className="text-xs font-bold tracking-widest uppercase text-white eyebrow-kicker">
              {badge}
            </span>
          </motion.div>

          {/* Title + Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight font-display"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mt-5 max-w-2xl text-[15px] sm:text-lg text-white/55 leading-relaxed font-body"
          >
            {subtitle}
          </motion.p>

          {/* Decorative bar — full width, lomba */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-7 flex items-center gap-2 origin-left max-w-2xl"
          >
            <div className="h-[3px] flex-1 bg-gradient-to-r from-brand via-brand/60 to-transparent rounded-full" />
            <div className="h-[3px] w-8 bg-[#F5A623] rounded-full" />
          </motion.div>

          {/* Document metadata chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease }}
            className="mt-9 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl"
          >
            {meta.map((m) => (
              <div
                key={m.label}
                className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
              >
                <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/35 eyebrow-kicker mb-1">
                  {m.label}
                </p>
                <p className="text-[13px] sm:text-sm font-bold text-white/90 leading-snug font-display">
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <main className="flex-1 relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="lg:grid lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-12">
          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block print:hidden">
            <div className="sticky top-24">
              <div className="flex items-center gap-2.5 mb-4 px-1">
                <ShieldCheck size={15} className="text-brand" strokeWidth={2} />
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 eyebrow-kicker">
                  On This Page
                </p>
              </div>

              {/* Reading progress */}
              <div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-brand to-[#F5A623] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <nav aria-label="Table of contents" className="max-h-[calc(100vh-220px)] overflow-y-auto no-scrollbar">
                <ul className="space-y-0.5">
                  {toc.map((s) => {
                    const active = s.id === activeId;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className={`group w-full flex items-center gap-3 text-left py-2 pl-3 pr-2 rounded-lg border-l-2 transition-all duration-200 cursor-pointer ${
                            active
                              ? 'bg-brand/[0.06] border-brand text-brand'
                              : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
                          }`}
                        >
                          <span
                            className={`font-accent text-[11px] font-semibold tabular-nums transition-colors ${
                              active ? 'text-[#F5A623]' : 'text-slate-400 group-hover:text-slate-600'
                            }`}
                          >
                            {s.number}
                          </span>
                          <span className={`text-[12.5px] leading-snug font-medium ${active ? 'font-bold' : ''}`}>
                            {s.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main document column */}
          <div className="min-w-0">
            {/* Document toolbar — print */}
            <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200/80 print:hidden">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-brand/[0.07] border border-brand/15 flex items-center justify-center flex-shrink-0">
                  <IntacticBadgeIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-slate-800 font-display leading-tight truncate">{title}</p>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Intactic Group Ltd. — Official Legal Document
                  </p>
                </div>
              </div>
              <button
                onClick={() => window.print()}
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11.5px] font-bold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 hover:border-brand/40 hover:text-brand transition-all cursor-pointer shadow-xs"
              >
                <Printer size={13} strokeWidth={2.2} />
                <span className="hidden sm:inline">Print / PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            </div>

            {/* Mobile TOC (collapsible) */}
            <div className="lg:hidden mb-8 rounded-xl border border-slate-200/90 bg-white overflow-hidden print:hidden">
              <button
                onClick={() => setMobileTocOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3.5 cursor-pointer"
                aria-expanded={mobileTocOpen}
              >
                <span className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-brand" strokeWidth={2} />
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-slate-700 eyebrow-kicker">
                    Contents — {activeIndex !== -1 ? toc[activeIndex].number : '—'}
                  </span>
                </span>
                <ChevronRight
                  size={15}
                  className={`text-slate-400 transition-transform duration-300 ${mobileTocOpen ? 'rotate-90' : ''}`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  mobileTocOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="px-4 pb-3 max-h-72 overflow-y-auto custom-scrollbar">
                    {toc.map((s) => {
                      const active = s.id === activeId;
                      return (
                        <li key={s.id}>
                          <button
                            onClick={() => scrollTo(s.id)}
                            className={`w-full flex items-center gap-3 text-left py-2 px-2 rounded-md transition-colors cursor-pointer ${
                              active ? 'bg-brand/[0.07] text-brand' : 'text-slate-500 active:bg-slate-100'
                            }`}
                          >
                            <span className={`font-accent text-[11px] ${active ? 'text-[#F5A623]' : 'text-slate-400'}`}>
                              {s.number}
                            </span>
                            <span className="text-[13px] font-medium leading-snug">{s.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* The document body */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)] px-5 sm:px-8 lg:px-10 py-8 sm:py-12 print:border-0 print:shadow-none print:p-0"
            >
              {children}
            </motion.article>
          </div>
        </div>
      </main>

      {/* ── Global Footer ── */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LegalSection — numbered document section
───────────────────────────────────────────── */
export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-9 sm:pt-11 first:pt-0 border-t border-slate-100 first:border-t-0">
      <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
        <span className="flex-shrink-0 inline-flex items-center justify-center min-w-[38px] h-[38px] px-1.5 rounded-lg bg-brand/[0.07] border border-brand/[0.14] font-accent text-[15px] font-semibold text-brand tabular-nums">
          {number}
        </span>
        <h2 className="text-[19px] sm:text-[22px] font-bold text-slate-950 leading-tight tracking-tight font-display">
          {title}
        </h2>
      </div>
      <div className="text-[14.5px] sm:text-[15px] text-slate-600 leading-[1.85] space-y-4">{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   AtAGlance — executive summary stat cards
───────────────────────────────────────────── */
export interface GlanceItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}

export function AtAGlance({ items }: { items: GlanceItem[] }) {
  return (
    <div className="mb-11 sm:mb-13">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-8 h-[2px] bg-[#F5A623] rounded-full" />
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 eyebrow-kicker">
          Executive Summary — At a Glance
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {items.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06, ease }}
            className="p-4.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-brand/25 hover:bg-brand/[0.03] transition-colors duration-300"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-slate-200 text-brand mb-3 shadow-xs">
              {g.icon}
            </div>
            <p className="text-[9.5px] font-bold uppercase tracking-[0.15em] text-slate-400 eyebrow-kicker mb-1">
              {g.label}
            </p>
            <p className="text-[14.5px] font-bold text-slate-900 font-display leading-snug mb-0.5">{g.value}</p>
            <p className="text-[11.5px] text-slate-500 leading-snug">{g.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ContactPanel — legal / data contact card
───────────────────────────────────────────── */
export function ContactPanel({
  heading,
  intro,
  emails,
}: {
  heading: string;
  intro: string;
  emails: { label: string; email: string; note: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#070d19] text-white p-6 sm:p-9 mt-13 print:bg-white print:border print:border-slate-300">
      <div className="absolute inset-0 geo-grid-dark opacity-25 pointer-events-none" />
      <div className="absolute top-[-30%] right-[-10%] w-[300px] h-[300px] bg-brand/[0.12] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-[#F5A623] rounded-full" />
          <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#F5A623] eyebrow-kicker">
            Official Correspondence
          </p>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight mb-2">{heading}</h3>
        <p className="text-[13.5px] sm:text-sm text-white/55 leading-relaxed max-w-2xl mb-7">{intro}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
          {emails.map((e) => (
            <a
              key={e.email}
              href={`mailto:${e.email}`}
              className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.09] hover:border-[#F5A623]/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40 eyebrow-kicker mb-0.5">
                  {e.label}
                </p>
                <p className="text-[13.5px] font-bold text-white/90 truncate font-display">{e.email}</p>
                <p className="text-[11px] text-white/40 mt-0.5">{e.note}</p>
              </div>
              <ArrowRight
                size={15}
                className="flex-shrink-0 text-white/25 group-hover:text-[#F5A623] group-hover:translate-x-1 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7 pt-5 border-t border-white/[0.08] text-[12.5px] text-white/60">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Phone: <a href="tel:+8809678791213" className="text-white/90 font-semibold hover:text-[#F5A623] transition-colors">+880 9678 791213</a>
            <span className="text-white/35">(Office Hours)</span>
          </span>
          <span className="text-white/40">Road 2, Block A, Chandgao R/A, Chittagong, Bangladesh</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CrossLink — navigate to sibling legal page
───────────────────────────────────────────── */
export function CrossLink({
  href,
  kicker,
  title,
  desc,
  cta,
}: {
  href: string;
  kicker: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <div className="mt-12 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 print:hidden">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand/[0.07] border border-brand/15 flex items-center justify-center">
          <IntacticBadgeIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 eyebrow-kicker mb-1">{kicker}</p>
          <h3 className="text-[16px] sm:text-lg font-bold text-slate-900 font-display leading-snug">{title}</h3>
          <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed max-w-xl">{desc}</p>
        </div>
      </div>
      <Link
        href={href}
        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F5A623] hover:bg-[#ffc44d] text-[#0a1628] text-[12px] font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        {cta}
        <ArrowRight size={14} strokeWidth={2.5} />
      </Link>
    </div>
  );
}
