import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { MainContainer } from '@/components/atoms/main-container';
import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'NextStore',
  robots: 'noindex',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="pl">
    <body className="flex min-h-screen flex-col bg-gray-100 text-gray-950">
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
