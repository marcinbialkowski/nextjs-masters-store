import type { Product } from '@/types';
import { formatMoney } from '@/utils/format-money';

interface ProductPriceProps {
  className?: string;
  product: Product;
}

export const ProductPrice = ({ className, product }: ProductPriceProps) => (
  <p className={className}>
    <span className="sr-only">Price:</span> {formatMoney(product.price)}
  </p>
);
