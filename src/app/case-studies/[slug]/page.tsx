import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudiesData, getTechLogo } from '@/data/caseStudies';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Quote,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);
  if (!cs) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found. View all Intactic case studies.',
    };
  }
  return {
    title: `${cs.title} — ${cs.client}`,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} — ${cs.client} | Intactic`,
      description: cs.summary,
      url: `/case-studies/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  const nextCase =
    caseStudiesData[(caseStudiesData.findIndex((item) => item.slug === cs.slug) + 1) % caseStudiesData.length];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-brand selection:text-white">
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link href="/case-studies" className="hover:text-brand transition-colors">
              Case Studies
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {cs.client}
            </span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-xs">
                {cs.clientIndustry}
              </span>
              <span className="text-xs font-mono text-slate-500">{cs.clientLocation}</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-500">Timeline: {cs.timeline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
              {cs.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              {cs.summary}
            </p>
          </header>

          {/* Hero Media */}
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl bg-slate-900 border border-slate-200">
            <img
              src={cs.heroImage}
              alt={cs.title}
              loading="lazy" decoding="async"
              className="w-full h-auto max-h-[460px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                  Client Partner
                </span>
                <div className="text-xl font-extrabold">{cs.client}</div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-[5px] border border-white/20">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Production Verified</span>
              </div>
            </div>
          </div>

          {/* Key Impact Metrics Grid */}
          <section className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {cs.impactMetrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-brand font-mono tracking-tight">
                  {m.metric}
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {m.label}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Challenge & Solution Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-3 font-mono">
                <span>THE ARCHITECTURAL CHALLENGE</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
                {cs.challenge}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-3 font-mono">
                <Sparkles size={14} className="text-accent" />
                <span>THE INTACTIC SOLUTION</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
                {cs.solution}
              </p>
            </div>
          </section>

          {/* Architecture Highlights & Deliverables */}
          <section className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
                  <Layers size={15} />
                  <span>Architecture Deep-Dive</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {cs.architectureHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
                  <CheckCircle2 size={15} />
                  <span>Key Deliverables Shipped</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {cs.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack with Real Logos */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                PRODUCTION STACK:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {cs.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[5px] bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono font-semibold text-white transition-colors"
                  >
                    <img
                      src={getTechLogo(t)}
                      alt={t}
                      className="w-4 h-4 object-contain"
                      loading="lazy" decoding="async"
                    />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Quote */}
          {cs.testimonial && (
            <section className="mb-14 p-8 sm:p-10 rounded-2xl bg-white border-2 border-brand/20 shadow-sm relative">
              <Quote size={32} className="text-brand/20 absolute top-6 right-6" />
              <blockquote className="text-base sm:text-lg text-slate-900 font-medium italic leading-relaxed">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center">
                  {cs.testimonial.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">{cs.testimonial.author}</div>
                  <div className="text-xs text-slate-500">
                    {cs.testimonial.role}, {cs.testimonial.company}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Next Case Study Bar */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/case-studies"
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-brand transition-colors"
            >
              ← Back to All Case Studies
            </Link>

            <Link
              href={`/case-studies/${nextCase.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-xs"
            >
              <span>Next Case Study: {nextCase.client}</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
