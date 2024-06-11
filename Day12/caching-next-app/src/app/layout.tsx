import type { Metadata } from 'next';

import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-10">
        <h1 className="text-3xl font-bold mb-4">RootLayout Component</h1>
        <p className="mt-4 text-lg font-bold mb-10">
          {new Date().toLocaleTimeString()}
        </p>
        <nav className="flex gap-10 mb-10">
          <Link className="text-lg text-blue-700 " href={'/'}>
            /
          </Link>
          <Link className="text-lg text-blue-700" href={'/about'}>
            /About
          </Link>
          <Link className="text-lg text-green-700" href={'/blog/1'}>
            /blog/1
          </Link>
          <Link className="text-lg text-green-700" href={'/blog/2'}>
            /blog/2
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}