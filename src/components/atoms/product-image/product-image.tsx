import type { Product } from '@/types';

interface ProductImageProps {
  product: Product;
}

export const ProductImage = ({ product }: ProductImageProps) => (
  <img
    {...product.image}
    className="aspect-square w-full rounded-t-lg object-cover object-center"
    width={285}
    height={285}
  />
);
