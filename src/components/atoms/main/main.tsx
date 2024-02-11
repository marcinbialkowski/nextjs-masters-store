import type { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

export const Main = ({ children }: MainContainerProps) => (
  <main className="container flex-1 py-8">{children}</main>
);
