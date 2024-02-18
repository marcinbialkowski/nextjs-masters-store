'use client';

import { type ReactNode } from 'react';
import { type Route } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { useIsActive } from './use-is-active';

interface ActiveLinkProps<RouteInferType extends string> {
  activeClassName?: string;
  children: ReactNode;
  className?: string;
  exact?: boolean;
  href: Route<RouteInferType>;
  inactiveClassName?: string;
}

export const ActiveLink = <RouteInferType extends string>({
  activeClassName,
  children,
  className,
  exact = false,
  href,
  inactiveClassName,
}: ActiveLinkProps<RouteInferType>) => {
  const isActive = useIsActive(href, exact);

  return (
    <Link
      className={clsx(
        className,
        isActive && activeClassName,
        !isActive && inactiveClassName,
      )}
      href={href}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};
