import clsx from 'clsx';
import { type ReactNode } from 'react';

interface EmptyResultMessageProps {
  children: ReactNode;
  className?: string;
}

export const EmptyResultMessage = ({
  children,
  className,
}: EmptyResultMessageProps) => (
  <p className={clsx(className, 'text-balance py-20 text-center text-base')}>
    {children}
  </p>
);
