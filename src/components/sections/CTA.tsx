import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';

const channels = [
  {
    id: 'call',
    label: 'Direct Voice Line',
    detail: '+880 9678-791213',
    href: 'tel:+8809678791213',
    external: false,
    iconColor: '#115fc9',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] sm:w-9 sm:h-9">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" strokeWidth={1.8} />
        <path d="M14.05 6A5 5 0 0 1 18 10" strokeWidth={1.8} />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Enterprise Email',
    detail: 'info@intactic.net',
    href: 'mailto:info@intactic.net',
    external: false,
    iconColor: '#ea580c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] sm:w-9 sm:h-9">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        <path d="M2 17l6-5" strokeWidth={1.6} />
        <path d="M22 17l-6-5" strokeWidth={1.6} />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Business',
    detail: '+880 9678-791213',
    href: 'https://wa.me/8809678791213',
    external: true,
    iconColor: '#25D366',
    icon: (
      <img
        src="https://res.cloudinary.com/ti1ep7pl/image/upload/v1787893125/whatsapp-fill-svgrepo-com.svg"
        alt=""
        aria-hidden="true"
        className="w-[26px] h-[26px] sm:w-8 sm:h-8"
        draggable="false"
      />
    ),
  },
  {
    id: 'messenger',
    label: 'Facebook Messenger',
    detail: 'm.me/getintactic',
    href: 'https://m.me/getintactic',
    external: true,
    iconColor: '#A033FF',
    icon: (
      <img
        src="https://res.cloudinary.com/ti1ep7pl/image/upload/v1787893036/messenger-fill-svgrepo-com.svg"
        alt=""
        aria-hidden="true"
        className="w-[26px] h-[26px] sm:w-8 sm:h-8"
        draggable="false"
      />
    ),
  },
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 bg-[#071930] text-white overflow-hidden">
      {/* Ambient subtle architectural pattern */}
      <div className="absolute inset-0 geo-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#115fc9]/[0.12] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-[#F5A623]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#115fc9]/20 border border-[#115fc9]/30 mb-5 shadow-2xs backdrop-blur-md">
          <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" fill="#ffffff" />
          <span className="text-xs font-bold uppercase tracking-widest text-white eyebrow-kicker">
            Let&apos;s Architect Your Solution
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-[1.1]">
          Ready to Build <br className="hidden sm:block" />
          <span className="text-[#F5A623]">Something Extraordinary?</span>
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-[15px] sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-body font-normal tracking-[0.015em]">
          From high-concurrency cloud architectures to full-funnel digital systems — our senior engineering squads are ready to scope, build, and deploy your next market advantage.
        </p>

        {/* Primary CTA Button */}
        <div className="mt-8 sm:mt-9 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#060e1a] bg-[#F5A623] hover:bg-[#ffc44d] rounded-[6px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-12 sm:mt-14 flex items-center gap-4 max-w-lg mx-auto">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/80">Direct Communication Channels</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Direct Channel Icon Actions (4-in-a-row, sharp white tiles, aggressively colored icons) */}
        <div className="mt-6 sm:mt-7 flex items-center justify-center gap-2 sm:gap-4">
          {channels.map((ch) => (
            <a
              key={ch.id}
              href={ch.href}
              {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${ch.label} — ${ch.detail}`}
              title={ch.label}
              className="group relative flex items-center justify-center w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-xs bg-white border border-slate-200/60 shadow-[0_4px_16px_rgba(2,14,36,0.14)] hover:shadow-[0_16px_32px_-6px_rgba(2,14,36,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{ color: ch.iconColor }}
            >
              {/* Colored hover bloom */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: ch.iconColor }}
              />
              <span className="relative inline-flex transition-transform duration-300 group-hover:scale-110">
                {ch.icon}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
