import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductPrice } from '@/components/atoms/product-price';
import { RecommendedProductList } from '@/components/organisms/recommended-product-list';
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
    <div className="container grid grid-cols-1 gap-14 pt-14 sm:gap-20 md:grid-cols-2 xl:gap-24">
      <div className="min-w-0">
        {product.images[0] && (
          <ProductImage className="rounded-lg" image={product.images[0]} />
        )}
      </div>
      <div>
        <h1 className="mb-4 text-4xl">{product.name}</h1>
        <p className="mb-6 text-base text-gray-600">{product.description}</p>
        <ProductPrice className="text-2xl" price={product.price} />
      </div>
      <section className="col-span-2 mt-10" data-testid="related-products">
        <h2 className="mb-5 text-xl font-bold">Similar products</h2>
        <RecommendedProductList />
      </section>
    </div>
  );
};

export default ProductPage;
