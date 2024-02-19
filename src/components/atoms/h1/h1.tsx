import { type ReactNode } from 'react';
import clsx from 'clsx';

interface H1Props {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: H1Props) => (
  <h1 className={clsx(className, 'mb-8 text-xl font-bold')}>{children}</h1>
);
