import { type ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

export const Main = ({ children }: MainContainerProps) => (
  <main className="flex-1 pb-14">{children}</main>
);
