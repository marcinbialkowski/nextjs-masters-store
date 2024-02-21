import clsx from 'clsx';
import { NoProducts } from '@/components/atoms/no-products';
import { ProductListItem } from '@/components/molecules/product-list-item';
import { type ProductListItemFragment } from '@/graphql/client';

interface ProductListProps {
  className?: string;
  products: ProductListItemFragment[];
}

export const ProductList = ({ className, products }: ProductListProps) => {
  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <ul
      className={clsx(
        className,
        'grid w-full grid-cols-2 gap-4 xl:grid-cols-4',
      )}
      data-testid="products-list"
    >
      {products.map((product) => (
        <ProductListItem key={product.slug} product={product} />
      ))}
    </ul>
  );
};
