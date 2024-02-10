import type { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => (
  <main className="container mx-auto grid flex-1 place-items-center p-5">
    {children}
  </main>
);
