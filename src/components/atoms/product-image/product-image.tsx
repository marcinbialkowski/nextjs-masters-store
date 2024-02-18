import clsx from 'clsx';
import type { Product } from '@/graphql/client';

interface ProductImageProps {
  className?: string;
  image: Product['images'][number];
}

export const ProductImage = ({ className, image }: ProductImageProps) => (
  <img
    alt={image.alt}
    src={image.url}
    className={clsx(
      className,
      'aspect-square w-full object-cover object-center',
    )}
    width={image.width}
    height={image.height}
  />
);
