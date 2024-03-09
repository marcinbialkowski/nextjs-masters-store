import { ProductList } from '@/components/organisms/product-list';
import { getRelatedProducts } from '@/services/products';
import { type ProductFragment } from '@/graphql/client';

interface RelatedProductListProps {
  productSlug: ProductFragment['slug'];
}

export const RelatedProductList = async ({
  productSlug,
}: RelatedProductListProps) => {
  const products = await getRelatedProducts(productSlug);

  return <ProductList products={products} />;
};
