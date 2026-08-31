import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insightsArticles } from '@/data/insights';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ShareButton from '@/components/shared/ShareButton';
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found. Browse all Intactic insights.',
    };
  }
  return {
    title: article.title,
    description: article.excerpt || article.subtitle,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.subtitle,
      url: `/insights/${slug}`,
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return insightsArticles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-brand selection:text-white">
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link href="/insights" className="hover:text-brand transition-colors">
              Intactic Insights
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {article.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-xs">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Calendar size={13} className="text-slate-400" />
                {article.date}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Clock size={13} className="text-slate-400" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body font-normal">
              {article.subtitle}
            </p>

            {/* Author Profile & Action Bar */}
            <div className="mt-8 py-5 border-y border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {article.author.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">{article.author.name}</div>
                  <div className="text-xs text-slate-500">{article.author.role}</div>
                </div>
              </div>

              {/* Share & Bookmark Actions */}
              <div className="flex items-center gap-2">
                <ShareButton />
              </div>
            </div>
          </header>

          {/* Featured Hero Media */}
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg bg-slate-900 border border-slate-200">
            <img
              src={article.thumbnail}
              alt={article.title}
              loading="lazy" decoding="async"
              className="w-full h-auto max-h-[460px] object-cover object-center"
            />
          </div>

          {/* Key Takeaways Card */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-white border-2 border-brand/20 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-3.5">
                <CheckCircle2 size={16} className="text-brand" />
                <span>Executive Key Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Full Body Typography */}
          <article className="prose prose-slate max-w-none space-y-7 text-slate-800 text-base sm:text-[17px] leading-relaxed font-body">
            <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed italic border-l-4 border-brand pl-4 bg-brand/[0.02] py-2">
              {article.excerpt}
            </p>

            {article.content.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4">
                {sec.heading && (
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-9 mb-4 tracking-tight">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
                {sec.callout && (
                  <blockquote className="my-6 p-5 rounded-xl border-l-4 border-amber-400 bg-amber-50/60 text-slate-900 text-sm sm:text-base font-semibold italic">
                    {sec.callout}
                  </blockquote>
                )}
              </section>
            ))}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Topics:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-[4px] bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Back Button & Author Bio Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-brand text-white font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
              {article.author.avatar}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-950">
                Authored by {article.author.name}
              </h3>
              <p className="text-xs text-brand font-medium mt-0.5">{article.author.role}</p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Senior engineering leader at Intactic specializing in high-performance cloud architectures, enterprise AI integration, and mission-critical systems.
              </p>
            </div>
          </div>

          {/* Return to portal */}
          <div className="mt-10 flex justify-between items-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to All Insights</span>
            </Link>
          </div>

          {/* ── Related Articles Section ── */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 uppercase tracking-tight">
                  Related Architecture Teardowns
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  More strategic insights from our engineering editorial team.
                </p>
              </div>
              <Link
                href="/insights"
                className="hidden sm:inline-flex text-xs font-bold uppercase tracking-wider text-brand hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="group p-4 rounded-xl border border-slate-200 bg-white hover:border-brand/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-32 rounded-lg overflow-hidden mb-3 bg-slate-900">
                      <img
                        src={rel.thumbnail}
                        alt={rel.title}
                        loading="lazy" decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase text-brand">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand transition-colors line-clamp-2 mt-1">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono mt-3">
                    {rel.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
