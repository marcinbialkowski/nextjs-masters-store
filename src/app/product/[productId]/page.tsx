import { getProduct } from '@/services/products';
import { formatMoney } from '@/utils/format-money';

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  return (
    <>
      <img {...product.image} width={300} height={300} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <span className="sr-only">Price:</span> {formatMoney(product.price)}
      </p>
    </>
  );
};

export default ProductPage;
