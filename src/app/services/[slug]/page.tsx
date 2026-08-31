import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTechLogo } from '@/data/caseStudies';
import { getAdaptedServiceBySlug, getAdaptedCategories } from '@/lib/data/services-adapter';
import { resolveIcon } from '@/lib/data/icons';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import {
  ChevronRight,
  CheckCircle2,
  Layers,
  ArrowRight,
  Cpu,
  Workflow,
  Check,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getAdaptedServiceBySlug(slug);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found. Browse all Intactic enterprise services.',
    };
  }
  return {
    title: service.title,
    description: service.tagline || service.description,
    openGraph: {
      title: `${service.title} | Intactic`,
      description: service.tagline || service.description,
      url: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getAdaptedServiceBySlug(slug);
  const categories = await getAdaptedCategories();

  if (!service) {
    notFound();
  }

  const category = categories.find((c) => c.id === service.categoryId);
  const allSvcs = categories.flatMap((c) => c.services);
  const relatedServices = (category?.services || allSvcs)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

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
            <Link href="/services" className="hover:text-brand transition-colors">
              Services
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-500 hidden sm:inline">{service.categoryTitle}</span>
            <ChevronRight size={12} className="text-slate-400 hidden sm:inline" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {service.title}
            </span>
          </nav>

          {/* Service Hero Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-xs">
                {service.categoryTitle}
              </span>
              <span className="px-3 py-1 rounded-[4px] text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700">
                Enterprise Discipline
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl font-medium text-slate-600 leading-relaxed font-body">
              {service.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-body max-w-3xl">
              {service.heroDescription || service.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Scope This Project</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-2xs cursor-pointer"
              >
                <span>View Related Case Studies</span>
              </Link>
            </div>
          </header>

          {/* Key Capabilities Grid */}
          <section className="mb-14">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand mb-4">
              <Cpu size={16} />
              <span>Core Engineering Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-6">
              Architectural Highlights &amp; Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand/40 transition-colors"
                >
                  <div className="text-base font-bold text-slate-950 mb-2 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand/5 text-brand flex items-center justify-center flex-shrink-0">
                      {feat.iconName ? resolveIcon(feat.iconName) : <CheckCircle2 size={16} />}
                    </div>
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4-Step Engineering Delivery Process */}
          {service.process && service.process.length > 0 && (
            <section className="mb-14 p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand mb-4">
                <Workflow size={16} />
                <span>Delivery Methodology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-8">
                How We Execute from Discovery to Production
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="text-3xl font-extrabold font-mono text-brand/20 mb-2">
                      0{step.step || idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-950 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Strategic Business Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <section className="mb-14 p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-950 mb-5 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span>Strategic Business Value &amp; Outcomes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Production Technology Stack */}
          {service.technologies && service.technologies.length > 0 && (
            <section className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-14">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
                <Layers size={15} />
                <span>Production Technology Stack</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                We leverage battle-tested, high-performance industry frameworks tailored to your throughput, security, and scalability benchmarks.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[5px] bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono font-semibold text-white transition-colors"
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
            </section>
          )}

          {/* Project Scoping CTA Banner */}
          <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#060e1a] via-[#0b172a] to-[#0d2144] text-white border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <span className="px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-accent">
                READY TO BUILD?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Get an engineering proposal for {service.shortTitle || service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-body">
                Our solutions architects provide a comprehensive discovery report, timeline estimates, and dedicated squad options within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand/20 flex-shrink-0 cursor-pointer"
            >
              Start Conversation
            </Link>
          </section>

          {/* Related Capabilities in this Discipline */}
          {relatedServices.length > 0 && (
            <section className="pt-10 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-950 mb-6">
                Related Capabilities in {service.categoryTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-brand/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 group-hover:text-brand transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {rel.tagline}
                      </p>
                    </div>
                    <div className="mt-4 text-xs font-bold text-brand flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ChevronRight size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
