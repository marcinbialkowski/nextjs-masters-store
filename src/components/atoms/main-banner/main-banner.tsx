import { type ReactNode, type ElementType } from 'react';
import clsx from 'clsx';

interface MainBannerBannerProps {
  children?: ReactNode;
  className?: string;
  tag?: ElementType<{
    className?: string;
    children?: MainBannerBannerProps['children'];
  }>;
}

export const MainBanner = ({
  children,
  className,
  tag: Tag = 'div',
}: MainBannerBannerProps) => (
  <Tag className="bg-gray-50">
    <div className={clsx(className, 'container py-12')}>{children}</div>
  </Tag>
);
