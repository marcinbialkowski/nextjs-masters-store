import { getProducts } from '@/services/products';
import { ProductList } from '@/components/organisms/product-list';

const HomePage = async () => {
  const { products } = await getProducts({
    pageSize: 4,
  });

  return (
    <>
      <h1 className="sr-only">Home</h1>
      <div data-testid="related-products">
        <ProductList products={products} />
      </div>
    </>
  );
};

export default HomePage;
