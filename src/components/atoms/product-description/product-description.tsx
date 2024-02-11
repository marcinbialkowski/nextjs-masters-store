import Link from 'next/link';
import type { Product } from '@/types';
import { formatMoney } from '@/utils/format-money';

interface ProductDescriptionProps {
  product: Product;
}

export const ProductDescription = ({ product }: ProductDescriptionProps) => (
  <div className="flex flex-col justify-between gap-1 px-3 pb-3 pt-2">
    <Link
      className="line-clamp-2 h-[2lh] font-bold hover:underline"
      href={`/product/${product.id}`}
    >
      <h3>{product.name}</h3>
    </Link>
    <p>
      <span className="sr-only">Price:</span> {formatMoney(product.price)}
    </p>
  </div>
);
