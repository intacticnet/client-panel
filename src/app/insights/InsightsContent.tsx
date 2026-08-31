'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';
import { motion } from 'framer-motion';
import { insightsArticles } from '@/data/insights';
import {
  Clock,
  Calendar,
  ChevronRight,
  Search,
  CheckCircle2,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const categories = [
  'All Insights',
  'Enterprise AI',
  'Cloud & DevOps',
  'Cybersecurity',
  'Software Architecture',
];

export default function InsightsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All Insights');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

  const featured = insightsArticles.find((a) => a.featured) || insightsArticles[0];

  const filteredArticles = insightsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All Insights' || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    setSubscribeError('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      setSubscribed(true);
    } catch {
      setSubscribeError('Something went wrong. Please try again later.');
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <PageLayout
      badge="INTACTIC INSIGHTS • ARCHITECTURE & RESEARCH"
      title="Engineering Perspectives, AI Architectures & Market Intelligence."
      subtitle="In-depth technical whitepapers, architectural teardowns, and strategic frameworks authored by Intactic's principal software architects and cybersecurity leaders."
    >
      {/* ── Featured Editorial Whitepaper ── */}
      <section className="mb-14">
        <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-brand mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>FEATURED RESEARCH WHITE PAPER</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link
            href={`/insights/${featured.slug}`}
            className="group relative rounded-2xl border-2 border-slate-200 bg-slate-50/90 hover:bg-white hover:border-brand/60 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="relative md:w-5/12 h-64 md:h-auto overflow-hidden bg-slate-900 flex-shrink-0">
              <img
                src={featured.thumbnail}
                alt={featured.title}
                loading="lazy" decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-brand text-white shadow-md">
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar size={12} />
                    {featured.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-brand transition-colors leading-tight">
                  {featured.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {featured.author.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{featured.author.name}</div>
                    <div className="text-[11px] text-slate-500">{featured.author.role}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:translate-x-1 transition-transform">
                  Read Full Teardown <ChevronRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
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

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics, tags, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-[5px] border border-slate-200 bg-white text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand"
            />
          </div>
        </div>
      </section>

      {/* ── Article Grid ── */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredArticles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease }}
              className="flex"
            >
              <Link
                href={`/insights/${article.slug}`}
                className="group p-5 sm:p-6 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-white hover:border-brand/50 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer w-full"
              >
                <div>
                  <div className="relative h-44 rounded-lg overflow-hidden mb-4 bg-slate-900">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-brand shadow-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-[3px]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                      {article.author.avatar}
                    </div>
                    <span className="text-xs text-slate-700 font-medium">
                      {article.author.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand group-hover:translate-x-0.5 transition-transform">
                    Read Article →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Executive Newsletter Digest ── */}
      <section className="p-7 sm:p-9 rounded-2xl bg-[#060e1a] text-white border border-white/10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
            INTACTIC ARCHITECTURE DIGEST
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
            Stay Ahead of Enterprise Engineering &amp; AI Shifts.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Join 2,500+ CTOs, VP of Engineering, and tech directors who receive our bi-weekly whitepapers and architecture teardowns. No marketing fluff.
          </p>

          {subscribed ? (
            <div className="mt-5 p-4 rounded-lg bg-white/10 border border-emerald-400/40 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-white">
                You are now subscribed to the Intactic Architecture Digest.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter your corporate email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-[5px] bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent flex-1"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="px-6 py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all cursor-pointer flex-shrink-0 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
              {subscribeError && (
                <p className="text-xs text-rose-400 mt-1">{subscribeError}</p>
              )}
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}