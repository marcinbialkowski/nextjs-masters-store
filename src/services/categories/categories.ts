import { unstable_cache as cache } from 'next/cache';
import {
  type Category,
  CategoryGetBySlugDocument,
  executeGraphql,
} from '@/graphql/client';
import {
  type ProductsListOptions,
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from '@/services/products';

export const getCategory = cache(
  async (slug: Category['slug'], options: ProductsListOptions) => {
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
  },
  ['get-category'],
  { tags: ['categories', 'products'] },
);
