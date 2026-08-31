/**
 * Client-safe icon resolver + serializable types for services.
 * No server-only imports (no supabase/server, no next/headers).
 */
import {
  Code2, Palette, TrendingUp, Settings, ShieldCheck,
  Smartphone, Globe, MonitorSmartphone, Layout, ShoppingCart,
  FileText, CreditCard, Plug, Rocket, Bot, TestTube, Database,
  Wrench, Cloud, Server, PenTool, Layers, Film, Package,
  Printer, BookOpen, Camera, Megaphone, Search, BarChart3,
  Mail, MessageSquare, Users, Store, Target, Eye, Briefcase,
  LineChart, Box, DollarSign, PieChart, PanelTop, ArrowRightLeft,
  Lock, Languages, FileCheck, Star, MapPin, Calendar, GraduationCap,
  Music, Presentation, Play, Bell,
  type LucideProps,
} from 'lucide-react';

type IconComponent = React.ComponentType<LucideProps>;

// ─── Serializable types (no ReactNode, safe for server→client) ────

export interface ServiceFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  categoryId: string;
  categoryTitle: string;
  tagName: string;
  icon: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: ServiceFeature[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
  technologies: string[];
}

export interface CategoryItem {
  id: string;
  icon: string;
  title: string;
  shortTitle: string;
  tagline: string;
  color: string;
  services: ServiceItem[];
}

// ─── Icon name → Lucide component ─────────────────────────────────

const iconMap: Record<string, IconComponent> = {
  Code2, Palette, TrendingUp, Settings, ShieldCheck,
  Smartphone, Globe, MonitorSmartphone, Layout, ShoppingCart,
  FileText, CreditCard, Plug, Rocket, Bot, TestTube, Database,
  Wrench, Cloud, Server, PenTool, Layers, Film, Package,
  Printer, BookOpen, Camera, Megaphone, Search, BarChart3,
  Mail, MessageSquare, Users, Store, Target, Eye, Briefcase,
  LineChart, Box, DollarSign, PieChart, PanelTop, ArrowRightLeft,
  Lock, Languages, FileCheck, Star, MapPin, Calendar, GraduationCap,
  Music, Presentation, Play, Bell,

  // Short aliases (DB icon_name values)
  Code: Code2, Grid: Settings, Shield: ShieldCheck,
};

export function resolveIcon(name: string, size = 20) {
  const Comp = iconMap[name] ?? Code2;
  return <Comp size={size} />;
}
