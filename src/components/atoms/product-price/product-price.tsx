import { type Product } from '@/graphql/client';
import { formatMoney } from '@/utils/format-money';

interface ProductPriceProps {
  className?: string;
  price: Product['price'];
}

export const ProductPrice = ({ className, price }: ProductPriceProps) => (
  <p className={className}>
    <span className="sr-only">Price:</span> {formatMoney(price)}
  </p>
);
