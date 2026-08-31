'use client';

import { useState } from 'react';
import PageLayout from '@/components/shared/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, Clock, ArrowRight, CheckCircle2,
  ShieldCheck, Zap, Sparkles, MapPin, Send,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const contactMethods = [
  {
    icon: <Mail size={17} />,
    label: 'Direct Email',
    value: 'info@intactic.net',
    href: 'mailto:info@intactic.net',
    actionText: 'Send an email',
    desc: 'Average response under 4 business hours.',
    accent: '#115fc9',
  },
  {
    icon: <Phone size={17} />,
    label: 'Corporate Line',
    value: '+880 967-879-1213',
    href: 'tel:+8809678791213',
    actionText: 'Call our team',
    desc: 'Sun–Thu, 10:00 AM – 7:00 PM BST.',
    accent: '#22c55e',
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
    label: 'WhatsApp Direct',
    value: '@getintactic',
    href: 'https://wa.me/getintactic',
    actionText: 'Message us',
    desc: 'Instant messaging for agile kickoffs.',
    accent: '#25D366',
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.302 2.248.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 7.73l3.131 3.259L19.749 7.73l-6.558 7.233z" />
      </svg>
    ),
    label: 'Messenger',
    value: '@getintactic',
    href: 'https://m.me/getintactic',
    actionText: 'Chat now',
    desc: 'Connect with our engineering advisors.',
    accent: '#0084FF',
  },
];

const serviceOptions = [
  'Custom Software & Web Apps',
  'Enterprise AI & Automation',
  'Cloud Architecture & DevOps',
  'Mobile App Development',
  'Brand Strategy & UI/UX',
  'ERP & Business Systems',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
];

export default function ContactContent() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          services: selectedServices,
          budget: selectedBudget,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      badge="Global Engagement"
      title="Let's Architect Something Extraordinary."
      subtitle="Whether you require enterprise-grade software engineering, AI-driven automation, or digital transformation, our specialists are ready to collaborate."
    >
      {/* ══ TRUST INDICATORS — compact row on mobile, bordered grid on sm+ ══ */}
      <div className="grid grid-cols-3 gap-2 sm:gap-0 sm:grid-cols-3 border border-slate-200 bg-white mb-10 sm:mb-14 overflow-hidden">
        {[
          { icon: <Zap size={13} />, color: 'text-brand', title: '4-Hour SLA', sub: 'Fast consultation' },
          { icon: <ShieldCheck size={13} />, color: 'text-amber-600', title: 'NDA Protected', sub: 'Enterprise IP security' },
          { icon: <Sparkles size={13} />, color: 'text-emerald-600', title: 'Free Audit', sub: 'Technical roadmap' },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`flex sm:flex-row flex-col items-center sm:items-start gap-1.5 sm:gap-3 px-2.5 py-3 sm:px-5 sm:py-4 text-center sm:text-left ${i < 2 ? 'sm:border-r border-slate-200' : ''}`}
          >
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[2px] bg-slate-50 ${item.color} flex items-center justify-center flex-shrink-0 border border-slate-100`}>
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className="text-[10.5px] sm:text-[11.5px] font-bold text-slate-900 tracking-tight leading-tight">{item.title}</div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-500 mt-0.5 leading-snug">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ══ CONTACT CHANNELS — 2-col on mobile, 4-col on lg ══ */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <div className="w-1 h-4 sm:h-5 bg-brand" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900">Direct Channels</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {contactMethods.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="group relative p-3.5 sm:p-5 border border-slate-200 bg-white hover:border-brand/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: c.accent }}
              />
              <div>
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-[2px] flex items-center justify-center mb-3 sm:mb-4 border"
                  style={{ backgroundColor: `${c.accent}08`, borderColor: `${c.accent}20`, color: c.accent }}
                >
                  {c.icon}
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-mono font-bold tracking-[0.1em] uppercase mb-1 sm:mb-1.5" style={{ color: c.accent }}>
                  {c.label}
                </div>
                <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-snug">
                  {c.value}
                </div>
                <p className="text-[10.5px] sm:text-[11.5px] text-slate-500 mt-1.5 sm:mt-2 leading-relaxed hidden sm:block">
                  {c.desc}
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-brand group-hover:text-brand-dark transition-colors">
                <span>{c.actionText}</span>
                <ArrowRight size={11} className="sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ══ PROJECT INQUIRY FORM ══ */}
      <section className="border border-slate-200 bg-white overflow-hidden">
        {/* Form header */}
        <div className="bg-[#0a1628] px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <Send size={13} className="text-accent" />
            <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.14em] uppercase text-slate-400">
              Project Inquiry
            </span>
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-tight">
            Initiate a Confidential Consultation
          </h2>
          <p className="text-[12px] sm:text-[13px] text-slate-400 mt-1 sm:mt-1.5 max-w-xl leading-relaxed">
            Select your requirements below to help us match you with the right engineering team.
          </p>
        </div>

        {/* Form body */}
        <div className="p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-10 sm:py-12 text-center border border-emerald-200 bg-emerald-50/50 px-4"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[2px] bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Inquiry Received Successfully</h3>
                <p className="text-[12.5px] sm:text-[13px] text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. An Intactic solutions architect will review your project parameters and respond within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 sm:mt-6 px-5 py-2.5 rounded-[2px] text-[11px] font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 lg:space-y-7">
                {formError && (
                  <div className="flex items-start gap-2 px-4 py-3 rounded-[2px] bg-red-50 border border-red-200 text-[12px] sm:text-[12.5px] text-red-700 leading-relaxed">
                    <span className="font-bold flex-shrink-0">Error:</span>
                    <span>{formError}</span>
                  </div>
                )}
                {/* Step 1: Services */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                    <span className="w-5 h-5 rounded-[2px] bg-brand text-white text-[10px] font-bold flex items-center justify-center">1</span>
                    <label className="text-[10.5px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Services Needed
                    </label>
                    <span className="text-[10px] sm:text-[10.5px] text-slate-400 font-normal hidden sm:inline">Select all that apply</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {serviceOptions.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-[2px] text-[10.5px] sm:text-[11.5px] font-medium transition-all duration-200 cursor-pointer border ${
                            isSelected
                              ? 'bg-[#0a1628] text-white border-[#0a1628]'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          <span className={isSelected ? 'text-accent mr-1' : 'text-slate-300 mr-1'}>+</span>
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Step 2: Budget */}
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-[2px] bg-brand text-white text-[10px] font-bold flex items-center justify-center">2</span>
                      <label className="text-[10.5px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                        Approximate Budget
                      </label>
                      <span className="text-[10px] sm:text-[10.5px] text-slate-400 font-normal hidden sm:inline">Optional</span>
                    </div>
                    {selectedBudget && (
                      <button
                        type="button"
                        onClick={() => setSelectedBudget('')}
                        className="text-[10px] sm:text-[10.5px] text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetRanges.map((range) => {
                      const isSelected = selectedBudget === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(isSelected ? '' : range)}
                          className={`px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-[2px] text-[10.5px] sm:text-[11.5px] font-semibold transition-all duration-200 cursor-pointer border text-center ${
                            isSelected
                              ? 'bg-brand text-white border-brand'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Step 3: Contact Details */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                    <span className="w-5 h-5 rounded-[2px] bg-brand text-white text-[10px] font-bold flex items-center justify-center">3</span>
                    <label className="text-[10.5px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Your Details
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[2px] border border-slate-200 bg-slate-50/50 text-[13px] sm:text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Business Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[2px] border border-slate-200 bg-slate-50/50 text-[13px] sm:text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Company / Organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[2px] border border-slate-200 bg-slate-50/50 text-[13px] sm:text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Step 4: Message */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                    <span className="w-5 h-5 rounded-[2px] bg-brand text-white text-[10px] font-bold flex items-center justify-center">4</span>
                    <label className="text-[10.5px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Project Overview
                    </label>
                    <span className="text-[10px] sm:text-[10.5px] text-slate-400 font-normal">Required</span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Outline your engineering objectives, desired timeline, target user base, or any technical specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[2px] border border-slate-200 bg-slate-50/50 text-[13px] sm:text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-slate-300" />
                    Protected under ISO/SOC-2 and NDA standards.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[2px] text-[11px] font-bold uppercase tracking-wider text-navy bg-accent hover:bg-accent-light transition-all cursor-pointer flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                    {isSubmitting ? (
                      <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} className="opacity-20" />
                        <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
                      </svg>
                    ) : (
                      <ArrowRight size={14} />
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══ OFFICE INFO — stacked on mobile, side by side on sm+ ══ */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        <div className="flex items-start gap-3 p-4 sm:p-5 border border-slate-200 bg-white">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[2px] bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
            <Clock size={15} />
          </div>
          <div className="min-w-0">
            <div className="text-[10.5px] sm:text-[11px] font-bold text-slate-900 uppercase tracking-wider">Working Hours</div>
            <div className="text-[12px] sm:text-[12.5px] text-slate-600 mt-1 leading-relaxed">
              Sunday – Thursday: 10 AM – 7 PM BST
            </div>
            <div className="text-[10.5px] sm:text-[11.5px] text-slate-400 mt-0.5">
              24/7 Emergency Incident Monitoring
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 sm:p-5 border border-slate-200 bg-white">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[2px] bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
            <MapPin size={15} />
          </div>
          <div className="min-w-0">
            <div className="text-[10.5px] sm:text-[11px] font-bold text-slate-900 uppercase tracking-wider">Department Emails</div>
            <div className="mt-1.5 space-y-1">
              <a href="mailto:sales@intactic.net" className="block text-[12px] sm:text-[12.5px] text-slate-600 hover:text-brand transition-colors truncate">
                sales@intactic.net
              </a>
              <a href="mailto:products@intactic.net" className="block text-[12px] sm:text-[12.5px] text-slate-600 hover:text-brand transition-colors truncate">
                products@intactic.net
              </a>
              <a href="mailto:careers@intactic.net" className="block text-[12px] sm:text-[12.5px] text-slate-600 hover:text-brand transition-colors truncate">
                careers@intactic.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}