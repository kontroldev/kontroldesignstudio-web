import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kontroldesignstudio.com'),
  title: 'Kontrol App Studio — Raúl Gallego',
  description: 'Diseño y desarrollo de aplicaciones nativas para el ecosistema Apple.',
  openGraph: {
    title: 'Kontrol App Studio — Raúl Gallego',
    description: 'Diseño y desarrollo de aplicaciones nativas para el ecosistema Apple.',
    type: 'website',
    images: [{ url: '/kontrol-app-studio.png', width: 1984, height: 793, alt: 'Kontrol App Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontrol App Studio — Raúl Gallego',
    description: 'Diseño y desarrollo de aplicaciones nativas para el ecosistema Apple.',
    images: ['/kontrol-app-studio.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
