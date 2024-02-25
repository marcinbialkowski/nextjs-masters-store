import clsx from 'clsx';
import { type ButtonHTMLAttributes } from 'react';

type ChangeCartItemQuantityButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export const ChangeCartItemQuantityButton = ({
  className,
  ...props
}: ChangeCartItemQuantityButtonProps) => (
  <button
    {...props}
    className={clsx(
      className,
      'h-11 w-11 rounded border border-gray-300 disabled:cursor-not-allowed [&:not(:disabled)]:hover:bg-gray-100 [&:not(:disabled)]:active:bg-gray-200',
    )}
    type="submit"
  />
);
