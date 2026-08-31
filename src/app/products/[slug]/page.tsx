import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { getTechLogo } from '@/data/caseStudies';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import {
  ChevronRight,
  Check,
  ExternalLink,
  Users,
  ShieldCheck,
  Globe,
  ArrowRight,
  Lock,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product page could not be found. Explore Intactic products.',
    };
  }
  return {
    title: product.name,
    description: product.tagline || product.summary,
    openGraph: {
      title: `${product.name} | Intactic`,
      description: product.tagline || product.summary,
      url: `/products/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const nextProduct =
    productsData[(productsData.findIndex((item) => item.slug === product.slug) + 1) % productsData.length];

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
            <Link href="/products" className="hover:text-brand transition-colors">
              Products
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>

          {/* ── 1. Page Header ── */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-2.5 py-1 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-xs">
                {product.category}
              </span>
              <span className="px-2.5 py-1 rounded-[4px] text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700">
                {product.status}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Release {product.version}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
                  {product.name}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-3xl">
                  {product.tagline}
                </p>
              </div>

              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 inline-flex items-center justify-center gap-2 px-6 rounded-[4px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-xs flex-shrink-0 cursor-pointer active:scale-[0.98]"
                >
                  <span>VISIT LIVE PLATFORM</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </header>

          {/* ── 2. Pristine Standalone Product Image (No Text Overlay on Picture) ── */}
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-sm bg-white border border-slate-200/90">
            <img
              src={product.heroImage}
              alt={product.name}
              loading="lazy" decoding="async"
              className="w-full h-auto object-cover object-top block"
            />
          </div>

          {/* ── 3. Executive Benchmark Metrics Grid ── */}
          <section className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-brand font-mono tracking-tight">
                  {m.metric}
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                    {m.label}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* ── 4. Executive Overview & Mission ── */}
          <section className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-2xs mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand mb-3">
              EXECUTIVE PLATFORM OVERVIEW
            </div>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
              {product.overview}
            </p>
          </section>

          {/* ── 5. The Problem & Solution Breakdown ── */}
          {(product.problemStatement || product.solutionOverview) && (
            <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] text-[11px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 mb-4">
                  THE CHALLENGE &amp; PROBLEM SOLVED
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-3.5 leading-snug">
                  Why Traditional Systems Fall Short
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
                  {product.problemStatement}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-emerald-100 shadow-2xs">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
                  ENGINEERED SOLUTION &amp; INNOVATION
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-3.5 leading-snug">
                  How {product.name} Solves It
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
                  {product.solutionOverview}
                </p>
              </div>
            </section>
          )}

          {/* ── 6. Who Benefits (Target Audience & Value Realization) ── */}
          {product.targetAudience && product.targetAudience.length > 0 && (
            <section className="mb-14">
              <div className="mb-6">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand mb-1">
                  TARGET AUDIENCE &amp; BENEFICIARIES
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Who Benefits from {product.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {product.targetAudience.map((audience, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                          {audience.role}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-brand bg-brand/5 px-2.5 py-0.5 rounded-[4px]">
                          Verified Impact
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                        {audience.benefit}
                      </h4>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-body">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── 7. Key Features & Operational Capabilities ── */}
          <section className="mb-14">
            <div className="mb-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand mb-1">
                SYSTEM CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Core Feature Breakdown
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {product.keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-brand/40 transition-colors"
                >
                  <div className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-[2px] bg-brand flex-shrink-0" />
                    <span>{f.title}</span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-body">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 8. Architecture Highlights & Tech Stack ── */}
          <section className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-xl mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
              ENGINEERING SPECIFICATIONS &amp; ARCHITECTURE
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 mb-8">
              {product.architectureHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-accent mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            {/* Core Tech Stack */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                CORE PRODUCTION STACK:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {product.techStack.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono font-semibold text-white transition-colors"
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

          {/* ── 9. Vision & Roadmap ── */}
          {product.visionAndRoadmap && (
            <section className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-2xs mb-14">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand mb-2">
                STRATEGIC ROADMAP &amp; PRODUCT VISION
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-3">
                Long-Term Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body mb-6">
                {product.visionAndRoadmap.vision}
              </p>

              {product.visionAndRoadmap.roadmapHighlights && (
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    PLANNED MILESTONES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.visionAndRoadmap.roadmapHighlights.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-[6px] bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium flex items-start gap-2.5"
                      >
                        <Check size={15} className="text-brand flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ── 10. Product Access / Enterprise CTA Banner ── */}
          <section className="p-8 sm:p-10 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
            <div>
              <span className="px-2.5 py-1 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-accent border border-white/10">
                ENTERPRISE CO-DEVELOPMENT &amp; ACCESS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-3">
                Deploy or License {product.name} for Your Stack
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-300 mt-1 max-w-xl leading-relaxed">
                We provide private cloud isolation, source-code licensing, and dedicated 24/7 Tier-3 engineering support for enterprise partners.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 inline-flex items-center justify-center gap-2 px-6 rounded-[4px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-xs cursor-pointer"
                >
                  <span>VISIT PLATFORM</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <Link
                href="/contact"
                className="h-11 inline-flex items-center justify-center gap-2 px-6 rounded-[4px] text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-xs cursor-pointer"
              >
                <span>CONTACT SQUAD</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </section>

          {/* ── 11. Back Navigation ── */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-brand transition-colors"
            >
              ← Back to All Products
            </Link>

            {nextProduct && (
              <Link
                href={`/products/${nextProduct.slug}`}
                className="h-10 inline-flex items-center gap-2 px-5 rounded-[4px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-xs"
              >
                <span>Next Platform: {nextProduct.name}</span>
                <ChevronRight size={14} />
              </Link>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

