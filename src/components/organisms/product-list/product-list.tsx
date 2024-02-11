import { Product } from '@/components/molecules/product';
import type { Product as ProductType } from '@/types';

interface ProductListProps {
  products: ProductType[];
}

export const ProductList = ({ products }: ProductListProps) => (
  <ul
    className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    data-testid="products-list"
  >
    {products.map((product) => (
      <li key={product.id}>
        <Product product={product} />
      </li>
    ))}
  </ul>
);
