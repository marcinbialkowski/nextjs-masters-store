import { unstable_cache as cache } from 'next/cache';
import {
  type Collection,
  CollectionGetBySlugDocument,
  executeGraphql,
} from '@/graphql/client';
import {
  type ProductsListOptions,
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from '@/services/products';

export const getCollection = cache(
  async (slug: Collection['slug'], options: ProductsListOptions) => {
    const productsVariables = toProductsPaginationVariables(options);
    const result = await executeGraphql(CollectionGetBySlugDocument, {
      slug,
      productsFirst: productsVariables.first,
      productsSkip: productsVariables.skip,
    });

    if (!result.collection) {
      return null;
    }

    return {
      ...result.collection,
      ...toProductsPaginatedResult(result.collection.products, {
        pageSize: options.pageSize,
      }),
    };
  },
  ['get-collection'],
  { tags: ['collections', 'products'] },
);
