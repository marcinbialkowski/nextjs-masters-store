import { type ComponentProps } from 'react';
import { ActiveLink } from '@/components/atoms/active-link';

interface NavLinkProps<RouteInferType extends string>
  extends Pick<
    ComponentProps<typeof ActiveLink<RouteInferType>>,
    'children' | 'href'
  > {
  className?: string;
}

export const NavbarItem = <RouteInferType extends string>({
  className,
  ...props
}: NavLinkProps<RouteInferType>) => (
  <li className={className}>
    <ActiveLink
      {...props}
      activeClassName="font-bold border-b border-b-green-700"
      className="text-sm text-gray-600"
      inactiveClassName="hover:border-b hover:border-b-gray-600"
    />
  </li>
);
