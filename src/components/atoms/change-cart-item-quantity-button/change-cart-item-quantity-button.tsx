import clsx from 'clsx';
import { type ButtonHTMLAttributes } from 'react';
import { Button } from '@/components/atoms/button';

type ChangeCartItemQuantityButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export const ChangeCartItemQuantityButton = ({
  className,
  ...props
}: ChangeCartItemQuantityButtonProps) => (
  <Button
    {...props}
    className={clsx(className, 'h-11 w-11 font-bold')}
    type="submit"
  />
);
