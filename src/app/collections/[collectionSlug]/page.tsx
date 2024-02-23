import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/atoms/page-title';
import { MainBanner } from '@/components/atoms/main-banner';
import { ProductList } from '@/components/organisms/product-list';
import { getCollection } from '@/services/collections';

interface CollectionPageProps {
  params: {
    collectionSlug: string;
  };
}

const pageSize = 12;

export const generateMetadata = async ({
  params,
}: CollectionPageProps): Promise<Metadata> => {
  const { collectionSlug: slug } = params;

  // TODO: separate query without products
  const collection = await getCollection(slug, {
    pageSize,
  });

  return collection
    ? {
        title: `${collection.name} - NextStore`,
      }
    : {};
};

const CollectionPage = async ({ params }: CollectionPageProps) => {
  const { collectionSlug: slug } = params;

  const collection = await getCollection(slug, {
    pageSize,
  });

  if (!collection) {
    return notFound();
  }

  return (
    <>
      <MainBanner>
        <PageTitle className="mb-4">{collection.name}</PageTitle>
        <p className="text-base text-gray-700">{collection.description}</p>
      </MainBanner>
      <div className="container pt-14">
        <ProductList products={collection.products} />
      </div>
    </>
  );
};

export default CollectionPage;
