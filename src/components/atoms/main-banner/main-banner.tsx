import { type ReactNode, type ElementType } from 'react';

interface MainBannerBannerProps {
  children?: ReactNode;
  tag?: ElementType<{
    className?: string;
    children?: MainBannerBannerProps['children'];
  }>;
}

export const MainBanner = ({
  children,
  tag: Tag = 'div',
}: MainBannerBannerProps) => (
  <Tag className="bg-gray-50">
    <div className="container py-12">{children}</div>
  </Tag>
);
