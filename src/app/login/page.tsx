"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

export default function UnifiedLoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTarget, setRedirectTarget] = useState<"client" | "admin" | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await handleRedirect(session.user.id);
      }
    };
    checkSession();
  }, []);

  const handleRedirect = async (userId: string) => {
    setRedirecting(true);
    try {
      const { data: client } = await supabase
        .from("clients")
        .select("id, company_name")
        .eq("supabase_user_id", userId)
        .single();

      if (client) {
        setRedirectTarget("client");
        setTimeout(() => {
          window.location.href = "https://client.intactic.net/portal";
        }, 800);
      } else {
        setRedirectTarget("admin");
        setTimeout(() => {
          window.location.href = `https://admin.intactic.net/login?email=${encodeURIComponent(email)}`;
        }, 800);
      }
    } catch {
      setRedirectTarget("admin");
      setTimeout(() => {
        window.location.href = `https://admin.intactic.net/login?email=${encodeURIComponent(email)}`;
      }, 800);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message || "Invalid credentials. Please try again.");
      setLoading(false);
    } else if (data.user) {
      await handleRedirect(data.user.id);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#115FC9]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#F5A623]/5 blur-3xl pointer-events-none" />

      {redirecting && redirectTarget && (
        <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-10 h-10 text-[#115FC9] animate-spin" />
          <div className="text-center">
            <p className="text-lg font-bold text-slate-900">
              {redirectTarget === "client" ? "Opening Client Portal" : "Opening Admin Panel"}
            </p>
            <p className="text-sm text-slate-500 mt-1 font-mono">
              {redirectTarget === "client" ? "client.intactic.net/portal" : "admin.intactic.net"}
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-[420px] relative z-10">
        <div className="text-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BLUE_LOGO} alt="INTACTIC" className="h-9 w-auto mx-auto mb-5 object-contain" width={180} height={36} />
          <h1 className="text-2xl font-bold text-slate-950 tracking-tight uppercase">Sign In</h1>
          <p className="text-sm text-slate-500 mt-1.5">Access your workspace below</p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-lg shadow-xl shadow-slate-200/50 p-7">
          {error && (
            <div className="mb-5 p-3 rounded-md bg-red-50 border border-red-200/80 flex items-start gap-2.5 text-red-700 text-xs font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-md py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#115FC9] focus:ring-2 focus:ring-[#115FC9]/10 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type={showPassword ? "text" : "password"} required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-md py-2.5 pl-9 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#115FC9] focus:ring-2 focus:ring-[#115FC9]/10 transition-all" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-[#115FC9] hover:bg-[#0D4DA8] text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-60 cursor-pointer text-xs uppercase tracking-widest mt-1">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>Sign In</span><ArrowRight className="w-3.5 h-3.5" /></>}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Redirects to</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a href="https://client.intactic.net/portal" className="group flex flex-col items-center gap-2 p-3.5 rounded-lg border border-slate-200 hover:border-[#115FC9]/30 hover:bg-[#115FC9]/[0.02] transition-all text-center">
              <div className="w-9 h-9 rounded-lg bg-[#115FC9]/10 flex items-center justify-center group-hover:bg-[#115FC9]/15 transition-colors">
                <Briefcase className="text-[#115FC9]" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-tight">Client Portal</p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-mono">client.intactic.net</p>
              </div>
            </a>
            <a href="https://admin.intactic.net" className="group flex flex-col items-center gap-2 p-3.5 rounded-lg border border-slate-200 hover:border-[#F5A623]/30 hover:bg-[#F5A623]/[0.02] transition-all text-center">
              <div className="w-9 h-9 rounded-lg bg-[#F5A623]/10 flex items-center justify-center group-hover:bg-[#F5A623]/15 transition-colors">
                <ShieldCheck className="text-[#F5A623]" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-tight">Admin Panel</p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-mono">admin.intactic.net</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between text-[11px] text-slate-400 font-mono px-1">
          <a href="https://client.intactic.net" className="flex items-center gap-1.5 text-[#115FC9] hover:text-[#0D4DA8] font-bold transition-colors">
            <Globe className="w-3.5 h-3.5" /><span>intactic.net</span>
          </a>
          <span>© {new Date().getFullYear()} Intactic</span>
        </div>
      </div>
    </main>
  );
}
