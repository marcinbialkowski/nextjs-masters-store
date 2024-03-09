import type { QueryResolvers } from '../../../types.generated';
import { getProductsList } from '../../../utils/get-products-list';

export const products: NonNullable<QueryResolvers['products']> = async (
  _parent,
  arg,
  ctx,
) =>
  getProductsList(ctx, {
    take: arg.first ?? undefined,
    skip: arg.skip ?? undefined,
    ids: arg.ids ?? undefined,
    search: arg.search ?? undefined,
    sortBy: arg.sortBy ?? undefined,
    sortDirection: arg.sortDirection ?? undefined,
  });
