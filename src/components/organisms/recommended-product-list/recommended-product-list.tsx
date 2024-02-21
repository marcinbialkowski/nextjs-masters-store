import { unstable_noStore as noStore } from 'next/cache';
import { getRandomProducts } from '@/services/products';
import { ProductList } from '@/components/organisms/product-list';

export const RecommendedProductList = async () => {
  noStore();
  const products = await getRandomProducts(4);

  return <ProductList products={products} />;
};
