import clsx from 'clsx';
import NextImage from 'next/image';
import { type ImageFragment } from '@/graphql/client';

interface ProductImageProps {
  className?: string;
  image: ImageFragment;
}

export const ProductImage = ({ className, image }: ProductImageProps) => (
  <NextImage
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
