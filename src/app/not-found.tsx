'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const COLORED_LOGO =
  'https://res.cloudinary.com/ti1ep7pl/image/upload/w_600,c_scale,f_auto,q_auto/v1787876594/intactic-blue.png';
const BLUE_ICON =
  'https://res.cloudinary.com/ti1ep7pl/image/upload/w_256,c_scale,f_auto,q_auto/v1787876840/Icon.png';

const quickLinks = [
  { label: 'Our Services', href: '/services', icon: ServiceIcon },
  { label: 'Products', href: '/products', icon: ProductIcon },
  { label: 'Case Studies', href: '/case-studies', icon: CaseIcon },
  { label: 'Contact Us', href: '/contact', icon: ContactIcon },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-[88px] pb-12">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 geo-grid opacity-40" />
          {/* Top-right brand gradient blob */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand/[0.03] blur-3xl" />
          {/* Bottom-left accent gradient blob */}
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl" />
          {/* Floating geometric accents */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[18%] right-[12%] w-20 h-20 border-2 border-brand/10 rounded-xl rotate-12 hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-[22%] left-[8%] w-14 h-14 border-2 border-accent/15 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-[35%] left-[15%] w-3 h-3 bg-brand/20 rounded-sm rotate-45 hidden lg:block"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Intactic Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 sm:mb-10"
          >
            <img
              src={COLORED_LOGO}
              alt="Intactic"
              width={180}
              height={44}
              className="h-9 sm:h-11 w-auto mx-auto"
            />
          </motion.div>

          {/* 404 Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="relative mb-8 sm:mb-10 inline-flex items-center justify-center"
          >
            {/* Glowing ring behind icon */}
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-brand/[0.06] blur-2xl" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-brand/10 via-brand/5 to-transparent border border-brand/15 flex items-center justify-center">
              <img
                src={BLUE_ICON}
                alt=""
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain opacity-80"
              />
            </div>
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
          >
            <span className="font-accent text-[120px] sm:text-[160px] lg:text-[180px] font-bold leading-none tracking-tight text-brand/[0.08] select-none block -mt-4 sm:-mt-6">
              404
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight -mt-16 sm:-mt-20 lg:-mt-24 mb-4"
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.45 }}
            className="text-[15px] sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto mb-10"
          >
            The page you are looking for does not exist or has been moved.
            Let us get you back on track with Intactic&apos;s solutions.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white text-sm font-bold uppercase tracking-wider rounded-[5px] transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 hover:border-brand text-slate-700 hover:text-brand text-sm font-bold uppercase tracking-wider rounded-[5px] transition-all duration-300 group"
            >
              Contact Support
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Quick Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.65 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
              Or explore
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease, delay: 0.7 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="group flex flex-col items-center gap-2.5 p-4 sm:p-5 rounded-xl border border-slate-100 hover:border-brand/25 bg-slate-50/50 hover:bg-brand/[0.03] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <link.icon />
                    </div>
                    <span className="text-[12.5px] font-semibold text-slate-600 group-hover:text-brand transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* Inline SVG Icons */
function ServiceIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function CaseIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}
