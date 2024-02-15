import type { Metadata } from 'next';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductPrice } from '@/components/atoms/product-price';
import { getProduct } from '@/services/products';

interface ProductPageProps {
  params: { productId: string };
}

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const { description, name, image } = await getProduct(params.productId);
  const title = `${name} - NextStore`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image.src],
    },
  };
};

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
        <ProductPrice className="text-2xl" product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
