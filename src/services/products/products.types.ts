import {
  type ProductFragment,
  type ProductListItemFragment,
  type SortBy,
  type SortDirection,
} from '@/graphql/client';

export interface ProductsPaginationOptions {
  page?: number;
  pageSize: number;
  search?: string;
  sortBy?: SortBy;
  sortDirection?: SortDirection;
}

export interface GetProductsResult {
  products: ProductListItemFragment[];
  pagesCount: number;
}

export type GetProductResult = ProductFragment | null;
