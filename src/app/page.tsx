import { getProducts } from '@/services/products';
import { H1 } from '@/components/atoms/h1';
import { ProductList } from '@/components/organisms/product-list';

const HomePage = async () => {
  const { products } = await getProducts({
    pageSize: 4,
  });

  return (
    <>
      <H1 className="sr-only">Home</H1>
      <div data-testid="related-products">
        <ProductList className="md:mt-6" products={products} />
      </div>
    </>
  );
};

export default HomePage;
