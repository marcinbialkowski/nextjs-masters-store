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

export const getProduct = async (
  slug: ProductFragment['slug'],
): Promise<GetProductResult> => {
  const result = await executeGraphql(ProductGetBySlugDocument, { slug });

  return result.product ?? null;
};
