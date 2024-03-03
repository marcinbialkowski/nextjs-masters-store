import { getProducts } from '@/services/products';
import { ProductList } from '@/components/organisms/product-list';

export const RecommendedProductList = async () => {
  const { products } = await getProducts({
    pageSize: 4,
    sortBy: 'RATING',
    sortDirection: 'DESC',
  });

  return <ProductList products={products} />;
};
