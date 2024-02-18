import { type Product } from '@/graphql/client';

export interface GetProductsOptions {
  page?: number;
  pageSize: number;
}

export interface GetProductsResult {
  products: Product[];
  pagesCount: number;
}
