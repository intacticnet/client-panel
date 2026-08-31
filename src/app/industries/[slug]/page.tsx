import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industriesData, getIndustryBySlug } from '@/data/industries';
import { getTechLogo } from '@/data/caseStudies';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import {
  ChevronRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Landmark,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  Truck,
  Factory,
  Tv,
  Shield,
  Plane,
  Scale,
  Rocket,
  Building2,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) {
    return {
      title: 'Industry Not Found',
      description: 'The requested industry page could not be found. Explore all industries Intactic serves.',
    };
  }
  return {
    title: ind.name,
    description: ind.tagline || ind.heroDescription,
    openGraph: {
      title: `${ind.name} | Intactic`,
      description: ind.tagline || ind.heroDescription,
      url: `/industries/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

function getIndustryIcon(iconName: string, className: string = 'w-6 h-6') {
  switch (iconName) {
    case 'landmark':
      return <Landmark className={className} />;
    case 'graduation-cap':
      return <GraduationCap className={className} />;
    case 'shopping-bag':
      return <ShoppingBag className={className} />;
    case 'heart-pulse':
      return <HeartPulse className={className} />;
    case 'truck':
      return <Truck className={className} />;
    case 'factory':
      return <Factory className={className} />;
    case 'tv':
      return <Tv className={className} />;
    case 'shield':
      return <Shield className={className} />;
    case 'plane':
      return <Plane className={className} />;
    case 'scale':
      return <Scale className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'rocket':
      return <Rocket className={className} />;
    case 'building-2':
      return <Building2 className={className} />;
    default:
      return <Layers className={className} />;
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const nextIndustry =
    industriesData[(industriesData.findIndex((item) => item.slug === industry.slug) + 1) % industriesData.length];

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
            <Link href="/industries" className="hover:text-brand transition-colors">
              Industries
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none">
              {industry.name}
            </span>
          </nav>

          {/* ── Top Hero Header Frame ── */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                {getIndustryIcon(industry.iconName, 'w-3.5 h-3.5')}
                <span>{industry.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Enterprise Active Solution</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
              {industry.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-brand font-semibold leading-relaxed">
              {industry.tagline}
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              {industry.heroDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Featured Benchmark
                </div>
                <div className="text-3xl font-extrabold text-slate-950 font-mono mt-0.5">
                  {industry.featuredMetric.value}
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  {industry.featuredMetric.label}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Scope This Industry Project</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>
          </header>

          {/* ── Key Architectural Highlights ── */}
          <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-brand" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Industry Capabilities &amp; Highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industry.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4 Tailored Enterprise Solutions ── */}
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand" />
              <span>Core Engineered Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {industry.coreSolutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand/40 transition-colors"
                >
                  <div className="text-xs font-mono font-bold text-brand mb-1.5">
                    Solution 0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Regulatory Compliance & Standards ── */}
          <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Compliance, Security &amp; Standards
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              Every system we deploy is pre-architected to satisfy rigorous international compliance audits, data residency laws, and cryptographic security models.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {industry.regulatoryCompliance.map((comp) => (
                <span
                  key={comp}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                >
                  <ShieldCheck size={13} className="text-emerald-600" />
                  <span>{comp}</span>
                </span>
              ))}
            </div>
          </section>

          {/* ── Production Technology Stack ── */}
          <section className="mb-16">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              Validated Production Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {industry.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs"
                >
                  <img
                    src={getTechLogo(tech)}
                    alt={tech}
                    className="w-3.5 h-3.5 object-contain flex-shrink-0"
                    loading="lazy" decoding="async"
                  />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </section>

          {/* ── Bottom Next Industry Navigator & Strategic Consultation CTA ── */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/industries/${nextIndustry.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand transition-colors"
            >
              <span>Next Industry: {nextIndustry.name}</span>
              <ChevronRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Initiate Strategic Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
