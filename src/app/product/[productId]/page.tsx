import { ProductImage } from '@/components/atoms/product-image';
import { getProduct } from '@/services/products';
import { formatMoney } from '@/utils/format-money';

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  return (
    <div className="grid grid-cols-1 gap-14 sm:gap-20 md:grid-cols-2 xl:gap-40">
      <div className="min-w-0 lg:pl-7 xl:pl-14">
        <ProductImage className="rounded-lg" product={product} />
      </div>
      <div>
        <h1 className="mb-4 text-4xl">{product.name}</h1>
        <p className="mb-6">{product.description}</p>
        <p className="text-2xl">
          <span className="sr-only">Price:</span> {formatMoney(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
