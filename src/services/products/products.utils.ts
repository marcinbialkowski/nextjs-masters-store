import { type ProductsListOptions } from './products.types';
import { type ProductsGetListQuery } from '@/graphql/client';

export const toProductsPaginationVariables = ({
  page = 1,
  pageSize,
}: Pick<ProductsListOptions, 'page' | 'pageSize'>) => ({
  first: pageSize,
  skip: (page - 1) * pageSize,
});

export const toProductsPaginatedResult = (
  queryResult: ProductsGetListQuery['products'],
  { pageSize }: Pick<ProductsListOptions, 'pageSize'>,
) => ({
  products: queryResult.data,
  pagesCount: Math.ceil(queryResult.meta.total / pageSize),
});
