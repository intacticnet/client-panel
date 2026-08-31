'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const geometricShapes = [
  { type: 'ring', top: '15%', left: '10%', size: 70, color: 'rgba(17, 95, 201, 0.05)' },
  { type: 'ring', top: '70%', left: '82%', size: 100, color: 'rgba(17, 95, 201, 0.04)' },
  { type: 'dot', top: '25%', left: '75%', size: 5, color: 'rgba(245, 166, 35, 0.18)' },
  { type: 'dot', top: '80%', left: '20%', size: 4, color: 'rgba(17, 95, 201, 0.12)' },
  { type: 'cross', top: '88%', left: '65%', size: 18, color: 'rgba(17, 95, 201, 0.05)' },
];

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error reporting service (e.g., Sentry, DataDog)
    console.error('[Intactic Error Boundary]', error);
  }, [error]);

  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-white overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 geo-grid opacity-30" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-red-500/[0.03] to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand/[0.03] to-transparent blur-3xl" />
        {geometricShapes.map((s, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.type === 'dot' ? s.color : 'transparent',
              border: s.type === 'ring' ? `2px solid ${s.color}` : 'none',
              borderRadius: s.type === 'dot' ? '50%' : '0',
            }}
          >
            {s.type === 'cross' && (
              <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={1.5}>
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-5">
        <div className="w-full max-w-xl text-center">
          {/* Error Code */}
          <div className="relative inline-block mb-8">
            <span className="font-accent text-[120px] sm:text-[160px] lg:text-[180px] font-bold leading-none tracking-tight text-slate-100 select-none">
              500
            </span>
            <span className="absolute inset-0 flex items-center justify-center font-accent text-[120px] sm:text-[160px] lg:text-[180px] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-400 to-amber-500/60 select-none">
              500
            </span>
          </div>

          {/* Warning Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 border border-red-100 mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-red-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Something Went Wrong
          </h1>

          {/* Description */}
          <p className="text-base sm:text-[17px] text-slate-500 leading-relaxed max-w-md mx-auto mb-4">
            An unexpected error occurred. Our engineering team has been
            notified and is working on a fix.
          </p>

          {/* Error digest for debugging */}
          {error.digest && (
            <p className="text-xs text-slate-400 mb-8 font-mono">
              Error ID: {error.digest}
            </p>
          )}
          {!error.digest && <div className="mb-8" />}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-200 rounded-lg transition-all duration-200 group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Back to Homepage
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Popular Pages
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Contact', href: '/contact' },
                { label: 'About Us', href: '/about' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-brand transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex-shrink-0 py-5 border-t border-slate-100">
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Intactic Group Ltd.</span>
          <span className="text-slate-200">·</span>
          <span>info@intactic.net</span>
        </div>
      </div>
    </div>
  );
}
