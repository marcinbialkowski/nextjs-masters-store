import { type ReactNode } from 'react';
import clsx from 'clsx';

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

export const PageTitle = ({ children, className }: PageTitleProps) => (
  <h1 className={clsx(className, 'text-xl font-bold')}>{children}</h1>
);
