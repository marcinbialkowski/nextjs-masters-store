import {
  type Collection,
  CollectionGetBySlugDocument,
  executeGraphql,
} from '@/graphql/client';
import {
  type ProductsPaginationOptions,
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from '@/services/products';

export const getCollection = async (
  slug: Collection['slug'],
  options: ProductsPaginationOptions,
) => {
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
};
