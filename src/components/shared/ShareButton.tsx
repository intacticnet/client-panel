'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[5px] border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:text-brand hover:border-brand/40 transition-all cursor-pointer shadow-2xs"
    >
      {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
      <span>{copied ? 'Link Copied' : 'Share Article'}</span>
    </button>
  );
}
