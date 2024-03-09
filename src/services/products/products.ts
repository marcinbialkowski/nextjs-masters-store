import { unstable_cache as cache } from 'next/cache';
import algoliarecommend from '@algolia/recommend';
import { relatedProductsSchema } from './products.schema';
import {
  type ProductsListOptions,
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
  ProductsGetByIdsDocument,
  ProductsGetListDocument,
  type ProductFragment,
  type ProductListItemFragment,
} from '@/graphql/client';

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env;

export const getProducts = cache(
  async (options: ProductsListOptions): Promise<GetProductsResult> => {
    const result = await executeGraphql(ProductsGetListDocument, {
      ...toProductsPaginationVariables(options),
      ...(options.search ? { search: options.search } : {}),
      ...(options.sortBy
        ? { sortBy: options.sortBy, sortDirection: options.sortDirection }
        : {}),
    });

    return toProductsPaginatedResult(result.products, {
      pageSize: options.pageSize,
    });
  },
  ['get-products'],
  { tags: ['products'] },
);

export const getRelatedProducts = cache(
  async (
    productSlug: ProductFragment['slug'],
  ): Promise<ProductListItemFragment[]> => {
    if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY) {
      throw new Error('Missing Algolia configuration');
    }

    const client = algoliarecommend(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

    const relatedResponse = await client.getRelatedProducts([
      {
        indexName: 'products',
        objectID: productSlug,
        maxRecommendations: 4,
      },
    ]);

    const relatedProductIds = relatedProductsSchema
      .parse(relatedResponse.results[0]?.hits ?? [])
      .map((relatedProduct) => relatedProduct.id);

    const result = await executeGraphql(ProductsGetByIdsDocument, {
      ids: relatedProductIds,
    });

    return result.products.data;
  },
  ['related-products'],
  { tags: ['products'] },
);

export const getProduct = cache(
  (slug: ProductFragment['slug']): Promise<GetProductResult> =>
    executeGraphql(ProductGetBySlugDocument, { slug }).then(
      (result) => result.product ?? null,
    ),
  ['get-product'],
  { tags: ['products'] },
);
