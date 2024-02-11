import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <div className="flex min-h-screen flex-col">{children}</div>
);
