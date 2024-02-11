import Link from 'next/link';
import type { Product as ProductType } from '@/types';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductDescription } from '@/components/atoms/product-description';

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => (
  <article className="flex w-full flex-col rounded-lg bg-white shadow">
    <Link href={`/product/${product.id}`}>
      <ProductImage product={product} />
    </Link>
    <ProductDescription product={product} />
  </article>
);
