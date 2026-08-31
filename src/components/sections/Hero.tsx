'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Headphones, ShieldCheck, Clock } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 5500;

// Module-level flag: first time Hero mounts, skip the fade-in animation so
// the headline text is immediately visible in SSR HTML (critical for LCP).
// Reset to false after first mount so slide transitions animate normally.
let heroFirstMount = true;

/* =================================================================
   SLIDE DATA
   ================================================================= */
interface HeadlineLine {
  text: string;
  highlight?: boolean;
  color?: string;
  underline?: boolean;
}

interface SlideData {
  id: string;
  bgGradient: string;
  glow1: string;
  glow2: string;
  badge: { label: string; accent?: string };
  headline: HeadlineLine[];
  description: string;
  cta1: { text: string; href: string };
  cta2: { text: string; href: string };
  accentColor: string;
  btnBg: string;
  btnHoverBg: string;
  btnTextColor: string;
  geoColor: string;
  isPrimary: boolean;
}

const SLIDES: SlideData[] = [
  {
    id: 'digital-solutions',
    bgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(17,95,201,0.025), transparent 70%), #070d19',
    glow1: 'rgba(17,95,201,0.07)',
    glow2: 'rgba(245,166,35,0.04)',
    badge: { label: 'Next-Gen Engineering & AI Systems', accent: 'Enterprise Ready \u2192' },
    headline: [
      { text: 'We Engineer' },
      { text: 'DIGITAL SOLUTIONS' },
      { text: 'That Drive ' },
      { text: 'REAL GROWTH', highlight: true, color: '#115fc9', underline: true },
    ],
    description:
      'From strategy to deployment, we deliver global-standard software, intelligent automation, and growth systems that transform businesses into market leaders.',
    cta1: { text: 'Start a Project', href: '/contact' },
    cta2: { text: 'Explore Services', href: '/services' },
    accentColor: '#115fc9',
    btnBg: '#F5A623',
    btnHoverBg: '#ffc44d',
    btnTextColor: '#0a1628',
    geoColor: '#115fc9',
    isPrimary: true,
  },
  {
    id: 'intelligent-systems',
    bgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(6,182,212,0.025), transparent 70%), #050d11',
    glow1: 'rgba(6,182,212,0.065)',
    glow2: 'rgba(59,130,246,0.035)',
    badge: { label: 'AI-Powered Automation & Intelligence' },
    headline: [
      { text: 'We Build' },
      { text: 'INTELLIGENT SYSTEMS' },
      { text: 'Built for ' },
      { text: "TOMORROW'S ENTERPRISE", highlight: true, color: '#06b6d4' },
    ],
    description:
      'Machine learning, conversational AI, and process automation engineered into your core operations \u2014 turning data into decisions and workflows into competitive advantages.',
    cta1: { text: 'Explore AI Solutions', href: '/services/ai-automation-integration' },
    cta2: { text: 'View Case Studies', href: '/case-studies' },
    accentColor: '#06b6d4',
    btnBg: '#06b6d4',
    btnHoverBg: '#22d3ee',
    btnTextColor: '#ffffff',
    geoColor: '#06b6d4',
    isPrimary: false,
  },
  {
    id: 'growth-engines',
    bgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(245,166,35,0.02), transparent 70%), #0c0a05',
    glow1: 'rgba(245,166,35,0.055)',
    glow2: 'rgba(249,115,22,0.035)',
    badge: { label: 'Enterprise Growth & Market Leadership' },
    headline: [
      { text: 'We Architect' },
      { text: 'GROWTH ENGINES' },
      { text: 'That Deliver ' },
      { text: 'COMPOUND RESULTS', highlight: true, color: '#F5A623' },
    ],
    description:
      "Full-funnel marketing, custom ERP ecosystems, and data-driven strategies that don't just grow your business \u2014 they compound, year after year.",
    cta1: { text: 'Scale Your Business', href: '/contact' },
    cta2: { text: 'See Our Work', href: '/case-studies' },
    accentColor: '#F5A623',
    btnBg: '#F5A623',
    btnHoverBg: '#ffc44d',
    btnTextColor: '#0a1628',
    geoColor: '#F5A623',
    isPrimary: false,
  },
];

/* =================================================================
   ANIMATION VARIANTS
   ================================================================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

/* =================================================================
   GEOMETRIC DECORATIONS
   ================================================================= */
function SlideDecorations({ color, full = false }: { color: string; full?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute -top-16 right-[8%] w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] animate-rotate-slow"
        viewBox="0 0 200 200"
        fill="none"
        style={{ color: full ? `${color}14` : `${color}0A` }}
      >
        <polygon points="100,8 185,54 185,146 100,192 15,146 15,54" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="100,35 160,62 160,138 100,165 40,138 40,62" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 6" />
      </svg>

      {full && (
        <>
          <div className="absolute top-[22%] left-[4%] lg:left-[6%] animate-float-slow" style={{ animationDelay: '0.5s' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="8" width="32" height="32" stroke={color} strokeWidth="0.8" opacity="0.20" transform="rotate(45 24 24)" />
            </svg>
          </div>
          <div className="absolute top-[30%] right-[12%] lg:right-[18%] animate-float-medium" style={{ animationDelay: '1.5s' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <polygon points="18,3 34,33 2,33" stroke={color} strokeWidth="0.8" opacity="0.16" />
            </svg>
          </div>
          <svg className="absolute top-[12%] left-[45%] w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12 2V22M2 12H22" stroke={color} strokeWidth="0.8" opacity="0.14" />
          </svg>
          <svg className="absolute bottom-[25%] right-[4%] w-40 h-40" viewBox="0 0 200 200" fill="none">
            <line x1="0" y1="100" x2="200" y2="100" stroke={color} strokeWidth="0.5" strokeDasharray="6 8" opacity="0.08" />
            <line x1="100" y1="0" x2="100" y2="200" stroke={color} strokeWidth="0.5" strokeDasharray="6 8" opacity="0.08" />
          </svg>
        </>
      )}

      <div className="absolute bottom-[18%] left-[10%] lg:left-[14%] animate-pulse-geo">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke={color} strokeWidth="0.4" opacity="0.08" />
          <circle cx="60" cy="60" r="42" stroke={color} strokeWidth="0.4" opacity="0.06" strokeDasharray="4 4" className="animate-dash" />
          <circle cx="60" cy="60" r="28" stroke={color} strokeWidth="0.3" opacity="0.06" />
        </svg>
      </div>
    </div>
  );
}

/* =================================================================
   DOT NAVIGATION
   ================================================================= */
function DotNav({ total, active, onSelect }: { total: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="relative z-20 flex items-center justify-center gap-1">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          <span
            className={
              active === i
                ? 'block w-3.5 h-1 sm:w-6 sm:h-2 rounded-full bg-[#F5A623] transition-all duration-300'
                : 'block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300'
            }
          />
        </button>
      ))}
    </div>
  );
}

/* =================================================================
   HERO SECTION
   ================================================================= */
export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const isPaused = useRef(false);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActive(prev => (prev + 1) % SLIDES.length);
      }
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    startTimer();
    // Mark first mount complete so subsequent slides animate in.
    heroFirstMount = false;
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = useCallback(
    (i: number) => {
      setActive(i);
      startTimer();
    },
    [startTimer],
  );

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? (active + 1) % SLIDES.length : (active - 1 + SLIDES.length) % SLIDES.length);
      }
    },
    [active, goTo],
  );

  const slide = SLIDES[active];

  return (
    <section
      className="relative h-[100dvh] min-h-[600px] flex flex-col overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Permanent static layers */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: '#070d19' }} />
      <div className="absolute inset-0 geo-grid-dark opacity-[0.22] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

      {/* Slide Backgrounds (crossfade) */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0 will-change-[opacity]"
          initial={false}
          animate={{ opacity: active === i ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden={active !== i}
        >
          <div className="absolute inset-0" style={{ background: s.bgGradient }} />
          {s.isPrimary && (
            <div className="absolute bottom-[18%] right-[6%] sm:right-[8%] pointer-events-none hidden sm:block">
              <span className="text-[80px] lg:text-[120px] font-display font-black leading-none select-none" style={{ color: `${s.accentColor}08` }}>
                01
              </span>
            </div>
          )}

          <div
            className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full blur-[30px] sm:blur-[50px] lg:blur-[100px] pointer-events-none"
            style={{ background: s.glow1, willChange: 'opacity' }}
          />
          <div
            className="absolute bottom-[0%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[25px] sm:blur-[40px] lg:blur-[80px] pointer-events-none"
            style={{ background: s.glow2, willChange: 'opacity' }}
          />

          <SlideDecorations color={s.geoColor} full={s.isPrimary} />
        </motion.div>
      ))}

      {/* ══ Slide Content ══ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-6 sm:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            variants={containerVariants}
            initial={heroFirstMount ? false : 'hidden'}
            animate="visible"
            exit="exit"
            className="w-full max-w-3xl lg:max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/[0.04] text-[10.5px] font-mono font-bold tracking-[0.14em] uppercase text-white/60">
                {slide.badge.label}
                {slide.badge.accent && (
                  <span className="text-[#F5A623]">{slide.badge.accent}</span>
                )}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial={false}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.75rem] font-bold uppercase leading-[1.08] tracking-[-0.02em] text-white"
            >
              {slide.headline.map((line, li) => (
                <span key={li} className="block">
                  {line.highlight ? (
                    <span className="relative inline-block" style={{ color: line.color }}>
                      {line.text}
                      {line.underline && (
                        <svg
                          className="absolute -bottom-1 left-0 w-full h-2"
                          viewBox="0 0 300 12"
                          preserveAspectRatio="none"
                          fill="none"
                        >
                          <path d="M2 9 C80 2, 220 2, 298 9" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
                        </svg>
                      )}
                    </span>
                  ) : (
                    line.text
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-base lg:text-[17px] text-white/70 leading-relaxed max-w-2xl font-body"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3.5">
              <Link
                href={slide.cta1.href}
                className="group relative inline-flex items-center justify-center h-10 sm:h-11 px-6 sm:px-7 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.06em] rounded-[3px] transition-all duration-200 shadow-xs hover:shadow-lg cursor-pointer active:scale-[0.98] border border-black/10 overflow-hidden"
                style={{ backgroundColor: slide.btnBg, color: slide.btnTextColor }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = slide.btnHoverBg; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = slide.btnBg; }}
              >
                <span>{slide.cta1.text}</span>
                <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href={slide.cta2.href}
                className="group relative inline-flex items-center justify-center h-10 sm:h-11 px-6 sm:px-7 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.06em] text-white/80 border border-white/20 hover:border-white/40 hover:text-white rounded-[3px] backdrop-blur-xs transition-all duration-200 hover:bg-white/[0.06] cursor-pointer active:scale-[0.98]"
              >
                <span>{slide.cta2.text}</span>
                <ArrowRight
                  className="ml-2 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: slide.accentColor }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom: Dot Navigation */}
      <div className="relative z-20 flex items-center justify-center pb-[max(env(safe-area-inset-bottom),1.25rem)] sm:pb-[max(env(safe-area-inset-bottom),1.75rem)]">
        <DotNav total={SLIDES.length} active={active} onSelect={goTo} />
      </div>
    </section>
  );
}
