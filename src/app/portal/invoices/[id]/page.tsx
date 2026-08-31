'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { usePortal } from '@/lib/portal/context';
import {
  getInvoiceDetail,
  formatCurrency,
  formatDate,
  type InvoiceStatus,
  type Invoice,
  type InvoiceItem,
} from '@/lib/portal/api';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

const invoiceStatusConfig: Record<InvoiceStatus, { label: string; className: string }> = {
  paid: { label: 'Paid', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  sent: { label: 'Sent', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  draft: { label: 'Draft', className: 'bg-slate-100 text-slate-600 border-slate-200' },
  overdue: { label: 'Overdue', className: 'bg-red-50 text-red-700 border-red-200' },
  cancelled: { label: 'Cancelled', className: 'bg-slate-100 text-slate-600 border-slate-200' },
};

type InvoiceDetail = Invoice & { items: InvoiceItem[] };

export default function InvoiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { client } = usePortal();
  const router = useRouter();
  const [invoice, setInvoice] = useState<InvoiceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!client || !id) return;

    async function load() {
      const data = await getInvoiceDetail(id);
      if (!data || data.client_id !== client.id) {
        setNotFound(true);
      } else {
        setInvoice(data);
      }
      setLoading(false);
    }
    load();
  }, [client, id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-96 rounded-xl" />
      </div>
    );
  }

  if (notFound || !invoice) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Invoice not found.</p>
        <Button variant="outline" className="mt-4" onClick={() => router.push('/portal/invoices')}>
          Back to Invoices
        </Button>
      </div>
    );
  }

  const statusCfg = invoiceStatusConfig[invoice.status];

  return (
    <div className="space-y-6">
      {/* Top actions - hidden on print */}
      <div className="flex items-center justify-between print:hidden">
        <Link
          href="/portal/invoices"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Invoices
        </Link>
        <Button variant="outline" size="sm" onClick={handlePrint}>
          <Download className="size-4" />
          Download PDF
        </Button>
      </div>

      {/* Invoice Document */}
      <Card className="print:shadow-none print:border-none print:bg-white gap-0">
        <CardContent className="p-6 sm:p-8 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <span className="font-heading text-2xl font-bold tracking-tight" style={{ color: '#115FC9' }}>
                Intactic
              </span>
              <p className="text-sm text-slate-500 mt-1">Technology Partner for Ambitious Businesses</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-slate-900 font-heading">INVOICE</h2>
              <p className="text-sm text-slate-500 mt-1">{invoice.invoice_number}</p>
              <div className="mt-2">
                <Badge variant="outline" className={statusCfg.className}>
                  {statusCfg.label}
                </Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Bill To / Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Bill To</p>
              <p className="font-semibold text-slate-900">{client?.company_name}</p>
              {client?.contact_person && (
                <p className="text-sm text-slate-500">{client.contact_person}</p>
              )}
              {client?.email && (
                <p className="text-sm text-slate-500">{client.email}</p>
              )}
            </div>
            <div className="sm:text-right space-y-1">
              <div>
                <p className="text-xs text-slate-400">Issue Date</p>
                <p className="text-sm font-medium text-slate-700">{formatDate(invoice.issue_date)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Due Date</p>
                <p className="text-sm font-medium text-slate-700">{formatDate(invoice.due_date)}</p>
              </div>
              {invoice.project_title && (
                <div>
                  <p className="text-xs text-slate-400">Project</p>
                  <p className="text-sm font-medium text-slate-700">{invoice.project_title}</p>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Line Items Table */}
          <div>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200">
                  <TableHead className="text-slate-500">Description</TableHead>
                  <TableHead className="text-right text-slate-500">Qty</TableHead>
                  <TableHead className="text-right text-slate-500">Rate</TableHead>
                  <TableHead className="text-right text-slate-500">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-slate-400 py-6">
                      No line items
                    </TableCell>
                  </TableRow>
                ) : (
                  invoice.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-slate-700">{item.description}</TableCell>
                      <TableCell className="text-right text-slate-600">{item.quantity}</TableCell>
                      <TableCell className="text-right text-slate-600">{formatCurrency(item.rate)}</TableCell>
                      <TableCell className="text-right font-medium text-slate-900">{formatCurrency(item.amount)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-full sm:w-64 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium text-slate-700">{formatCurrency(invoice.subtotal)}</span>
              </div>
              {invoice.tax > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Tax</span>
                  <span className="font-medium text-slate-700">{formatCurrency(invoice.tax)}</span>
                </div>
              )}
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="text-xl font-bold text-slate-900 font-heading">{formatCurrency(invoice.total)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {invoice.notes && (
            <>
              <Separator />
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Notes</p>
                <p className="text-sm text-slate-600 whitespace-pre-wrap">{invoice.notes}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
