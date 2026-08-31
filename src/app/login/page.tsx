"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  Loader2,
  AlertCircle,
  Globe,
  Users,
  ChevronRight,
} from "lucide-react";

const BLUE_LOGO = "https://res.cloudinary.com/ti1ep7pl/image/upload/f_auto,q_auto/v1787876594/intactic-blue.png";
const GENERIC_AUTH_ERROR = "Invalid email or password. Please try again.";

type View = "select" | "client-form" | "redirecting";
type RedirectTarget = "client" | "admin";

export default function UnifiedLoginPage() {
  const supabase = createClient();
  const [view, setView] = useState<View>("select");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirectTarget, setRedirectTarget] = useState<RedirectTarget | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        await handleRedirect(session.user.id, session.user.email || "");
      }
    };
    checkSession();
  }, []);

  const handleRedirect = useCallback(
    async (userId: string, userEmail: string) => {
      setView("redirecting");
      try {
        const { data: client } = await supabase
          .from("clients")
          .select("id")
          .eq("supabase_user_id", userId)
          .single();
        if (client) {
          setRedirectTarget("client");
          setTimeout(() => {
            window.location.href = "https://client.intactic.net/portal";
          }, 1200);
        } else {
          setRedirectTarget("admin");
          setTimeout(() => {
            window.location.href = `https://admin.intactic.net/login?email=${encodeURIComponent(userEmail)}`;
          }, 1200);
        }
      } catch {
        setRedirectTarget("admin");
        setTimeout(() => {
          window.location.href = `https://admin.intactic.net/login?email=${encodeURIComponent(userEmail)}`;
        }, 1200);
      }
    },
    [supabase]
  );

  const handleClientSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!supabase) {
      setError("Service is not configured. Please contact the administrator.");
      setLoading(false);
      return;
    }
    const { error: signInError, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (signInError) {
      setError(GENERIC_AUTH_ERROR);
      return;
    }
    if (data.user) await handleRedirect(data.user.id, data.user.email || "");
  };

  const handleManagementClick = () => {
    setView("redirecting");
    setRedirectTarget("admin");
    setTimeout(() => {
      window.location.href = "https://admin.intactic.net/login";
    }, 1200);
  };

  // ─── Redirecting overlay ───────────────────────────────────────
  if (view === "redirecting" && redirectTarget) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="bg-white border border-slate-200/90 rounded-xl p-10 shadow-lg relative z-10 flex flex-col items-center gap-5">
          <Loader2 className="w-10 h-10 text-[#115FC9] animate-spin" />
          <div className="text-center">
            <p className="text-lg font-bold text-slate-950 tracking-tight">
              {redirectTarget === "client"
                ? "Opening Client Portal\u2026"
                : "Redirecting to Admin Panel\u2026"}
            </p>
            <p className="text-sm text-slate-400 mt-1.5 font-mono">
              {redirectTarget === "client"
                ? "client.intactic.net/portal"
                : "admin.intactic.net"}
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ─── Client login form ─────────────────────────────────────────
  if (view === "client-form") {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-xl p-8 shadow-lg relative z-10">
          <button
            type="button"
            onClick={() => { setView("select"); setError(""); }}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#115FC9] transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to portal selection
          </button>

          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#115FC9]/10 flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-[#115FC9]" />
            </div>
            <h2 className="text-xl font-bold text-slate-950 tracking-tight">Client Login</h2>
            <p className="text-sm text-slate-400 mt-1">Sign in to access your project dashboard</p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200/80 flex items-start gap-2.5 text-red-700 text-xs font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleClientSignIn} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email" required autoComplete="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#115FC9] focus:ring-2 focus:ring-[#115FC9]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"} required autoComplete="current-password"
                  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#115FC9] focus:ring-2 focus:ring-[#115FC9]/20 transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-[#115FC9] hover:bg-[#0E52AD] active:bg-[#0A4290] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all disabled:opacity-60 cursor-pointer text-sm mt-2">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>Sign In</span><ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-mono gap-1.5">
            <Globe className="w-3 h-3" /><span>client.intactic.net</span>
          </div>
        </div>
      </main>
    );
  }

  // ─── Card selection view ───────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BLUE_LOGO} alt="INTACTIC" className="h-8 w-auto object-contain mb-3" width={160} height={32} />
          <h1 className="text-2xl font-bold text-slate-950 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-400 mt-1.5">Select your portal to continue</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Client Portal Card */}
          <button type="button" onClick={() => setView("client-form")}
            className="group bg-white border border-slate-200/90 hover:border-[#115FC9]/40 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#115FC9]/5 transition-all duration-300 text-left cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#115FC9]/10 group-hover:bg-[#115FC9]/15 flex items-center justify-center mb-4 transition-colors">
              <Users className="w-6 h-6 text-[#115FC9]" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#115FC9] transition-colors">Client Login</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">Access your projects, milestones &amp; invoices</p>
            <div className="flex items-center gap-1 mt-4 text-[#115FC9] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
              <span>Continue</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Management Portal Card */}
          <button type="button" onClick={handleManagementClick}
            className="group bg-white border border-slate-200/90 hover:border-[#F5A623]/40 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#F5A623]/5 transition-all duration-300 text-left cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 group-hover:bg-[#F5A623]/15 flex items-center justify-center mb-4 transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#F5A623]" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#F5A623] transition-colors">Management Login</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">Admin panel for team management &amp; operations</p>
            <div className="flex items-center gap-1 mt-4 text-[#F5A623] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
              <span>Continue</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center text-[11px] text-slate-400 gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          <a href="https://client.intactic.net" className="hover:text-[#115FC9] transition-colors font-medium">intactic.net</a>
        </div>
      </div>
    </main>
  );
}
