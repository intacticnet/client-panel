import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;
  
  // Insights subdomain rewrite
  if (host.includes('ins.intactic.net') || host.includes('insights.intactic.net')) {
    if (pathname.startsWith('/insights')) {
      return NextResponse.rewrite(new URL(pathname, request.url));
    }
    return NextResponse.rewrite(new URL(`/insights${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
