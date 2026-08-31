import type { Metadata } from 'next';
import Link from 'next/link';
import { industriesData } from '@/data/industries';
import PageLayout from '@/components/shared/PageLayout';
import {
  ArrowRight,
  ChevronRight,
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
  Cpu,
  Rocket,
  Building2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Intactic delivers domain-specific enterprise solutions across e-commerce, healthcare, fintech, logistics, manufacturing, and 10+ other sectors — with deep regulatory and compliance expertise.',
  openGraph: {
    title: 'Industries We Serve | Intactic',
    description: 'Domain-specific enterprise solutions across e-commerce, healthcare, fintech, logistics, and 10+ more sectors.',
    url: '/industries',
  },
};

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
      return <Sparkles className={className} />;
  }
}

export default function IndustriesHubPage() {
  return (
    <PageLayout
      badge="Enterprise Sector Specialization"
      title="Engineering Transformative Impact Across Global Sectors."
      subtitle="Domain-specific digital ecosystems, mission-critical architectures, and scalable enterprise systems engineered to master complex regulatory, security, and operational constraints."
    >
      <div className="space-y-12">
        {/* ── 8-Industry Detailed Matrix ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {industriesData.map((ind) => (
            <div
              key={ind.slug}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-brand/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-2xs"
                    style={{
                      backgroundColor: `${ind.accentColor}14`,
                      color: ind.accentColor,
                    }}
                  >
                    {getIndustryIcon(ind.iconName, 'w-6 h-6')}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {ind.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 leading-tight">
                  {ind.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-brand">
                  {ind.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  {ind.heroDescription}
                </p>

                {/* Highlights List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  {ind.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={15} className="text-brand flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-7 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500">
                  Benchmark: <span className="text-slate-900">{ind.featuredMetric.value}</span>
                </span>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition-colors"
                >
                  <span>Explore Industry Blueprint</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Strategic Consultation Callout ── */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <ShieldCheck size={14} />
              <span>Sovereign Compliance &amp; Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Is your industry not listed here?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We design specialized enterprise systems tailored to your unique regulatory requirements, internal sovereignty constraints, and operational goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-md hover:shadow-lg cursor-pointer flex-shrink-0"
          >
            <span>Let&apos;s Architect Your Solution</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
