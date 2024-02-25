import { ensureCanEditOrder } from '../../../utils';
import type { MutationResolvers } from './../../../types.generated';

export const orderAddItem: NonNullable<
  MutationResolvers['orderAddItem']
> = async (_parent, arg, ctx) => {
  const { orderId, productId } = arg;

  const order = await ctx.prisma.$transaction(async (client) => {
    const orderToUpdate = await ensureCanEditOrder({ orderId }, client);

    await client.orderItem.upsert({
      where: { productId_orderId: { orderId, productId } },
      update: { quantity: { increment: 1 } },
      create: {
        quantity: 1,
        productId: productId,
        orderId: orderId,
      },
    });

    return orderToUpdate;
  });

  return { ...order, items: [] };
};
