import type { Product as ProductType } from '@/types';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductDescription } from '@/components/atoms/product-description';

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => (
  <article className="flex w-full flex-col rounded-lg bg-white shadow">
    <ProductImage {...product.image} />
    <ProductDescription product={product} />
  </article>
);
