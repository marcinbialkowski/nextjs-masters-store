import { getProductsList } from '../../utils/get-products-list';
import type { CollectionResolvers } from './../../types.generated';

export const Collection: CollectionResolvers = {
  products: async (parent, arg, ctx) =>
    getProductsList(ctx, {
      collectionId: parent.id,
      take: arg.first ?? undefined,
      skip: arg.skip ?? undefined,
    }),
};
