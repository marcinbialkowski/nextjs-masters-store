import { ensureCanEditOrder } from '../../../utils';
import type { MutationResolvers } from './../../../types.generated';

export const orderRemoveItem: NonNullable<
  MutationResolvers['orderRemoveItem']
> = async (_parent, arg, ctx) => {
  const { orderId, productId } = arg;

  const order = await ctx.prisma.$transaction(async (client) => {
    const orderToUpdate = await ensureCanEditOrder({ orderId }, client);

    await client.orderItem.delete({
      where: { productId_orderId: { orderId, productId } },
    });

    return orderToUpdate;
  });

  return { ...order, items: [] };
};
