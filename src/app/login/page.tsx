"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  Briefcase,
  Loader2,
  AlertCircle,
  Globe,
} from "lucide-react";

const BLUE_LOGO = "https://res.cloudinary.com/ti1ep7pl/image/upload/f_auto,q_auto/v1787876594/intactic-blue.png";
const GENERIC_AUTH_ERROR = "Invalid email or password. Please try again.";

export default function UnifiedLoginPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTarget, setRedirectTarget] = useState<"client" | "admin" | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) await handleRedirect(session.user.id);
    };
    checkSession();
  }, []);

  const handleRedirect = async (userId: string) => {
    setRedirecting(true);
    try {
      const { data: client } = await supabase
        .from("clients")
        .select("id")
        .eq("supabase_user_id", userId)
        .single();
      if (client) {
        setRedirectTarget("client");
        setTimeout(() => { window.location.href = "https://client.intactic.net/portal"; }, 900);
      } else {
        setRedirectTarget("admin");
        setTimeout(() => { window.location.href = `https://admin.intactic.net/login?email=${encodeURIComponent(email)}`; }, 900);
      }
    } catch {
      setRedirectTarget("admin");
      setTimeout(() => { window.location.href = `https://admin.intactic.net/login?email=${encodeURIComponent(email)}`; }, 900);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!supabase) {
      setError("Service is not configured. Please contact the administrator.");
      setLoading(false);
      return;
    }
    const { error: signInError, data } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (signInError) {
      setError(GENERIC_AUTH_ERROR);
      return;
    }
    if (data.user) await handleRedirect(data.user.id);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background Geometric Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Redirecting Overlay */}
      {redirecting && redirectTarget && (
        <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-10 h-10 text-[#115FC9] animate-spin" />
          <div className="text-center">
            <p className="text-lg font-bold text-slate-950 tracking-tight uppercase">
              {redirectTarget === "client" ? "Opening Client Portal" : "Opening Admin Panel"}
            </p>
            <p className="text-sm text-slate-500 mt-1 font-mono">
              {redirectTarget === "client" ? "client.intactic.net/portal" : "admin.intactic.net"}
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-md p-8 shadow-lg relative z-10">
        {/* Official Header with Intactic Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#115FC9]/5 border border-[#115FC9]/15 mb-4">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#115FC9" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#115FC9]">Unified Portal</span>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BLUE_LOGO} alt="INTACTIC" className="h-7 w-auto object-contain mb-2" width={160} height={28} />

          <h2 className="text-xl font-extrabold text-slate-950 tracking-tight uppercase leading-tight mt-1">
            EXECUTIVE CONTROL, <br />
            <span className="text-[#115FC9]">ONE PARTNER</span>
          </h2>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 p-3.5 rounded-md bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@intactic.net"
                className="w-full bg-slate-50 border border-slate-300 rounded-md py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#115FC9] focus:ring-1 focus:ring-[#115FC9] transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type={showPassword ? "text" : "password"} required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                className="w-full bg-slate-50 border border-slate-300 rounded-md py-2.5 pl-9 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#115FC9] focus:ring-1 focus:ring-[#115FC9] transition-all" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-[#115FC9] hover:bg-[#0D4DA8] text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer text-[11px] uppercase tracking-[0.15em] mt-2">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>Sign In to Portal</span><ArrowRight className="w-4 h-4" /></>}
          </button>
        </form>

        {/* Portal Redirect Cards */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Access Portals</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a href="https://client.intactic.net/portal" className="group flex flex-col items-center gap-2 p-3.5 rounded-md border border-slate-200 hover:border-[#115FC9]/30 hover:bg-[#115FC9]/[0.03] transition-all text-center">
            <Briefcase className="w-5 h-5 text-[#115FC9] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs font-bold text-slate-800">Client Portal</p>
              <p className="text-[9px] text-slate-400 mt-0.5 font-mono">client.intactic.net</p>
            </div>
          </a>
          <a href="https://admin.intactic.net" className="group flex flex-col items-center gap-2 p-3.5 rounded-md border border-slate-200 hover:border-[#F5A623]/30 hover:bg-[#F5A623]/[0.03] transition-all text-center">
            <ShieldCheck className="w-5 h-5 text-[#F5A623] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs font-bold text-slate-800">Admin Panel</p>
              <p className="text-[9px] text-slate-400 mt-0.5 font-mono">admin.intactic.net</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
          <a href="https://client.intactic.net" className="flex items-center gap-1.5 text-[#115FC9] hover:underline font-bold">
            <Globe className="w-3.5 h-3.5" /><span>intactic.net</span>
          </a>
          <span>Supabase Auth</span>
        </div>
      </div>
    </main>
  );
}
