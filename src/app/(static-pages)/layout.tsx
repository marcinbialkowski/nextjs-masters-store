import type { ReactNode } from 'react';

interface StaticLayoutProps {
  children: ReactNode;
}

const StaticLayout = ({ children }: StaticLayoutProps) => (
  <div className="flex max-w-[65ch] flex-col gap-4 text-lg">{children}</div>
);

export default StaticLayout;
