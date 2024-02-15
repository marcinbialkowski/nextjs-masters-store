import type { ComponentProps } from 'react';
import { ActiveLink } from '@/components/atoms/active-link';

type NavLinkProps<RouteInferType extends string> = Pick<
  ComponentProps<typeof ActiveLink<RouteInferType>>,
  'children' | 'href'
>;

export const NavbarItem = <RouteInferType extends string>(
  props: NavLinkProps<RouteInferType>,
) => (
  <li>
    <ActiveLink
      {...props}
      activeClassName="font-bold"
      className="text-sm text-gray-600 hover:underline"
    />
  </li>
);
