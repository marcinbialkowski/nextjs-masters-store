import { ProductList } from '@/components/organisms/product-list';
import { getProducts } from '@/services/products';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <h1 className="sr-only">All products</h1>
      <ProductList products={products} />
    </>
  );
};

export default ProductsPage;
