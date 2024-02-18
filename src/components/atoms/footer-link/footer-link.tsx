import { type ReactNode } from 'react';
import { type Route } from 'next';
import { ActiveLink } from '@/components/atoms/active-link';

interface FooterLinkProps<RouteInferType extends string> {
  children: ReactNode;
  href: Route<RouteInferType>;
}

export const FooterLink = <RouteInferType extends string>(
  props: FooterLinkProps<RouteInferType>,
) => <ActiveLink {...props} className="hover:underline" />;
