import clsx from 'clsx';
import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  className,
  variant = 'secondary',
  ...props
}: ButtonProps) => {
  const commonClassName =
    'rounded-md border tracking-wider disabled:cursor-not-allowed focus-visible:outline-offset-4 disabled:opacity-50';
  const variantClassName =
    variant === 'primary'
      ? 'bg-green-700 px-8 py-3 text-white [&:not(:disabled)]:hover:bg-green-800 [&:not(:disabled)]:active:bg-green-900'
      : 'border-green-700 p-2 text-green-700 [&:not(:disabled)]:hover:bg-green-50 [&:not(:disabled)]:active:bg-green-100';

  return (
    <button
      {...props}
      className={clsx(className, commonClassName, variantClassName)}
    />
  );
};
