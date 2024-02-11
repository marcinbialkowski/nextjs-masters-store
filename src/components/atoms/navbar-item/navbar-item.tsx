import type { ComponentProps } from 'react';
import { ActiveLink } from '@/components/atoms/active-link';

type NavLinkProps = Pick<
  ComponentProps<typeof ActiveLink>,
  'children' | 'href'
>;

export const NavbarItem = (props: NavLinkProps) => (
  <li>
    <ActiveLink
      {...props}
      activeClassName="font-bold"
      className="text-sm text-slate-600 hover:text-inherit"
    />
  </li>
);
