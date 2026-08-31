'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Intactic Global Error]', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <div className="relative min-h-[100dvh] flex flex-col bg-white overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 geo-grid opacity-30" />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-red-500/[0.03] to-transparent blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand/[0.03] to-transparent blur-3xl" />
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

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 border border-red-100 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-red-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                Unexpected Application Error
              </h1>

              <p className="text-base sm:text-[17px] text-slate-500 leading-relaxed max-w-md mx-auto mb-4">
                A critical error occurred in the application. Please try again or
                return to the homepage.
              </p>

              {error.digest && (
                <p className="text-xs text-slate-400 mb-8 font-mono">
                  Error ID: {error.digest}
                </p>
              )}
              {!error.digest && <div className="mb-8" />}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                  Try Again
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-200 rounded-lg transition-all duration-200"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0 py-5 border-t border-slate-100">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <span>© {new Date().getFullYear()} Intactic Group Ltd.</span>
              <span className="text-slate-200">·</span>
              <span>info@intactic.net</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
