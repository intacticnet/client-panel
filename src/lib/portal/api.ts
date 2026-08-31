import { createClient } from '@/utils/supabase/client';

// ── Types ──

export type ClientProfile = {
  id: string;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string | null;
  status: string;
  supabase_user_id: string;
  logo_url: string | null;
  notes: string | null;
  industry_id: string | null;
};

export type ProjectStatus = 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
export type MilestoneStatus = 'pending' | 'in_progress' | 'completed';
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';

export type Project = {
  id: string;
  client_id: string;
  title: string;
  description: string | null;
  status: ProjectStatus;
  progress: number;
  start_date: string | null;
  deadline: string | null;
  budget: number | null;
};

export type Milestone = {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  status: MilestoneStatus;
  due_date: string | null;
  sort_order: number;
};

export type Invoice = {
  id: string;
  client_id: string;
  project_id: string | null;
  invoice_number: string;
  status: InvoiceStatus;
  issue_date: string | null;
  due_date: string | null;
  subtotal: number;
  tax: number;
  total: number;
  notes: string | null;
  project_title?: string;
};

export type InvoiceItem = {
  id: string;
  invoice_id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
};

// ── Fetch Helpers ──

export async function getClientProfile(userId: string): Promise<ClientProfile | null> {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('supabase_user_id', userId)
    .single();

  if (error || !data) return null;
  return data as ClientProfile;
}

export async function getClientProjects(clientId: string): Promise<Project[]> {
  const supabase = createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return data as Project[];
}

export async function getProjectDetail(projectId: string): Promise<Project | null> {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single();

  if (error || !data) return null;
  return data as Project;
}

export async function getProjectMilestones(projectId: string): Promise<Milestone[]> {
  const supabase = createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('project_milestones')
    .select('*')
    .eq('project_id', projectId)
    .order('sort_order', { ascending: true });

  if (error || !data) return [];
  return data as Milestone[];
}

export async function getClientInvoices(clientId: string): Promise<Invoice[]> {
  const supabase = createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('invoices')
    .select('*, projects(title)')
    .eq('client_id', clientId)
    .order('issue_date', { ascending: false });

  if (error || !data) return [];
  return data.map((inv: Record<string, unknown>) => ({
    ...inv,
    project_title: (inv.projects as { title?: string } | null)?.title ?? null,
  })) as Invoice[];
}

export async function getInvoiceDetail(invoiceId: string): Promise<(Invoice & { items: InvoiceItem[] }) | null> {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('invoices')
    .select('*, projects(title)')
    .eq('id', invoiceId)
    .single();

  if (error || !data) return null;

  const invoice: Invoice & { items: InvoiceItem[] } = {
    ...data,
    project_title: (data as Record<string, unknown>).projects != null
      ? ((data as Record<string, unknown>).projects as { title: string }).title
      : null,
    items: [],
  } as Invoice & { items: InvoiceItem[] };

  // Fetch invoice items
  const { data: items, error: itemsError } = await supabase
    .from('invoice_items')
    .select('*')
    .eq('invoice_id', invoiceId)
    .order('created_at', { ascending: true });

  if (!itemsError && items) {
    invoice.items = items as InvoiceItem[];
  }

  return invoice;
}

// ── Formatting Helpers ──

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
