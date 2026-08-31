'use client';

import { useState } from 'react';
import PageLayout from '@/components/shared/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  BrainCircuit,
  Palette,
  Server,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Laptop,
  GraduationCap,
  HeartHandshake,
  Shield,
  Sparkles,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const perks = [
  {
    icon: <Cpu size={20} />,
    title: 'AI-Augmented Engineering',
    desc: 'Work with state-of-the-art LLM pipelines, autonomous dev agents, and cutting-edge neural architectures.',
  },
  {
    icon: <Laptop size={20} />,
    title: 'Tier-1 Hardware & Tooling',
    desc: 'Top-spec workstations, cloud GPU clusters, Copilot/Cursor enterprise seats, and the best dev tools.',
  },
  {
    icon: <GraduationCap size={20} />,
    title: 'Continuous Learning Stipend',
    desc: 'Annual education budget for AWS/GCP certifications, high-impact conferences, and advanced technical literature.',
  },
  {
    icon: <HeartHandshake size={20} />,
    title: 'Hybrid & Remote Flexibility',
    desc: 'Empowered autonomous culture focused on high-quality pull requests and outcomes rather than rigid hours.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Competitive Compensation',
    desc: 'Market-leading salaries, bi-annual performance bonuses, and transparent career advancement matrices.',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Global Impact Work',
    desc: 'Build mission-critical digital systems and software ecosystems used by global enterprises daily.',
  },
];

const jobOpenings = [
  {
    id: 'senior-fullstack',
    title: 'Senior Full-Stack Engineer (Next.js / Node / Go)',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote / Hybrid (Chittagong HQ)',
    experience: '4+ Years',
    icon: <Code size={20} />,
    summary:
      'Lead architectural design and full-lifecycle implementation of high-throughput web applications, microservices, and distributed systems.',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    id: 'ai-ml-engineer',
    title: 'Enterprise AI & LLM Systems Engineer',
    department: 'AI & Data',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    experience: '3+ Years',
    icon: <BrainCircuit size={20} />,
    summary:
      'Develop RAG pipelines, fine-tune domain-specific models, and integrate agentic AI workflows directly into corporate ERP and CRM platforms.',
    skills: ['Python', 'LangChain', 'LlamaIndex', 'PyTorch', 'Vector DBs', 'FastAPI', 'OpenAI/Gemini APIs'],
  },
  {
    id: 'lead-ui-ux-designer',
    title: 'Lead Product & UI/UX Designer',
    department: 'Design',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    experience: '3+ Years',
    icon: <Palette size={20} />,
    summary:
      'Craft world-class design systems, high-fidelity prototypes, and intuitive interfaces for enterprise dashboards and mobile platforms.',
    skills: ['Figma', 'Design Systems', 'Micro-interactions', 'User Research', 'Information Architecture'],
  },
  {
    id: 'cloud-devops-architect',
    title: 'Cloud DevOps & Site Reliability Architect',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    experience: '4+ Years',
    icon: <Server size={20} />,
    summary:
      'Manage multi-region Kubernetes infrastructure, CI/CD pipelines, zero-trust security postures, and automated monitoring systems.',
    skills: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus', 'CI/CD Pipelines'],
  },
  {
    id: 'technical-project-manager',
    title: 'Technical Project Manager / Scrum Master',
    department: 'Operations',
    type: 'Full-Time',
    location: 'Hybrid / On-site',
    experience: '3+ Years',
    icon: <Briefcase size={20} />,
    summary:
      'Bridge client stakeholders and engineering squads, drive agile sprints, manage technical deliverables, and ensure 99%+ on-time execution.',
    skills: ['Agile / Scrum', 'Jira', 'Technical Roadmapping', 'Client Management', 'SLA Governance'],
  },
];

const departments = ['All Positions', 'Engineering', 'AI & Data', 'Design', 'Operations'];

export default function CareersContent() {
  const [selectedDept, setSelectedDept] = useState('All Positions');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applyModalJob, setApplyModalJob] = useState<string | null>(null);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [applyError, setApplyError] = useState('');

  const filteredJobs =
    selectedDept === 'All Positions'
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDept);

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApplyError('');
    setApplying(true);
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value?.trim() ?? '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value?.trim() ?? '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value?.trim() ?? '',
      portfolio: (form.elements.namedItem('portfolio') as HTMLInputElement)?.value?.trim() ?? '',
      position: applyModalJob ?? '',
      introduction: (form.elements.namedItem('introduction') as HTMLTextAreaElement)?.value?.trim() ?? '',
    };
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) { setApplyError(data.error || 'Failed to submit.'); return; }
      setApplied(true);
    } catch {
      setApplyError('Network error. Please try again.');
    } finally {
      setApplying(false);
    }
  };

  return (
    <PageLayout
      badge="Join The Team"
      title="Engineering Excellence Starts With Extraordinary People."
      subtitle="At Intactic, we combine Silicon-Valley engineering rigor with ambitious problem-solving. We are building the next generation of enterprise software and AI solutions."
    >
      {/* ── Culture Highlights ── */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-brand">
            WHY INTACTIC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Built by Builders, for Builders.
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            We value clean architecture, relentless curiosity, and autonomous execution. Here is what you can expect when joining our engineering family:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/75 hover:bg-white hover:border-brand/40 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/90 text-brand flex items-center justify-center mb-3.5 shadow-2xs">
                  {perk.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{perk.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Open Positions Section ── */}
      <section id="open-positions" className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-brand">
              OPEN ROLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Current Career Opportunities
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore our active openings across engineering, AI research, and product strategy.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-[6px] border border-slate-200/80">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = selectedJob === job.id;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-200 bg-white hover:border-brand/50 shadow-xs overflow-hidden transition-all duration-200"
              >
                <div
                  onClick={() => setSelectedJob(isExpanded ? null : job.id)}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                      {job.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                          {job.department}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-brand transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-1.5">
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-slate-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-slate-400" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setApplyModalJob(job.title);
                        setApplied(false);
                      }}
                      className="px-4 py-2 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-xs cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/60"
                    >
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                        {job.summary}
                      </p>
                      <div>
                        <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Core Technical Stack & Competencies:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-[4px] text-[11px] font-mono font-medium bg-white border border-slate-200 text-slate-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Spontaneous Application / General Resume Drop ── */}
      <section className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand">
            GENERAL APPLICATION
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Don&apos;t see an exact match for your skillset?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            We are always eager to speak with exceptional software engineers, distributed systems architects, and product leaders.
          </p>
        </div>
        <a
          href="mailto:careers@intactic.net?subject=General%20Engineering%20Application"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all flex-shrink-0 cursor-pointer shadow-xs"
        >
          <span>Send Your CV / Portfolio</span>
          <ArrowRight size={14} />
        </a>
      </section>

      {/* ── Direct Application Modal ── */}
      <AnimatePresence>
        {applyModalJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl relative"
            >
              <button
                onClick={() => setApplyModalJob(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand">
                  JOB APPLICATION
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{applyModalJob}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submit your details below or email directly to <span className="font-semibold text-brand">careers@intactic.net</span>
                </p>
              </div>

              {applied ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Application Submitted</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                    Our technical recruiting team will review your profile and respond within 3 business days.
                  </p>
                  <button
                    onClick={() => setApplyModalJob(null)}
                    className="mt-5 px-5 py-2 rounded-[5px] text-xs font-bold text-navy bg-accent hover:bg-accent-light"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  {applyError && (
                    <div className="p-3 rounded-[5px] bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                      {applyError}
                    </div>
                  )}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-slate-200 bg-white text-xs focus:outline-none focus:border-brand"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="jane@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-[5px] border border-slate-200 bg-white text-xs focus:outline-none focus:border-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-[5px] border border-slate-200 bg-white text-xs focus:outline-none focus:border-brand"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      GitHub / Portfolio / LinkedIn URL
                    </label>
                    <input
                      name="portfolio"
                      type="url"
                      placeholder="https://github.com/yourhandle"
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-slate-200 bg-white text-xs focus:outline-none focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Brief Introduction / Key Projects *
                    </label>
                    <textarea
                      name="introduction"
                      rows={3}
                      required
                      placeholder="Highlight relevant software architectures or key problems you have solved..."
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-slate-200 bg-white text-xs focus:outline-none focus:border-brand resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={applying}
                      className="w-full py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all shadow-xs cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {applying ? 'Submitting…' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}