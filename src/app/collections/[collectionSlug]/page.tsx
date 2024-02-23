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
