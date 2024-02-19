import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductPrice } from '@/components/atoms/product-price';
import { getProduct } from '@/services/products';

interface ProductPageProps {
  params: { productSlug: string };
}

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    return {};
  }

  const { description, name, images } = product;
  const title = `${name} - NextStore`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: images.slice(0, 1),
    },
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 gap-14 sm:gap-20 md:mt-6 md:grid-cols-2 xl:gap-40">
      {product.images[0] && (
        <div className="min-w-0 lg:pl-7 xl:pl-14">
          <ProductImage className="rounded-lg" image={product.images[0]} />
        </div>
      )}
      <div>
        <h1 className="mb-4 text-4xl">{product.name}</h1>
        <p className="mb-6">{product.description}</p>
        <ProductPrice className="text-2xl" product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
