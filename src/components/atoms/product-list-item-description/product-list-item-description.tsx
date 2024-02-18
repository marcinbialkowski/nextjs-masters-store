import Link from 'next/link';
import { ProductPrice } from '@/components/atoms/product-price';
import { type Product } from '@/graphql/client';

interface ProductListItemDescriptionProps {
  product: Product;
}

export const ProductListItemDescription = ({
  product,
}: ProductListItemDescriptionProps) => (
  <div className="flex flex-col justify-between gap-1 px-3 pb-3 pt-2">
    <Link
      className="line-clamp-2 h-[2lh] font-bold hover:underline"
      href={`/product/${product.slug}`}
    >
      <h3>{product.name}</h3>
    </Link>
    <ProductPrice product={product} />
  </div>
);
