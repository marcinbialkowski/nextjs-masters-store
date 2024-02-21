import {
  type ProductFragment,
  type ProductListItemFragment,
} from '@/graphql/client';

export interface ProductsPaginationOptions {
  page?: number;
  pageSize: number;
}

export interface GetProductsResult {
  products: ProductListItemFragment[];
  pagesCount: number;
}

export type GetProductResult = ProductFragment | null;
