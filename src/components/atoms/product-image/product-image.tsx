import clsx from 'clsx';
import type { Product } from '@/types';

interface ProductImageProps {
  className?: string;
  product: Product;
}

export const ProductImage = ({ className, product }: ProductImageProps) => (
  <img
    alt={product.image.alt}
    src={product.image.src}
    className={clsx(
      className,
      'aspect-square w-full object-cover object-center',
    )}
    width={285}
    height={285}
  />
);
