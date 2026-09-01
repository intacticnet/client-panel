'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { PortalProvider, usePortal } from '@/lib/portal/context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, LogOut, LayoutDashboard, FolderKanban, FileText, Menu, ShieldX } from 'lucide-react';
import Link from 'next/link';

function PortalNavbar() {
  const { client, loading, accessDenied, signOut } = usePortal();
  const pathname = usePathname();

  const navLinks = [
    { href: '/portal', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/portal/projects', label: 'Projects', icon: FolderKanban },
    { href: '/portal/invoices', label: 'Invoices', icon: FileText },
  ];

  const isActive = (href: string) => {
    if (href === '/portal') return pathname === '/portal';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/portal" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-tight" style={{ color: '#115FC9' }}>
            Intactic
          </span>
          <span className="hidden sm:inline text-xs text-slate-400 font-medium">Portal</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive(link.href)
                    ? 'bg-[#115FC9]/10 text-[#115FC9]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {loading ? (
            <Skeleton className="h-8 w-28 rounded-md" />
          ) : client ? (
            <span className="hidden sm:block text-sm text-slate-500 truncate max-w-[180px]">
              {client.company_name}
            </span>
          ) : null}

          <Button
            variant="ghost"
            size="sm"
            onClick={signOut}
            className="text-slate-500 hover:text-slate-900"
          >
            <LogOut className="size-4" />
            <span className="hidden sm:inline ml-1">Logout</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-4">
              <SheetTitle className="font-heading text-lg font-bold" style={{ color: '#115FC9' }}>
                Intactic Portal
              </SheetTitle>
              {client && (
                <p className="text-sm text-slate-500 mt-1 mb-4">{client.company_name}</p>
              )}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                        ${isActive(link.href)
                          ? 'bg-[#115FC9]/10 text-[#115FC9]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                    >
                      <Icon className="size-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function PortalLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="size-8 animate-spin text-[#115FC9]" />
    </div>
  );
}

function AccessRestricted() {
  const { signOut } = usePortal();
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full bg-slate-100 p-4 mb-4">
        <ShieldX className="size-8 text-slate-400" />
      </div>
      <h2 className="font-heading text-2xl font-bold text-slate-900">Access Restricted</h2>
      <p className="mt-2 text-sm text-slate-500 max-w-md">
        Your account is not linked to a client profile. Please contact Intactic support if you believe this is an error.
      </p>
      <Button onClick={signOut} variant="outline" className="mt-6">
        Sign Out
      </Button>
    </div>
  );
}

function PortalContent({ children }: { children: React.ReactNode }) {
  const { user, loading, accessDenied } = usePortal();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      window.location.replace(window.location.origin + '/login');
      return;
    }
  }, [user, loading, pathname]);

  if (loading) {
    return (
      <>
        <PortalNavbar />
        <PortalLoading />
      </>
    );
  }

  if (!user) {
    return null;
  }

  if (accessDenied) {
    return (
      <>
        <PortalNavbar />
        <AccessRestricted />
      </>
    );
  }

  return (
    <>
      <PortalNavbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {children}
      </main>
    </>
  );
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortalProvider>
      <PortalContent>{children}</PortalContent>
    </PortalProvider>
  );
}
