import { ProductListItem } from '@/components/molecules/product-list-item';
import type { Product } from '@/types';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => (
  <ul
    className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
    data-testid="products-list"
  >
    {products.map((product) => (
      <ProductListItem key={product.id} product={product} />
    ))}
  </ul>
);
