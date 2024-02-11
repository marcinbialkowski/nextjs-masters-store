import { ProductList } from '@/components/organisms/product-list';
import { products } from '@/data';

const ProductsPage = () => (
  <>
    <h1 className="sr-only">All products</h1>
    <ProductList products={products} />
  </>
);

export default ProductsPage;
