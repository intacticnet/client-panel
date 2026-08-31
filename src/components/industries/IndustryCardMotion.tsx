'use client';

/**
 * IndustryCardMotion — Optimised Pure-CSS SVG Animations
 *
 * Performance rules:
 * - MAX 4 animated elements per card (was 8–15, now 2–4)
 * - Only `transform` + `opacity` in keyframes → GPU compositor only
 * - `ind-anim` class → paused by IntersectionObserver when off-screen
 * - `will-change` on ONE primary element per card only
 * - Wrapped in React.memo → never re-renders after mount
 */
import { memo, useEffect, useRef } from 'react';

interface Props { motionType: string; }

const anim = (name: string, dur = '3s', timing = 'ease-in-out', delay = '0s') =>
  `${name} ${dur} ${timing} ${delay} infinite`;

function IndustryCardMotionInner({ motionType }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Pause all ind-anim children initially
    el.querySelectorAll<HTMLElement>('.ind-anim').forEach((child) => {
      child.style.animationPlayState = 'paused';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const state = entry.isIntersecting ? 'running' : 'paused';
        el.querySelectorAll<HTMLElement>('.ind-anim').forEach((child) => {
          child.style.animationPlayState = state;
        });
      },
      { rootMargin: '100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl" aria-hidden="true">

      {/* ── EDTECH: Brain nodes + 2 traveling dots ── */}
      {motionType === 'edtech-nodes' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="55" y1="160" x2="160" y2="100" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="160" y1="100" x2="260" y2="60"  stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="160" y1="100" x2="255" y2="168" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="55"  y1="160" x2="108" y2="55"  stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          {/* Traveling dots */}
          <circle className="ind-anim" cx="55" cy="160" r="3" fill="white"
            style={{ animation: anim('ind-dot-loop','2.8s','linear'), ['--dx' as string]:'105px', ['--dy' as string]:'-60px' } as React.CSSProperties} />
          <circle className="ind-anim" cx="160" cy="100" r="3" fill="white"
            style={{ animation: anim('ind-dot-loop','3.4s','linear','0.6s'), ['--dx' as string]:'100px', ['--dy' as string]:'-40px' } as React.CSSProperties} />
          {/* Static nodes */}
          {[[55,160,10],[160,100,14],[260,60,10],[255,168,9]] .map(([cx,cy,r],i) => (
            <g key={i}>
              <circle className="ind-anim" cx={cx} cy={cy} r={r+8} fill="none"
                stroke="rgba(255,255,255,0.25)" strokeWidth="1"
                style={{ animation: anim('ind-pulse-ring',`${2.5+i*0.4}s`,'ease-in-out',`${i*0.2}s`), transformOrigin:`${cx}px ${cy}px` }} />
              <circle cx={cx} cy={cy} r={r} fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" />
            </g>
          ))}
        </svg>
      )}

      {/* ── E-COMMERCE: Bar chart + scan laser ── */}
      {motionType === 'ecommerce-checkout' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          {[{x:20,h:130,a:'ind-eq-a'},{x:64,h:100,a:'ind-eq-b'},{x:108,h:72,a:'ind-eq-c'},
            {x:152,h:55,a:'ind-eq-d'},{x:196,h:95,a:'ind-eq-e'},{x:240,h:122,a:'ind-eq-a'},{x:280,h:148,a:'ind-eq-b'}]
            .map(({x,h,a},i) => (
            <rect className="ind-anim" key={i}
              x={x} y={185-h} width="24" height={h} rx="3"
              fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"
              style={{ animation: anim(a,`${1.7+i*0.15}s`,'ease-in-out',`${i*0.08}s`), transformOrigin:`${x+12}px 185px` }} />
          ))}
          <line className="ind-anim" x1="8" y1="55" x2="305" y2="55"
            stroke="rgba(255,255,255,0.72)" strokeWidth="1.5"
            style={{ animation: anim('ind-scan-v','3s','ease-in-out') }} />
        </svg>
      )}

      {/* ── HEALTHCARE: ECG trace only — single most impactful element ── */}
      {motionType === 'health-ecg' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          {[50,100,150].map(y => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />)}
          <path className="ind-anim"
            d="M -20 115 L 30 115 L 65 96 L 80 154 L 96 44 L 111 130 L 148 115 L 196 92 L 212 150 L 228 38 L 243 127 L 274 115 L 340 115"
            fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="620" strokeDashoffset="620"
            style={{ animation: anim('ind-ecg','3.8s','linear'), willChange:'stroke-dashoffset,opacity' }} />
          <circle className="ind-anim" cx="96" cy="44" r="5.5" fill="rgba(255,255,255,0.95)"
            style={{ animation: anim('ind-ecg-peak','3.8s','ease-out'), transformOrigin:'96px 44px' }} />
        </svg>
      )}

      {/* ── STARTUPS: Growth curve ── */}
      {motionType === 'startup-trajectory' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="18" y1="185" x2="18"  y2="14"  stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="18" y1="185" x2="305" y2="185" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <path className="ind-anim"
            d="M 18 185 Q 82 170, 132 130 T 212 58 T 302 14 L 302 185 Z"
            fill="rgba(255,255,255,0.05)"
            style={{ animation: anim('ind-growth-fill','3s','ease-out','0.1s') }} />
          <path className="ind-anim"
            d="M 18 185 Q 82 170, 132 130 T 212 58 T 302 14"
            fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5"
            strokeDasharray="400" strokeDashoffset="400"
            style={{ animation: anim('ind-growth','3s','ease-out'), willChange:'stroke-dashoffset,opacity' }} />
        </svg>
      )}

      {/* ── SOFTWARE / SAAS: Mesh nodes + 3 packets ── */}
      {motionType === 'saas-cluster' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          {([[60,40,160,100],[160,100,262,52],[160,100,262,166],[60,40,60,162],[60,162,262,166]] as [number,number,number,number][])
            .map(([x1,y1,x2,y2],i) => (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
              <circle className="ind-anim" cx={x1} cy={y1} r="2.5" fill="rgba(255,255,255,0.85)"
                style={{ animation: anim('ind-dot-loop',`${2.6+i*0.4}s`,'linear',`${i*0.25}s`),
                  ['--dx' as string]:`${x2-x1}px`, ['--dy' as string]:`${y2-y1}px` } as React.CSSProperties} />
            </g>
          ))}
          {([[60,40],[160,100],[262,52],[60,162],[262,166]] as [number,number][]).map(([cx,cy],i) => (
            <g key={i}>
              <circle className="ind-anim" cx={cx} cy={cy} r="11"
                fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.2"
                style={{ animation: anim('ind-pulse-ring',`${2.4+i*0.3}s`,'ease-in-out',`${i*0.15}s`), transformOrigin:`${cx}px ${cy}px` }} />
              <circle cx={cx} cy={cy} r="4.5" fill="rgba(255,255,255,0.8)" />
            </g>
          ))}
        </svg>
      )}

      {/* ── MEDIA / OTT: EQ bars + progress ring ── */}
      {motionType === 'media-equalizer' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <polygon points="28,38 28,162 130,100" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" />
          {[{h:65,a:'ind-eq-a'},{h:90,a:'ind-eq-b'},{h:70,a:'ind-eq-c'},{h:105,a:'ind-eq-d'},
            {h:48,a:'ind-eq-e'},{h:118,a:'ind-eq-a'},{h:78,a:'ind-eq-b'},{h:95,a:'ind-eq-c'}].map(({h,a},i) => (
            <rect className="ind-anim" key={i}
              x={148+i*20} y={178-h} width="12" height={h} rx="2"
              fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.6"
              style={{ animation: anim(a,`${0.85+(i%5)*0.18}s`,'ease-in-out',`${i*0.06}s`), transformOrigin:`${148+i*20+6}px 178px` }} />
          ))}
          <circle className="ind-anim" cx="75" cy="100" r="46"
            stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"
            strokeDasharray="302" strokeDashoffset="302"
            style={{ animation: anim('ind-progress','5s','ease-in-out') }} />
        </svg>
      )}

      {/* ── LOGISTICS: Rotating radar + blip ── */}
      {motionType === 'logistics-radar' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          {[32,58,84].map(r => <circle key={r} cx="230" cy="105" r={r} stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />)}
          <line className="ind-anim" x1="230" y1="105" x2="314" y2="105"
            stroke="rgba(255,255,255,0.65)" strokeWidth="2"
            style={{ animation: anim('ind-spin-cw','4s','linear'), transformOrigin:'230px 105px', willChange:'transform' }} />
          <circle className="ind-anim" cx="264" cy="90" r="4" fill="rgba(255,255,255,0.9)"
            style={{ animation: anim('ind-blink','4s','ease-in-out','1.1s') }} />
          <circle className="ind-anim" cx="230" cy="105" r="80"
            stroke="rgba(255,255,255,0.0)" fill="rgba(255,255,255,0.04)"
            style={{ animation: anim('ind-spin-cw','4s','linear'), transformOrigin:'230px 105px' }} />
        </svg>
      )}

      {/* ── MANUFACTURING: Single large gear ── */}
      {motionType === 'manufacturing-gears' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <g className="ind-anim"
            style={{ animation: anim('ind-spin-cw','10s','linear'), transformOrigin:'185px 100px', willChange:'transform' }}>
            <circle cx="185" cy="100" r="68" stroke="rgba(255,255,255,0.25)" strokeWidth="5" strokeDasharray="12 8" />
            <circle cx="185" cy="100" r="22" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            {[0,45,90,135,180,225,270,315].map(deg => {
              const r = Math.PI*deg/180;
              return <line key={deg} x1={185+28*Math.cos(r)} y1={100+28*Math.sin(r)} x2={185+64*Math.cos(r)} y2={100+64*Math.sin(r)}
                stroke="rgba(255,255,255,0.5)" strokeWidth="5" strokeLinecap="round" />;
            })}
          </g>
        </svg>
      )}

      {/* ── GOVTECH: Orbiting dot + shield ── */}
      {motionType === 'govtech-shield' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <g className="ind-anim"
            style={{ animation: anim('ind-spin-cw','14s','linear'), transformOrigin:'210px 100px', willChange:'transform' }}>
            <ellipse cx="210" cy="100" rx="74" ry="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="284" cy="100" r="6" fill="rgba(255,255,255,0.85)" />
          </g>
          <polygon className="ind-anim"
            points="210,44 248,66 248,134 210,156 172,134 172,66"
            fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5"
            style={{ animation: anim('ind-shield','3.5s','ease-in-out'), transformOrigin:'210px 100px' }} />
          <path className="ind-anim"
            d="M 196 100 L 207 113 L 225 88"
            stroke="rgba(255,255,255,0.88)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
            strokeDasharray="60" strokeDashoffset="60"
            style={{ animation: anim('ind-check','4s','ease-out','0.3s') }} />
        </svg>
      )}

      {/* ── TRAVEL: Flight arc draw ── */}
      {motionType === 'travel-flight' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <circle cx="220" cy="108" r="68" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
          <ellipse cx="220" cy="108" rx="38" ry="68" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <ellipse cx="220" cy="108" rx="68" ry="24" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <path className="ind-anim"
            d="M 14 178 Q 100 28, 258 78"
            fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"
            strokeDasharray="220" strokeDashoffset="220"
            style={{ animation: anim('ind-path-draw','4s','linear') }} />
          <circle cx="14" cy="178" r="4" fill="rgba(255,255,255,0.7)" />
          <circle className="ind-anim" cx="14" cy="178" r="5" fill="white"
            style={{ animation: anim('ind-dot-loop','4s','linear'), ['--dx' as string]:'244px', ['--dy' as string]:'-100px' } as React.CSSProperties} />
          <circle className="ind-anim" cx="258" cy="78" r="5" fill="rgba(255,255,255,0.75)"
            style={{ animation: anim('ind-pulse-ring','2s','ease-in-out'), transformOrigin:'258px 78px' }} />
        </svg>
      )}

      {/* ── LEGALTECH: Rotating seal + balance ── */}
      {motionType === 'legaltech-seal' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <circle className="ind-anim" cx="210" cy="100" r="64"
            stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="9 7" fill="none"
            style={{ animation: anim('ind-spin-cw','20s','linear'), transformOrigin:'210px 100px' }} />
          <circle cx="210" cy="100" r="52" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
          <line className="ind-anim" x1="175" y1="98" x2="245" y2="102"
            stroke="rgba(255,255,255,0.72)" strokeWidth="2.5"
            style={{ animation: anim('ind-balance-bar','4s','ease-in-out'), transformOrigin:'210px 100px' }} />
          <circle cx="210" cy="100" r="3.5" fill="rgba(255,255,255,0.85)" />
          <ellipse className="ind-anim" cx="175" cy="118" rx="14" ry="4"
            fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"
            style={{ animation: anim('ind-scale-l','4s','ease-in-out') }} />
          <ellipse className="ind-anim" cx="245" cy="122" rx="14" ry="4"
            fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"
            style={{ animation: anim('ind-scale-r','4s','ease-in-out') }} />
        </svg>
      )}

      {/* ── PROPTECH: Isometric building + scan ── */}
      {motionType === 'proptech-blueprint' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <polygon points="185,28 262,70 262,148 185,190 108,148 108,70"
            fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <polygon points="185,28 262,70 185,112 108,70"
            fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
          <polygon points="108,70 185,112 185,190 108,148"
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.17)" strokeWidth="0.8" />
          <line x1="185" y1="112" x2="185" y2="190" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
          <line className="ind-anim" x1="88" y1="78" x2="268" y2="78"
            stroke="rgba(255,255,255,0.62)" strokeWidth="1.5"
            style={{ animation: anim('ind-scan-v','4s','ease-in-out') }} />
        </svg>
      )}

      {/* ── FINTECH: Ticker line + 6 candle bars ── */}
      {motionType === 'fintech-ledger' && (
        <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
          {[40,78,116,154,192,230].map((x,i) => {
            const hi=52+(i%3)*16, lo=138+(i%2)*10, op=hi+13, cl=lo-15, up=i%2===0;
            return (
              <g key={x}>
                <line x1={x+6} y1={hi} x2={x+6} y2={lo} stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
                <rect className="ind-anim"
                  x={x} y={Math.min(op,cl)} width="12" height={Math.abs(cl-op)} rx="1.5"
                  fill={up?'rgba(52,211,153,0.45)':'rgba(248,113,113,0.45)'}
                  stroke={up?'rgba(52,211,153,0.9)':'rgba(248,113,113,0.9)'} strokeWidth="0.8"
                  style={{ animation: anim('ind-candle',`${2.2+i*0.2}s`,'ease-in-out',`${i*0.18}s`), transformOrigin:`${x+6}px ${(op+cl)/2}px` }} />
              </g>
            );
          })}
          <path className="ind-anim"
            d="M -10 115 Q 40 90, 85 118 T 170 68 T 255 98 T 340 45"
            fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2"
            strokeDasharray="450" strokeDashoffset="450"
            style={{ animation: anim('ind-ticker-draw','3.5s','linear') }} />
          {[50,100,150].map(y => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />)}
        </svg>
      )}

    </div>
  );
}

export default memo(IndustryCardMotionInner);
