import type { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

export const Main = ({ children }: MainContainerProps) => (
  <main className="container flex-1 pb-14 pt-8 md:pt-14">{children}</main>
);
