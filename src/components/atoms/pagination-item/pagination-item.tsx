import clsx from 'clsx';
import { type ComponentProps } from 'react';
import { ActiveLink } from '@/components/atoms/active-link';

type PaginationLinkProps<RouteInferType extends string> = Pick<
  ComponentProps<typeof ActiveLink<RouteInferType>>,
  'className' | 'children' | 'href'
>;

export const PaginationItem = <RouteInferType extends string>({
  className,
  ...props
}: PaginationLinkProps<RouteInferType>) => (
  <ActiveLink
    {...props}
    activeClassName="font-bold bg-gray-200"
    className={clsx(
      className,
      'grid h-11 min-w-11 place-items-center rounded hover:underline',
    )}
    inactiveClassName="hover:bg-gray-100"
  />
);
