import type { ReactNode } from 'react';
import type { Route } from 'next';
import Link from 'next/link';

interface FooterLinkProps<RouteInferType extends string> {
  children: ReactNode;
  href: Route<RouteInferType>;
}

export const FooterLink = <RouteInferType extends string>(
  props: FooterLinkProps<RouteInferType>,
) => <Link {...props} className="hover:underline" />;
