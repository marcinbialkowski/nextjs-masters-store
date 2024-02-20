import clsx from 'clsx';
import {
  CollectionListItem,
  type CollectionListItemProps,
} from '@/components/molecules/collection-list-item';

interface CollectionListProps {
  className?: string;
  collections: CollectionListItemProps['collection'][];
}

export const CollectionList = ({
  className,
  collections,
}: CollectionListProps) => (
  <ul
    className={clsx(className, 'grid w-full grid-cols-1 gap-4 md:grid-cols-3')}
  >
    {collections.map((collection) => (
      <CollectionListItem key={collection.name} collection={collection} />
    ))}
  </ul>
);
