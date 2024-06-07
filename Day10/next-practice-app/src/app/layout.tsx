import type { Metadata } from 'next';

import { roboto } from '../../styles/font';

import './globals.css';

import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <main className="px-6 py-6">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
