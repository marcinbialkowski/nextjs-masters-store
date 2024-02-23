import { type ComponentProps, type ElementType, type ReactNode } from 'react';
import { ActiveLink } from '@/components/atoms/active-link';

interface NavLinkProps<RouteInferType extends string>
  extends Pick<
    ComponentProps<typeof ActiveLink<RouteInferType>>,
    'children' | 'href'
  > {
  className?: string;
  tag?: ElementType<{
    className?: string;
    children?: ReactNode;
  }>;
}

export const NavbarItem = <RouteInferType extends string>({
  className,
  tag: Tag = 'li',
  ...props
}: NavLinkProps<RouteInferType>) => (
  <Tag className={className}>
    <ActiveLink
      {...props}
      activeClassName="font-bold"
      className="text-sm text-gray-600 hover:underline"
    />
  </Tag>
);
