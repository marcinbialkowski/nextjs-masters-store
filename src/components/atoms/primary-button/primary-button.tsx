import clsx from 'clsx';
import { type ButtonHTMLAttributes } from 'react';

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = ({ className, ...props }: PrimaryButtonProps) => (
  <button
    {...props}
    className={clsx(
      className,
      'rounded-md border bg-green-700 px-8 py-3 text-white hover:bg-green-800 focus-visible:outline-offset-4 disabled:cursor-wait disabled:opacity-50',
    )}
  />
);
