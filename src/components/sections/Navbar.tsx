'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navCategories as categories } from '@/data/navCategories';

const WHITE_LOGO = 'https://res.cloudinary.com/ti1ep7pl/image/upload/w_600,c_scale,f_auto,q_auto/v1787876592/intactic-white.png';
const COLORED_LOGO = 'https://res.cloudinary.com/ti1ep7pl/image/upload/w_600,c_scale,f_auto,q_auto/v1787876594/intactic-blue.png';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openSubCategoryId, setOpenSubCategoryId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [hoveredCatId, setHoveredCatId] = useState(categories[0]?.id ?? null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setOpenSubCategoryId(null);
  };

  /* ── Scroll detection ── */
  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
      setIsScrolled(scrollY > 10);
    };
    checkScroll();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { checkScroll(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
    window.addEventListener('wheel', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onScroll);
      window.removeEventListener('wheel', onScroll);
    };
  }, []);

  /* ── Dynamic theme-color for mobile status bar ── */
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!meta) return;
    const update = () => {
      const header = headerRef.current;
      if (!header) return;
      const isOpen = header.classList.contains('is-mobile-open');
      const isScrolled = header.classList.contains('is-scrolled');
      const isSubpage = header.classList.contains('is-subpage');
      let color: string;
      if (isOpen) { color = '#0a356c'; }
      else if (isScrolled || isSubpage) { color = '#f0f2f5'; }
      else { color = '#070d19'; }
      if (meta.content !== color) { meta.content = color; }
    };
    const observer = new MutationObserver(update);
    if (headerRef.current) {
      observer.observe(headerRef.current, { attributes: true, attributeFilter: ['class'] });
    }
    update();
    return () => observer.disconnect();
  }, []);

  /* ── Mobile open class (for CSS logo override) ── */
  useEffect(() => {
    headerRef.current?.classList.toggle('is-mobile-open', mobileOpen);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const handleNavClick = (target: string) => {
    closeMobile();
    if (target.startsWith('/')) { router.push(target); return; }
    if (target === 'services') { router.push('/services'); return; }
    const el = document.getElementById(target);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
    else { router.push(`/#${target}`); }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    closeMobile();
    if (pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  };

  const handleServiceClick = (slug: string) => {
    closeMobile();
    router.push(`/services/${slug}`);
  };

  const toggleSubCategory = (categoryId: string) => {
    setOpenSubCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  /* ── Hover bridge: small delay so moving from button to dropdown doesn't close it ── */
  const handleServicesZoneEnter = useCallback(() => {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
    setDesktopServicesOpen(true);
  }, []);

  const handleServicesZoneLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
      closeTimeoutRef.current = null;
    }, 120);
  }, []);

  const desktopNavLinks = [
    { label: 'Services', target: '/services', hasDropdown: true },
    { label: 'Products', target: '/products', hasDropdown: false },
    { label: 'Case Studies', target: '/case-studies', hasDropdown: false },
    { label: 'About Us', target: '/about', hasDropdown: false },
    { label: 'Insights', target: '/insights', hasDropdown: false },
    { label: 'Careers', target: '/careers', hasDropdown: false },
    { label: 'Contact', target: '/contact', hasDropdown: false },
  ];

  const flatMobileNavLinks = [
    { label: 'Products', target: '/products', sub: 'Proprietary AI, security & cloud platforms' },
    { label: 'Case Studies', target: '/case-studies', sub: 'Production outcomes & enterprise metrics' },
    { label: 'About Us', target: '/about', sub: 'Who we are & our engineering mission' },
    { label: 'Insights', target: '/insights', sub: 'Technology, architecture & market reports' },
    { label: 'Careers', target: '/careers', sub: 'Join our high-performing tech team' },
    { label: 'Contact', target: '/contact', sub: 'Schedule a call & start a conversation' },
  ];

  const activeCat = categories.find(c => c.id === hoveredCatId) ?? categories[0];

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease }}
        className={`fixed top-0 left-0 right-0 z-50 navbar-header ${pathname !== '/' ? 'is-subpage' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between navbar-inner">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="relative z-10 flex items-center group py-1 cursor-pointer"
              aria-label="Go to homepage"
            >
              <div className="relative flex items-center">
                <img src={WHITE_LOGO} alt="Intactic" width={140} height={32} fetchPriority="high" decoding="async" className="logo-hero logo-size w-auto object-contain group-hover:opacity-90" />
                <img src={COLORED_LOGO} alt="Intactic" width={140} height={32} fetchPriority="high" decoding="async" className="logo-default logo-size w-auto object-contain group-hover:opacity-90 absolute inset-0" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {desktopNavLinks.map((link) =>
                link.hasDropdown ? (
                  /* ── Services: isolated hover zone (button + dropdown only) ── */
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleServicesZoneEnter}
                    onMouseLeave={handleServicesZoneLeave}
                  >
                    <button
                      onClick={() => { setDesktopServicesOpen(false); handleNavClick(link.target); }}
                      className="relative flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-semibold transition-colors duration-200 group cursor-pointer nav-link-text"
                    >
                      <span>{link.label}</span>
                      <motion.span
                        animate={{ rotate: desktopServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="opacity-60 group-hover:opacity-100"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-5 nav-underline" />
                    </button>

                    {/* ── Premium Mega Menu ── */}
                    <AnimatePresence>
                      {desktopServicesOpen && (
                        <motion.div
                          key="services-mega"
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[min(92vw,880px)] z-[100]"
                        >
                          {/* Invisible hover bridge */}
                          <div className="absolute -top-4 left-0 right-0 h-4" aria-hidden="true" />
                          {/* Solid white bg prevents background bleed-through */}
                          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_32px_80px_-16px_rgba(0,0,0,0.22),0_12px_32px_-8px_rgba(0,0,0,0.10)] overflow-hidden">
                            <div className="flex">

                              {/* LEFT: Category Navigation */}
                              <div className="w-[232px] flex-shrink-0 border-r border-slate-100 bg-slate-50/40 py-5 px-3">
                                <div className="space-y-1">
                                  {categories.map((cat, idx) => {
                                    const isActive = hoveredCatId === cat.id;
                                    return (
                                      <button
                                        key={cat.id}
                                        onMouseEnter={() => setHoveredCatId(cat.id)}
                                        className={`w-full flex items-center gap-3.5 px-3.5 py-3 text-left cursor-pointer rounded-xl transition-all duration-200 group/cat ${
                                          isActive
                                            ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)]'
                                            : 'text-slate-500 hover:text-slate-800 hover:bg-white/60'
                                        }`}
                                      >
                                        <div
                                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                                          style={{ 
                                            color: isActive ? cat.color : '#94a3b8', 
                                            backgroundColor: isActive ? `${cat.color}0D` : 'transparent',
                                            border: isActive ? `1px solid ${cat.color}18` : '1px solid transparent'
                                          }}
                                        >
                                          <div className="w-[18px] h-[18px]" style={{ color: isActive ? cat.color : undefined }}>{cat.icon}</div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <span className={`block text-[13px] font-semibold leading-tight truncate transition-colors duration-150 ${
                                            isActive ? 'text-slate-900' : 'group-hover/cat:text-slate-700'
                                          }`}>{cat.shortTitle}</span>
                                          <span className={`block text-[11px] leading-snug mt-1 transition-colors duration-150 ${
                                            isActive ? 'text-slate-400' : 'text-slate-300 group-hover/cat:text-slate-400'
                                          }`}>{
                                            idx === 0 ? 'Web, Mobile, AI & Cloud' :
                                            idx === 1 ? 'Identity, Design & Visual' :
                                            idx === 2 ? 'SEO, Ads & Growth' :
                                            idx === 3 ? 'Enterprise & Analytics' :
                                            'Strategy & Security'
                                          }</span>
                                        </div>
                                        {isActive && (
                                          <motion.div
                                            layoutId="mega-active-bar"
                                            className="w-[3px] self-stretch rounded-full"
                                            style={{ backgroundColor: cat.color }}
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                          />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* RIGHT: Service Links Content */}
                              <div className="flex-1 min-w-0 flex flex-col">
                                {/* Category header */}
                                <div className="flex-shrink-0 px-7 pt-6 pb-5 border-b border-slate-100">
                                  <div className="flex items-center gap-3.5">
                                    <div
                                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                                      style={{ 
                                        color: activeCat.color, 
                                        backgroundColor: `${activeCat.color}0A`,
                                        border: `1px solid ${activeCat.color}12`
                                      }}
                                    >
                                      <div className="w-5 h-5">{activeCat.icon}</div>
                                    </div>
                                    <div className="min-w-0">
                                      <h4 className="text-[15px] font-bold text-slate-900 leading-tight tracking-[-0.01em]">{activeCat.title}</h4>
                                      <p className="text-[12px] text-slate-400 font-normal leading-relaxed mt-1 max-w-[380px] line-clamp-1">{activeCat.tagline}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Service links grid */}
                                <div className="flex-1 overflow-y-auto px-6 py-5">
                                  <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                                    {activeCat.services.map((svc) => (
                                      <Link
                                        key={svc.slug}
                                        href={`/services/${svc.slug}`}
                                        onClick={() => setDesktopServicesOpen(false)}
                                        className="flex items-center px-3.5 py-[11px] rounded-lg text-[13px] text-slate-600 hover:text-brand transition-all duration-200 cursor-pointer group/svc font-medium leading-snug hover:bg-brand/[0.05]"
                                      >
                                        <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 bg-slate-200 group-hover/svc:bg-brand group-hover/svc:scale-[1.6] mr-3 transition-all duration-200" />
                                        <span className="truncate flex-1">{svc.title}</span>
                                        <svg 
                                          viewBox="0 0 24 24" 
                                          fill="none" 
                                          stroke="currentColor" 
                                          strokeWidth={2.5} 
                                          className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 group-hover/svc:opacity-50 group-hover/svc:translate-x-0 transition-all duration-200 flex-shrink-0"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="px-7 py-4 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-[6px] h-[6px] rounded-full bg-emerald-400" />
                                  <span className="text-[11.5px] text-slate-400 font-medium">{categories.reduce((s, c) => s + c.services.length, 0)}+ enterprise services</span>
                                </div>
                                <span className="w-px h-3 bg-slate-200" />
                                <span className="text-[11.5px] text-slate-400 font-medium">{categories.length} specialized categories</span>
                              </div>
                              <Link
                                href="/services"
                                onClick={() => setDesktopServicesOpen(false)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand/[0.06] hover:bg-brand/[0.12] text-[11.5px] font-bold text-brand hover:text-brand-dark transition-all duration-200 cursor-pointer group/va"
                              >
                                <span>View All Services</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 transition-transform duration-200 group-hover/va:translate-x-0.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  /* ── Regular nav link (no dropdown) ── */
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => handleNavClick(link.target)}
                      className="relative flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-semibold transition-colors duration-200 group cursor-pointer nav-link-text"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-5 nav-underline" />
                    </button>
                  </div>
                )
              )}

              <Link
                href="/contact"
                className="ml-2 relative inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-navy rounded-[3px] transition-all duration-300 group shadow-sm hover:shadow cursor-pointer nav-cta-btn"
              >
                <span>Get Started</span>
                <svg
                  className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a
                href="https://login.intactic.net"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 relative inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#115FC9] hover:bg-[#0D4DA8] active:scale-[0.98] rounded-[3px] transition-all duration-300 group shadow-sm hover:shadow cursor-pointer"
              >
                <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Login</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => { mobileOpen ? closeMobile() : setMobileOpen(true); }}
              className="relative z-10 md:hidden hamburger-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <>
                  <span className="block w-5 h-[2px] bg-brand rounded-full rotate-45 translate-y-[3px]" />
                  <span className="block w-5 h-[2px] bg-brand rounded-full -rotate-45 -translate-y-[3px]" />
                </>
              ) : (
                <>
                  <span className="block hamburger-line" />
                  <span className="block hamburger-line" />
                  <span className="block hamburger-line" />
                </>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-[64px] sm:pt-[76px] bg-[#0a356c]"
          >
            <div className="relative z-10 flex-1 overflow-y-auto px-5 py-3">
              <div>
                {/* ── Services ── */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06, duration: 0.35, ease }}
                  className="border-b border-white/[0.12]"
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between py-3.5 group cursor-pointer text-left"
                  >
                    <div>
                      <p className="text-[14px] font-bold uppercase tracking-wider text-white group-hover:text-white transition-colors">SERVICES</p>
                      <p className="text-[11.5px] text-white/50 group-hover:text-white/75 mt-0.5 transition-colors">Custom software, AI, ERP, UI/UX & cloud</p>
                    </div>
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="text-white/60 group-hover:text-white transition-colors ml-3 flex-shrink-0"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-1 pr-1 space-y-1.5">
                          {categories.map((cat, idx) => {
                            const isSubOpen = openSubCategoryId === cat.id;
                            return (
                              <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.035, duration: 0.22 }}
                                className="rounded-[3px] bg-white/[0.06] border border-white/[0.1] overflow-hidden backdrop-blur-sm"
                              >
                                <button
                                  onClick={() => toggleSubCategory(cat.id)}
                                  className="w-full flex items-center justify-between px-3 py-2.5 group transition-colors hover:bg-white/[0.08] cursor-pointer"
                                >
                                  <span className="text-[13px] text-white/90 group-hover:text-white font-semibold transition-colors text-left leading-snug">{cat.title}</span>
                                  <motion.span
                                    animate={{ rotate: isSubOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-white/50 group-hover:text-white ml-2 flex-shrink-0 transition-colors"
                                  >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </motion.span>
                                </button>

                                <AnimatePresence>
                                  {isSubOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                                      className="overflow-hidden bg-black/20 border-t border-white/[0.08]"
                                    >
                                      <div className="py-1.5 px-2 space-y-0.5">
                                        {cat.services.map((svc) => (
                                          <button
                                            key={svc.slug}
                                            onClick={() => handleServiceClick(svc.slug)}
                                            className="w-full flex items-center py-2 px-2.5 rounded-[2px] text-[12.5px] text-white/75 hover:text-white hover:bg-white/[0.1] font-normal transition-colors text-left cursor-pointer"
                                          >
                                            <span className="leading-snug">{svc.title}</span>
                                          </button>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}

                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full mt-2 flex items-center justify-center gap-1.5 py-2.5 rounded-[3px] bg-white/[0.1] hover:bg-white/[0.16] border border-white/20 text-white text-[12px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            View All Services
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* ── Flat Links ── */}
                {flatMobileNavLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.045, duration: 0.35, ease }}
                    className="border-b border-white/[0.12]"
                  >
                    <button
                      onClick={() => handleNavClick(item.target)}
                      className="w-full flex items-center justify-start py-3.5 group text-left cursor-pointer"
                    >
                      <div>
                        <p className="text-[14px] font-bold uppercase tracking-wider text-white group-hover:text-white transition-colors">{item.label}</p>
                        <p className="text-[11.5px] text-white/50 group-hover:text-white/75 mt-0.5 transition-colors">{item.sub}</p>
                      </div>
                    </button>
                  </motion.div>
                ))}

                {/* ── Consultation CTA ── */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + flatMobileNavLinks.length * 0.045, duration: 0.35, ease }}
                  className="pt-5 pb-2"
                >
                  <button
                    onClick={() => handleNavClick('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#F5A623] hover:bg-[#e0961f] active:scale-[0.99] text-[#071930] text-[13px] font-extrabold uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-md cursor-pointer group"
                  >
                    <span>Book a Consultation</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </motion.div>

                {/* ── Mobile Login Button (White button with Blue text) ── */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14 + flatMobileNavLinks.length * 0.045, duration: 0.35, ease }}
                  className="pt-1 pb-6"
                >
                  <a
                    href="https://login.intactic.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-100 active:scale-[0.99] text-[#115FC9] text-[13px] font-extrabold uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-md cursor-pointer group"
                  >
                    <span>Login</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
