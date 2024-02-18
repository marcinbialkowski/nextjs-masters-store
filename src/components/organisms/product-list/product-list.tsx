import { NoProducts } from '@/components/atoms/no-products';
import { ProductListItem } from '@/components/molecules/product-list-item';
import type { Product } from '@/graphql/client';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <ul
      className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
      data-testid="products-list"
    >
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
