import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const footerServices = [
  { label: 'Web Development', href: '/services' },
  { label: 'Mobile App Development', href: '/services' },
  { label: 'Software Development', href: '/services' },
  { label: 'Cloud & DevOps', href: '/services' },
];

const footerSolutions = [
  { label: 'UI/UX Design', href: '/services' },
  { label: 'Brand Kit & Logo', href: '/services' },
  { label: 'Branding & Re-branding', href: '/services' },
  { label: 'AI & Automation', href: '/services' },
];

const footerCompany = [
  { label: 'All Services', href: '/services' },
  { label: 'Proprietary Products', href: '/products' },
  { label: 'Client Case Studies', href: '/case-studies' },
  { label: 'Engineering Insights', href: '/insights' },
  { label: 'Careers', href: 'https://wellfound.com/company/intactic' },
  { label: 'Contact Us', href: '/contact' },
];

const footerLegal = [
  { label: 'Privacy & Cookies', href: '/privacy-cookies' },
  { label: 'Terms & Policies', href: '/terms-policies' },
];

const socialLinks = [
  { name: 'facebook', url: 'https://facebook.com/getintactic' },
  { name: 'instagram', url: 'https://instagram.com/getintactic' },
  { name: 'x', url: 'https://x.com/getintactic' },
  { name: 'linkedin', url: 'https://linkedin.com/company/intacticgroup' },
  { name: 'youtube', url: 'https://youtube.com/@getintactic' },
];

/* Shared link item styles — UPPERCASE, not bold */
const linkCls =
  'text-[12.5px] sm:text-[13px] font-normal uppercase tracking-[0.06em] text-slate-300 hover:text-white transition-colors duration-200 text-left block leading-relaxed';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060e1a] overflow-hidden">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="Go to homepage"
            >
              <img
                src="https://res.cloudinary.com/ti1ep7pl/image/upload/w_400,c_scale,f_auto,q_auto/v1787876592/intactic-white.png"
                alt="Intactic"
                width={160}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-7 sm:h-8 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-opacity duration-300 hover:opacity-90"
              />
            </Link>
            <p className="text-[13px] sm:text-[13.5px] text-slate-400 leading-relaxed font-body font-normal tracking-[0.015em] max-w-[280px] mb-6">
              Technology partner for ambitious businesses, backed by AI integration
              &amp; a global standard of engineering.
            </p>

            {/* Social Icons — lowest radius (rounded-sm = 2px) */}
            <div className="flex gap-1.5 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-white/[0.05] hover:bg-brand/20 border border-white/[0.07] hover:border-brand/30 flex items-center justify-center transition-all duration-300 group"
                  aria-label={s.name}
                >
                  <FooterSocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Menus Grid — 2 cols on mobile, 4 cols on desktop, border-r dividers */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-0">
            {/* 1. Services */}
            <div className="sm:pr-6 lg:pr-8 sm:border-r sm:border-white/[0.07]">
              <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F5A623] mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerServices.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkCls}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Solutions */}
            <div className="sm:px-6 sm:border-r sm:border-white/[0.07]">
              <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F5A623] mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5">
                {footerSolutions.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkCls}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Company */}
            <div className="sm:px-6 sm:border-r sm:border-white/[0.07]">
              <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F5A623] mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerCompany.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={linkCls}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Contact */}
            <div className="sm:pl-6">
              <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F5A623] mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:info@intactic.net"
                    className="text-[12.5px] sm:text-[13px] font-normal text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 break-all"
                  >
                    <Mail className="w-3 h-3 shrink-0 fill-white text-[#060e1a]" strokeWidth={1.75} />
                    <span className="uppercase tracking-[0.04em]">info@intactic.net</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8809678791213"
                    className="text-[12.5px] sm:text-[13px] font-normal text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <Phone className="w-3 h-3 shrink-0 fill-white text-white" />
                    <span className="uppercase tracking-[0.04em]">+880 9678-791213</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/8809678791213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] sm:text-[13px] font-normal text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 shrink-0 fill-white opacity-90 group-hover:opacity-100" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span className="uppercase tracking-[0.04em]">Find us on WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.me/getintactic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] sm:text-[13px] font-normal text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 shrink-0 fill-white opacity-90 group-hover:opacity-100" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.302 2.248.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 7.73l3.131 3.259L19.749 7.73l-6.558 7.233z" />
                    </svg>
                    <span className="uppercase tracking-[0.04em]">Chat on Messenger</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] font-normal text-slate-500 tracking-[0.02em] text-center sm:text-left uppercase">
            &copy; {currentYear} Intactic. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLegal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11.5px] font-normal uppercase tracking-[0.04em] text-slate-500 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSocialIcon({ name }: { name: string }) {
  const cls = 'w-3 h-3 text-white/70 group-hover:text-white transition-colors';
  switch (name) {
    case 'facebook':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'x':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}
