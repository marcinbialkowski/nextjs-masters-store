import { notFound } from 'next/navigation';
import { H1 } from '@/components/atoms/h1';
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
      <H1>{collection.name}</H1>
      <p>{collection.description}</p>
      <ProductList products={collection.products} />
    </>
  );
};

export default CollectionPage;
