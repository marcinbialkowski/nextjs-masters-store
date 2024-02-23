import {
  type ProductFragment,
  type ProductListItemFragment,
} from '@/graphql/client';

export interface ProductsPaginationOptions {
  page?: number;
  pageSize: number;
  search?: string;
}

export interface GetProductsResult {
  products: ProductListItemFragment[];
  pagesCount: number;
}

export type GetProductResult = ProductFragment | null;
