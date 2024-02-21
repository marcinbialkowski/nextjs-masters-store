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

export const getProducts = async (
  options: ProductsPaginationOptions,
): Promise<GetProductsResult> => {
  const result = await executeGraphql(
    ProductsGetListDocument,
    toProductsPaginationVariables(options),
  );

  return toProductsPaginatedResult(result.products, {
    pageSize: options.pageSize,
  });
};

export const getRandomProducts = (
  count: number,
): Promise<ProductListItemFragment[]> =>
  getProducts({ pageSize: count * 5 }).then(({ products }) =>
    products.sort(() => 0.5 - Math.random()).slice(0, count),
  );

export const getProduct = (
  slug: ProductFragment['slug'],
): Promise<GetProductResult> =>
  executeGraphql(ProductGetBySlugDocument, { slug }).then(
    (result) => result.product ?? null,
  );
