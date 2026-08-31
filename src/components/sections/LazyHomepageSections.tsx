'use client';

import { useRef, useState, useEffect, type ComponentType } from 'react';

/* ═══════════════════════════════════════════════════════════════════
   IntersectionObserver-based section lazy loader.

   Unlike next/dynamic ssr:false (which downloads ALL JS chunks on
   page load), this only fetches + renders a section when it scrolls
   near the viewport. On mobile this saves ~150-200 KB of unused JS
   from being downloaded during the critical rendering path.
   ═══════════════════════════════════════════════════════════════════ */

interface SectionConfig {
  importFn: () => Promise<{ default: ComponentType }>; height: string;
  bg: string;
  rootMargin?: string;
}

function LazySection({ importFn, height, bg, rootMargin = '400px 0px' }: SectionConfig) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          importFn().then((m) => setComp(() => m.default));
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [importFn, rootMargin]);

  return (
    <div className={bg}>
      <div ref={sentinelRef} />
      {Comp ? <Comp /> : <div style={{ height }} />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */

export default function LazyHomepageSections() {
  return (
    <>
      {/* Services — visible shortly after hero, slightly smaller margin */}
      <LazySection
        importFn={() => import('@/components/sections/Services')}
        height="600px"
        bg=""
        rootMargin="200px 0px"
      />

      {/* Deep below-fold — generous margin */}
      <LazySection
        importFn={() => import('@/components/sections/Industries')}
        height="900px"
        bg=""
      />

      <LazySection
        importFn={() => import('@/components/sections/TechStack')}
        height="400px"
        bg="bg-slate-50/60"
      />

      <LazySection
        importFn={() => import('@/components/sections/Products')}
        height="500px"
        bg=""
      />

      <LazySection
        importFn={() => import('@/components/sections/WhyIntactic')}
        height="700px"
        bg=""
      />

      <LazySection
        importFn={() => import('@/components/sections/About')}
        height="800px"
        bg=""
      />

      <LazySection
        importFn={() => import('@/components/sections/Insights')}
        height="600px"
        bg="bg-[#f8fafc]"
      />

      <LazySection
        importFn={() => import('@/components/sections/CaseStudies')}
        height="700px"
        bg=""
      />

      <LazySection
        importFn={() => import('@/components/sections/CTA')}
        height="500px"
        bg=""
      />

      <LazySection
        importFn={() => import('@/components/sections/Footer')}
        height="300px"
        bg=""
      />
    </>
  );
}
