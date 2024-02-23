import { getRandomProducts } from '@/services/products';
import { ProductList } from '@/components/organisms/product-list';

// TODO: do something smarter
export const RecommendedProductList = async () => {
  const products = await getRandomProducts(4);

  return <ProductList products={products} />;
};
