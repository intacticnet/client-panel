'use client';

import PageLayout from '@/components/shared/PageLayout';
import { motion } from 'framer-motion';
import { Target, Globe, Users, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: <Target size={20} />,
    title: 'Mission-Driven',
    desc: 'We exist to make world-class technology accessible to businesses of every size — not just the Fortune 500.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Global Standards',
    desc: 'Our engineering culture is inspired by global best practices, with a deep understanding of local markets.',
  },
  {
    icon: <Users size={20} />,
    title: 'People First',
    desc: 'Every decision we make — from hiring to product — is rooted in the belief that people drive outcomes.',
  },
  {
    icon: <Zap size={20} />,
    title: 'AI-Powered Future',
    desc: 'We don\'t bolt on AI. We architect systems where intelligence is a foundational capability, not a feature.',
  },
];

const stats = [
  { value: '70+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Active Clients' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5+',   label: 'Years of Excellence' },
];

export default function AboutContent() {
  return (
    <PageLayout
      badge="About Intactic"
      title="We Build Technology That Moves Businesses Forward."
      subtitle="Intactic is a next-generation technology partner for ambitious businesses — combining engineering excellence, AI-first thinking, and creative strategy to deliver outcomes that last."
    >
      {/* Stats cross-grid */}
      <div className="relative grid grid-cols-2 my-14 max-w-2xl">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 pointer-events-none" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 pointer-events-none" />
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease }}
            className="flex flex-col items-center justify-center py-10 sm:py-14 px-4 text-center"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-brand font-accent stat-number">{s.value}</div>
            <div className="mt-1.5 text-xs sm:text-sm text-slate-500 font-semibold">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Story */}
      <section className="prose prose-gray max-w-none mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 not-prose mb-4">Our Story</h2>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          Founded in Chittagong, Bangladesh, Intactic was born from a simple observation: businesses were struggling to find a technology partner who could truly think strategically and execute flawlessly. Most agencies either had vision without execution, or execution without vision.
        </p>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg mt-4">
          We built Intactic to be different. We are engineers who understand business, and strategists who understand technology. Our team has worked on projects across 12+ industries — from healthcare and fintech to retail and logistics — delivering measurable outcomes every time.
        </p>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg mt-4">
          Today, Intactic serves clients across Bangladesh and globally, building software, systems, and strategies that create real competitive advantage.
        </p>
      </section>

      {/* Values */}
      <section className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative rounded-3xl bg-navy overflow-hidden p-8 sm:p-12 text-center">
        <div className="absolute inset-0 geo-grid-dark opacity-30" />
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Build Something Great?</h2>
          <p className="text-white/60 mb-8 text-sm sm:text-base">Let&apos;s talk about your next big idea.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-navy bg-accent hover:bg-accent-light transition-all shadow-lg hover:shadow-xl group"
          >
            Start a Conversation
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}