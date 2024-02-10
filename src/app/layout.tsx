import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'NextStore',
  robots: 'noindex',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="pl">
    <body className="bg-gray-100 text-gray-950">
      <header></header>
      <main className="container mx-auto grid min-h-screen place-items-center p-5">
        {children}
      </main>
      <footer></footer>
    </body>
  </html>
);

export default RootLayout;
