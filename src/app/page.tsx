import { ProductList } from '@/components/organisms/product-list';
import { products } from '@/data';

const HomePage = () => <ProductList products={products} />;

export default HomePage;
