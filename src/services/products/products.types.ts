import type { Product } from '@/types';

export interface ProductResponse {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
}

export interface GetProductsOptions {
  page?: number;
  pageSize: number;
}

export interface GetProductsResult {
  products: Product[];
  pagesCount: number;
}
