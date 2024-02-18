import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import './globals.css';
import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { PageContainer } from '@/components/atoms/page-container';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'NextStore',
  robots: 'noindex',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className="text-gray-900">
      <PageContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageContainer>
    </body>
  </html>
);

export default RootLayout;
