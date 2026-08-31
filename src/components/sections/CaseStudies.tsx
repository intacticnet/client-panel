import Link from 'next/link';
import { caseStudiesData } from '@/data/caseStudies';
import IntacticBadgeIcon from '@/components/shared/IntacticBadgeIcon';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const [hero, ...rest] = caseStudiesData;
  const secondaryTwo = rest.slice(0, 2);

  return (
    <section
      id="case-studies"
      className="relative py-18 sm:py-24 lg:py-28 overflow-hidden text-white bg-[#115fc9]"
    >
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 geo-grid opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/15 border border-white/25 mb-3.5 shadow-2xs">
            <IntacticBadgeIcon className="w-3.5 h-3.5 flex-shrink-0" fill="#ffffff" />
            <span className="text-xs font-bold uppercase tracking-widest text-white eyebrow-kicker">
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-[1.1]">
            Mission-Critical Systems.{' '}
            <span className="text-[#F5A623]">Proven ROI</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed font-body max-w-2xl">
            Real-world engineering results across high-throughput fintech, autonomous logistics, and clinical healthcare systems.
          </p>
        </div>

        {/* ── FEATURED HERO CASE STUDY (Curved Technical Framing Matched to Card Radius) ── */}
        <div className="relative group mb-8">
          {/* Outer Technical Corner Framing Brackets (Curved to Match Card Radius Perfectly) */}
          <div className="absolute -top-2 -left-2 w-7 h-7 border-t-[2.5px] border-l-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-tl-[14px] sm:rounded-tl-[18px] transition-all duration-300 group-hover:-top-2.5 group-hover:-left-2.5" />
          <div className="absolute -top-2 -right-2 w-7 h-7 border-t-[2.5px] border-r-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-tr-[14px] sm:rounded-tr-[18px] transition-all duration-300 group-hover:-top-2.5 group-hover:-right-2.5" />
          <div className="absolute -bottom-2 -left-2 w-7 h-7 border-b-[2.5px] border-l-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-bl-[14px] sm:rounded-bl-[18px] transition-all duration-300 group-hover:-bottom-2.5 group-hover:-left-2.5" />
          <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-[2.5px] border-r-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-br-[14px] sm:rounded-br-[18px] transition-all duration-300 group-hover:-bottom-2.5 group-hover:-right-2.5" />

          <Link
            href={`/case-studies/${hero.slug}`}
            className="block rounded-[12px] sm:rounded-[16px] overflow-hidden bg-white border-2 border-white/40 hover:border-[#F5A623] transition-all duration-300 shadow-none"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Col: Fuller Hero Visual Height */}
              <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[270px] lg:min-h-full overflow-hidden bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-300/80">
                <img
                  src={hero.heroImage}
                  alt={hero.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Single Clean Industry Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-[3px] text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/90 text-[#F5A623] border border-[#F5A623]/40 backdrop-blur-md">
                    {hero.clientIndustry}
                  </span>
                </div>
              </div>

              {/* Right Col: Soft Icy-Blue Grey Content Area (#f0f4f9) with Navy & Black Text */}
              <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#f0f4f9] group-hover:bg-[#f8fafc] transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#115fc9] uppercase tracking-wider">
                      {hero.client}
                    </span>
                    {hero.impactMetrics && hero.impactMetrics[0] && (
                      <span className="text-[10px] sm:text-xs font-mono font-extrabold text-[#071930] bg-[#115fc9]/10 border border-[#115fc9]/25 px-2.5 py-0.5 rounded-[3px]">
                        {hero.impactMetrics[0].metric} {hero.impactMetrics[0].label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold font-display text-[#071930] group-hover:text-[#115fc9] transition-colors leading-snug tracking-tight">
                    {hero.title}
                  </h3>
                </div>

                {/* Sleek Bottom Action */}
                <div className="mt-5 pt-3.5 border-t border-slate-300/80 flex items-center justify-between text-xs sm:text-sm font-bold text-[#115fc9] group-hover:text-[#071930] transition-colors">
                  <span className="tracking-wider uppercase font-mono">Read Full Case Study</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </div>
          </Link>
        </div>

        {/* ── SECONDARY ROW: BOTH 2 NAVY CARDS INSIDE A WHITE MASTER FRAME ── */}
        <div className="relative group mb-12">
          {/* Master Outer Technical Corner Framing Brackets around BOTH cards */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-[2.5px] border-l-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-tl-[14px] sm:rounded-tl-[18px] transition-all duration-300 group-hover:-top-2.5 group-hover:-left-2.5" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-[2.5px] border-r-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-tr-[14px] sm:rounded-tr-[18px] transition-all duration-300 group-hover:-top-2.5 group-hover:-right-2.5" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-[2.5px] border-l-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-bl-[14px] sm:rounded-bl-[18px] transition-all duration-300 group-hover:-bottom-2.5 group-hover:-left-2.5" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[2.5px] border-r-[2.5px] border-[#F5A623] z-20 pointer-events-none rounded-br-[14px] sm:rounded-br-[18px] transition-all duration-300 group-hover:-bottom-2.5 group-hover:-right-2.5" />

          {/* Master Shared Outer Frame Container (WHITE Background Container) */}
          <div className="rounded-[12px] sm:rounded-[16px] overflow-hidden bg-white p-2.5 sm:p-3.5 border-2 border-white/60 hover:border-white transition-all duration-300 shadow-xl">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {secondaryTwo.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group/card block rounded-[8px] sm:rounded-[12px] overflow-hidden bg-[#071930] hover:bg-[#0a2540] border border-[#071930] transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Image Visual */}
                    <div className="relative h-28 sm:h-44 lg:h-52 w-full overflow-hidden bg-slate-950 border-b border-white/15">
                      <img
                        src={cs.heroImage}
                        alt={cs.title}
                        width={400}
                        height={300}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Industry Badge */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-[2px] sm:rounded-[3px] text-[8px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider bg-slate-950/90 text-[#F5A623] border border-[#F5A623]/40 backdrop-blur-md">
                          {cs.clientIndustry.split('&')[0].trim()}
                        </span>
                      </div>
                    </div>

                    {/* Content Area (Corporate Navy Blue Card with White Title Only, No Description) */}
                    <div className="p-3 sm:p-5 lg:p-6 bg-[#071930] group-hover/card:bg-[#0a2540] transition-colors">
                      <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                        <span className="text-[10px] sm:text-xs font-bold font-mono text-[#F5A623] uppercase tracking-wider">
                          {cs.client}
                        </span>
                        {cs.impactMetrics && cs.impactMetrics[0] && (
                          <span className="text-[8px] sm:text-[9.5px] font-mono font-extrabold text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/30 px-1.5 sm:px-2 py-0.5 rounded-[2px] sm:rounded-[3px] truncate max-w-[80px] sm:max-w-none">
                            {cs.impactMetrics[0].metric}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs sm:text-lg lg:text-xl font-extrabold font-display text-white group-hover/card:text-[#F5A623] transition-colors leading-snug tracking-tight">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  {/* Sleek Bottom Action */}
                  <div className="px-3 sm:px-5 lg:px-6 pb-2.5 sm:pb-4 pt-2 sm:pt-3 bg-[#071930] group-hover/card:bg-[#0a2540] border-t border-white/15 flex items-center justify-between text-[9.5px] sm:text-xs font-bold text-[#F5A623] group-hover/card:text-white transition-colors">
                    <span className="tracking-wider uppercase font-mono text-[9px] sm:text-[11px]">Read Case Study</span>
                    <ArrowRight size={12} className="group-hover/card:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Explore All Button at Bottom ── */}
        <div className="flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[4px] text-xs sm:text-sm font-bold uppercase tracking-wider text-navy bg-[#F5A623] hover:bg-[#ffc44d] transition-colors shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
