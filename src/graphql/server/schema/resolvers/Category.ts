import { getProductsList } from '../../utils/get-products-list';
import type { CategoryResolvers } from './../../types.generated';

export const Category: CategoryResolvers = {
  products: async (parent, arg, ctx) =>
    getProductsList(ctx, {
      categoryId: parent.id,
      take: arg.first ?? undefined,
      skip: arg.skip ?? undefined,
    }),
};
