import { Metadata, Viewport } from 'next';
import { Space_Grotesk, Oswald } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/providers/ClientProviders';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
  adjustFontFallback: true,
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-accent',
  adjustFontFallback: true,
});

const ICON_URL = 'https://res.cloudinary.com/ti1ep7pl/image/upload/w_64,h_64,c_fit,f_auto,q_auto/intactic';
const OG_IMAGE = 'https://res.cloudinary.com/ti1ep7pl/image/upload/w_1200,h_630,c_fit,f_auto,q_auto/v1787881251/intactic-og_2.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://intactic.net'),
  title: {
    default: 'Intactic | Technology Partner for Ambitious Businesses',
    template: '%s | Intactic',
  },
  description: 'From strategy to deployment, Intactic delivers global-standard software, intelligent automation, and growth systems that transform businesses into market leaders.',
  keywords: ['Intactic', 'software development', 'web development', 'mobile app', 'UI/UX design', 'digital marketing', 'branding', 'ERP', 'IT consultancy', 'Bangladesh'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intactic.net',
    siteName: 'Intactic',
    title: 'Intactic | Technology Partner for Ambitious Businesses',
    description: 'From strategy to deployment, Intactic delivers global-standard software, intelligent automation, and growth systems that transform businesses into market leaders.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Intactic - Technology Partner for Ambitious Businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intactic | Technology Partner for Ambitious Businesses',
    description: 'From strategy to deployment, Intactic delivers global-standard software, intelligent automation, and growth systems that transform businesses into market leaders.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: ICON_URL },
      { url: ICON_URL, type: 'image/png' },
    ],
    shortcut: ICON_URL,
    apple: ICON_URL,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Intactic',
  },
};

export const viewport: Viewport = {
  themeColor: '#070d19',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${oswald.variable}`}>
      <head>
        {/* Global Favicon, Shortcut Icon & Apple Touch Icon */}
        <link rel="icon" href={ICON_URL} sizes="any" />
        <link rel="shortcut icon" href={ICON_URL} />
        <link rel="apple-touch-icon" href={ICON_URL} />

        {/* DNS Prefetch for Cloudinary */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for Unsplash (case study images) */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground tracking-tight selection:bg-brand/20 selection:text-white"
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
