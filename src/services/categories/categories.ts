import {
  type Category,
  CategoryGetBySlugDocument,
  executeGraphql,
} from '@/graphql/client';
import {
  type ProductsPaginationOptions,
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from '@/services/products';

export const getCategory = async (
  slug: Category['slug'],
  options: ProductsPaginationOptions,
) => {
  const productsVariables = toProductsPaginationVariables(options);
  const result = await executeGraphql(CategoryGetBySlugDocument, {
    slug,
    productsFirst: productsVariables.first,
    productsSkip: productsVariables.skip,
  });

  if (!result.category) {
    return null;
  }

  return {
    ...result.category,
    ...toProductsPaginatedResult(result.category.products, {
      pageSize: options.pageSize,
    }),
  };
};
