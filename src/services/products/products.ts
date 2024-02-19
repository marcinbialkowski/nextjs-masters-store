import {
  type ProductsPaginationOptions,
  type GetProductsResult,
} from './products.types';
import {
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from './products.utils';
import {
  executeGraphql,
  ProductGetBySlugDocument,
  ProductsGetListDocument,
  type Product,
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
  slug: Product['slug'],
): Promise<Product | null> => {
  const result = await executeGraphql(ProductGetBySlugDocument, { slug });

  return result.product ?? null;
};
