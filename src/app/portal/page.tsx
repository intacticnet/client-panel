'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePortal } from '@/lib/portal/context';
import {
  getClientProjects,
  getClientInvoices,
  formatCurrency,
  formatDate,
  type Project,
  type Invoice,
  type InvoiceStatus,
  type ProjectStatus,
} from '@/lib/portal/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FolderKanban, FileText, DollarSign, ArrowRight } from 'lucide-react';

// ── Status Helpers ──

const projectStatusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  planning: { label: 'Planning', className: 'bg-purple-50 text-purple-700 border-purple-200' },
  on_hold: { label: 'On Hold', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  completed: { label: 'Completed', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  cancelled: { label: 'Cancelled', className: 'bg-slate-100 text-slate-600 border-slate-200' },
};

const invoiceStatusConfig: Record<InvoiceStatus, { label: string; className: string }> = {
  paid: { label: 'Paid', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  sent: { label: 'Sent', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  draft: { label: 'Draft', className: 'bg-slate-100 text-slate-600 border-slate-200' },
  overdue: { label: 'Overdue', className: 'bg-red-50 text-red-700 border-red-200' },
  cancelled: { label: 'Cancelled', className: 'bg-slate-100 text-slate-600 border-slate-200' },
};

function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const cfg = projectStatusConfig[status];
  return (
    <Badge variant="outline" className={cfg.className}>
      {cfg.label}
    </Badge>
  );
}

function InvoiceStatusBadge({ status }: { status: InvoiceStatus }) {
  const cfg = invoiceStatusConfig[status];
  return (
    <Badge variant="outline" className={cfg.className}>
      {cfg.label}
    </Badge>
  );
}

// ── Stat Card ──

function StatCard({ icon: Icon, label, value, sub }: { icon: React.ElementType; label: string; value: string | number; sub?: string }) {
  return (
    <Card className="gap-4">
      <CardContent className="flex items-center gap-4 pt-0">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#115FC9' }}>
          <Icon className="size-5 text-white" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-slate-500 truncate">{label}</p>
          <p className="text-xl font-bold text-slate-900 font-heading tracking-tight">{value}</p>
          {sub && <p className="text-xs text-slate-400 truncate">{sub}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

// ── Dashboard ──

export default function PortalDashboard() {
  const { client } = usePortal();
  const [projects, setProjects] = useState<Project[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) return;

    async function loadData() {
      const [projData, invData] = await Promise.all([
        getClientProjects(client.id),
        getClientInvoices(client.id),
      ]);
      setProjects(projData);
      setInvoices(invData);
      setLoading(false);
    }
    loadData();
  }, [client]);

  const activeProjects = projects.filter((p) => p.status === 'active' || p.status === 'planning');
  const pendingInvoices = invoices.filter((i) => i.status === 'sent' || i.status === 'overdue');
  const totalPaid = invoices
    .filter((i) => i.status === 'paid')
    .reduce((sum, i) => sum + i.total, 0);
  const recentInvoices = invoices.slice(0, 5);
  const recentProjects = activeProjects.slice(0, 4);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Welcome back, {client?.company_name}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s an overview of your projects and invoices.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          icon={FolderKanban}
          label="Active Projects"
          value={activeProjects.length}
          sub={`${projects.length} total`}
        />
        <StatCard
          icon={FileText}
          label="Pending Invoices"
          value={pendingInvoices.length}
          sub={pendingInvoices.some((i) => i.status === 'overdue') ? 'Includes overdue' : undefined}
        />
        <StatCard
          icon={DollarSign}
          label="Total Invoiced (Paid)"
          value={formatCurrency(totalPaid)}
          sub={`${invoices.filter((i) => i.status === 'paid').length} invoices`}
        />
      </div>

      {/* Active Projects */}
      {recentProjects.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-lg font-bold text-slate-900">Active Projects</h2>
            <Link
              href="/portal/projects"
              className="flex items-center gap-1 text-sm font-medium text-[#115FC9] hover:underline"
            >
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentProjects.map((project) => (
              <Link key={project.id} href={`/portal/projects/${project.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer gap-4">
                  <CardHeader className="pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base font-semibold text-slate-900 leading-snug">
                        {project.title}
                      </CardTitle>
                      <ProjectStatusBadge status={project.status} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-medium text-slate-700">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent Invoices */}
      {recentInvoices.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-lg font-bold text-slate-900">Recent Invoices</h2>
            <Link
              href="/portal/invoices"
              className="flex items-center gap-1 text-sm font-medium text-[#115FC9] hover:underline"
            >
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <Card className="gap-0 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80">
                  <TableHead>Invoice #</TableHead>
                  <TableHead className="hidden sm:table-cell">Project</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInvoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell>
                      <Link
                        href={`/portal/invoices/${inv.id}`}
                        className="font-medium text-[#115FC9] hover:underline"
                      >
                        {inv.invoice_number}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-slate-500">
                      {inv.project_title || '—'}
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(inv.total)}</TableCell>
                    <TableCell>
                      <InvoiceStatusBadge status={inv.status} />
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-slate-500">
                      {formatDate(inv.issue_date)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      )}

      {/* Empty State */}
      {!loading && projects.length === 0 && invoices.length === 0 && (
        <Card className="py-12 text-center">
          <CardContent>
            <p className="text-slate-500">No projects or invoices found yet.</p>
            <p className="text-sm text-slate-400 mt-1">They will appear here once assigned.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
