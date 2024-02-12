import Link from 'next/link';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductListItemDescription } from '@/components/atoms/product-list-item-description';
import type { Product } from '@/types';

interface ProductListItemProps {
  product: Product;
}

export const ProductListItem = ({ product }: ProductListItemProps) => (
  <li>
    <article className="flex w-full flex-col rounded-lg bg-white shadow">
      <Link href={`/product/${product.id}`}>
        <ProductImage className="rounded-t-lg" product={product} />
      </Link>
      <ProductListItemDescription product={product} />
    </article>
  </li>
);
