import { type ProductsPaginationOptions } from './products.types';
import { type ProductsGetListQuery } from '@/graphql/client';

export const toProductsPaginationVariables = ({
  page = 1,
  pageSize,
}: ProductsPaginationOptions) => ({
  first: pageSize,
  skip: (page - 1) * pageSize,
});

export const toProductsPaginatedResult = (
  queryResult: ProductsGetListQuery['products'],
  { pageSize }: Pick<ProductsPaginationOptions, 'pageSize'>,
) => ({
  products: queryResult.data,
  pagesCount: Math.ceil(queryResult.meta.total / pageSize),
});
