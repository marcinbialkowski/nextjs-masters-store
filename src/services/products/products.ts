import type { GetProductsOptions, GetProductsResult } from './products.types';
import {
  executeGraphql,
  ProductGetBySlugDocument,
  ProductsGetListDocument,
  type Product,
} from '@/graphql/client';

export const getProducts = async ({
  page = 1,
  pageSize,
}: GetProductsOptions): Promise<GetProductsResult> => {
  const result = await executeGraphql(ProductsGetListDocument, {
    first: pageSize,
    skip: (page - 1) * pageSize,
  });

  return {
    products: result.products.data,
    pagesCount: Math.ceil(result.products.meta.total / pageSize),
  };
};

export const getProduct = async (
  slug: Product['slug'],
): Promise<Product | null> => {
  const result = await executeGraphql(ProductGetBySlugDocument, { slug });

  return result.product ?? null;
};
