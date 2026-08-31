'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface LenisInstance {
  raf: (time: number) => void;
  scrollTo: (y: number, opts: { immediate: boolean }) => void;
  destroy: () => void;
  _cleanup?: () => void;
  [key: string]: any;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    // Skip on mobile/touch devices — Lenis is too heavy for mobile CPUs
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      return;
    }

    // Respect user accessibility preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Dynamic import Lenis only on desktop
    let destroyed = false;
    import('lenis').then(({ default: Lenis }) => {
      if (destroyed) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.2,
        infinite: false,
      });

      lenisRef.current = lenis;

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      (lenis as any)._cleanup = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    });

    return () => {
      destroyed = true;
      if (lenisRef.current?._cleanup) {
        lenisRef.current._cleanup();
        lenisRef.current = null;
      }
    };
  }, []);

  // Reset scroll on route transitions
  useEffect(() => {
    if (lenisRef.current?.scrollTo) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
