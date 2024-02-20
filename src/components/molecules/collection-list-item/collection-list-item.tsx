import Link from 'next/link';
import {
  CollectionImage,
  type CollectionImageProps,
} from '@/components/atoms/collection-image';

export interface CollectionListItemProps {
  collection: {
    slug: string;
    name: string;
    image: CollectionImageProps['image'];
  };
}

export const CollectionListItem = ({ collection }: CollectionListItemProps) => (
  <li>
    <article className="flex w-full flex-col rounded-lg bg-white shadow">
      <Link href={`/collections/${collection.slug}`}>
        <CollectionImage className="rounded-t-lg" image={collection.image} />
        <h3 className="px-3 py-4 text-center font-bold hover:underline">
          {collection.name}
        </h3>
      </Link>
    </article>
  </li>
);
