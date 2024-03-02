import { unstable_cache as cache } from 'next/cache';
import {
  type ProductsPaginationOptions,
  type GetProductsResult,
  type GetProductResult,
} from './products.types';
import {
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from './products.utils';
import {
  executeGraphql,
  ProductGetBySlugDocument,
  ProductsGetListDocument,
  type ProductFragment,
  type ProductListItemFragment,
} from '@/graphql/client';

export const getProducts = cache(
  async (options: ProductsPaginationOptions): Promise<GetProductsResult> => {
    const result = await executeGraphql(ProductsGetListDocument, {
      ...toProductsPaginationVariables(options),
      ...(options.search ? { search: options.search } : {}),
    });

    return toProductsPaginatedResult(result.products, {
      pageSize: options.pageSize,
    });
  },
  ['get-products'],
  { tags: ['products'] },
);

export const getRandomProducts = (
  count: number,
): Promise<ProductListItemFragment[]> =>
  getProducts({ pageSize: count * 5 }).then(({ products }) =>
    products.sort(() => 0.5 - Math.random()).slice(0, count),
  );

export const getProduct = cache(
  (slug: ProductFragment['slug']): Promise<GetProductResult> =>
    executeGraphql(ProductGetBySlugDocument, { slug }).then(
      (result) => result.product ?? null,
    ),
  ['get-product'],
  { tags: ['products'] },
);
