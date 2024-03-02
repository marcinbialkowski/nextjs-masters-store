import { type TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, ...props }: TextareaProps) => (
  <textarea
    {...props}
    className={clsx(
      className,
      'rounded bg-gray-50 p-2 text-sm text-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-green-700',
    )}
  />
);
