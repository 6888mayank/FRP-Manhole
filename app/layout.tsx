import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bossfrpmanholes.com'),
  title: 'BOSS FRP MANHOLES | FRP Manhole Covers Manufacturer',
  description:
    'BOSS FRP MANHOLES manufactures high-performance FRP manhole covers, drainage covers and customized FRP infrastructure solutions designed for strength, durability and easy handling.',
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  keywords: [
    'FRP manhole covers',
    'FRP manhole manufacturer',
    'FRP manhole cover manufacturer',
    'FRP drainage covers',
    'FRP chamber covers',
    'FRP inspection covers',
    'FRP infrastructure products',
    'FRP covers',
    'heavy duty FRP manhole covers',
    'custom FRP products',
  ],
  openGraph: {
    title: 'BOSS FRP MANHOLES | FRP Manhole Covers Manufacturer',
    description:
      'Premium FRP manhole covers and infrastructure solutions engineered for strength, durability and easy handling.',
    type: 'website',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1024,
        height: 767,
        alt: 'BOSS FRP 450x600 B125 Manhole Cover on Asphalt Road Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOSS FRP MANHOLES | FRP Manhole Covers Manufacturer',
    description:
      'Premium FRP manhole covers and infrastructure solutions engineered for strength, durability and easy handling.',
    images: ['/hero-bg.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
