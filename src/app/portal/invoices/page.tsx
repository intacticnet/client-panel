'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { usePortal } from '@/lib/portal/context';
import { getClientInvoices, formatCurrency, formatDate, type Invoice, type InvoiceStatus } from '@/lib/portal/api';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FileText } from 'lucide-react';

const invoiceStatusConfig: Record<InvoiceStatus, { label: string; className: string }> = {
  paid: { label: 'Paid', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  sent: { label: 'Sent', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  draft: { label: 'Draft', className: 'bg-slate-100 text-slate-600 border-slate-200' },
  overdue: { label: 'Overdue', className: 'bg-red-50 text-red-700 border-red-200' },
  cancelled: { label: 'Cancelled', className: 'bg-slate-100 text-slate-600 border-slate-200' },
};

type FilterValue = 'all' | InvoiceStatus;

export default function InvoicesPage() {
  const { client } = usePortal();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterValue>('all');

  useEffect(() => {
    if (!client) return;
    getClientInvoices(client.id).then((data) => {
      setInvoices(data);
      setLoading(false);
    });
  }, [client]);

  const filtered = useMemo(() => {
    if (filter === 'all') return invoices;
    return invoices.filter((i) => i.status === filter);
  }, [invoices, filter]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-40 rounded-md" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Invoices
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {invoices.length} invoice{invoices.length !== 1 ? 's' : ''} in total
          </p>
        </div>

        <Select value={filter} onValueChange={(v) => setFilter(v as FilterValue)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <Card className="py-12 text-center">
          <CardContent>
            <FileText className="size-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">
              {filter === 'all' ? 'No invoices found.' : `No ${filter} invoices.`}
            </p>
            <p className="text-sm text-slate-400 mt-1">Invoices will appear here once created.</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="gap-0 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80">
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Due Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((inv) => {
                  const statusCfg = invoiceStatusConfig[inv.status];
                  return (
                    <TableRow key={inv.id}>
                      <TableCell>
                        <Link
                          href={`/portal/invoices/${inv.id}`}
                          className="font-medium text-[#115FC9] hover:underline"
                        >
                          {inv.invoice_number}
                        </Link>
                      </TableCell>
                      <TableCell className="text-slate-500">
                        {inv.project_title || '—'}
                      </TableCell>
                      <TableCell className="font-medium">{formatCurrency(inv.total)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={statusCfg.className}>
                          {statusCfg.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-500">{formatDate(inv.issue_date)}</TableCell>
                      <TableCell className="text-slate-500">{formatDate(inv.due_date)}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-slate-100">
            {filtered.map((inv) => {
              const statusCfg = invoiceStatusConfig[inv.status];
              return (
                <Link key={inv.id} href={`/portal/invoices/${inv.id}`} className="block hover:bg-slate-50 transition-colors">
                  <div className="px-4 py-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#115FC9] text-sm">{inv.invoice_number}</span>
                      <Badge variant="outline" className={statusCfg.className}>
                        {statusCfg.label}
                      </Badge>
                    </div>
                    {inv.project_title && (
                      <p className="text-xs text-slate-500">{inv.project_title}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900">{formatCurrency(inv.total)}</span>
                      <span className="text-xs text-slate-400">Due: {formatDate(inv.due_date)}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}
