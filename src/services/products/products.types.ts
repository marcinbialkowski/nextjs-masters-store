import {
  type ProductFragment,
  type ProductListItemFragment,
  type ProductsSortBy,
  type ProductsSortDirection,
} from '@/graphql/client';

export interface ProductsListOptions {
  page?: number;
  pageSize: number;
  search?: string;
  sortBy?: ProductsSortBy;
  sortDirection?: ProductsSortDirection;
}

export interface GetProductsResult {
  products: ProductListItemFragment[];
  pagesCount: number;
}

export type GetProductResult = ProductFragment | null;
