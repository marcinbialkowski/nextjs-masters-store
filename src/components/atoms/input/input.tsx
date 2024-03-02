import { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => (
  <input
    {...props}
    className={clsx(
      className,
      'rounded bg-gray-50 p-2 text-sm text-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-green-700',
    )}
  />
);
