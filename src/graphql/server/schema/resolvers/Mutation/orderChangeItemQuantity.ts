import { GraphQLError } from 'graphql/index';
import { ensureCanEditOrder } from '../../../utils';
import type { MutationResolvers } from './../../../types.generated';

export const orderChangeItemQuantity: NonNullable<
  MutationResolvers['orderChangeItemQuantity']
> = async (_parent, arg, ctx) => {
  const { orderId, productId, quantity } = arg;

  if (quantity < 1) {
    throw new GraphQLError('Quantity cannot be less than 1');
  }

  const order = await ctx.prisma.$transaction(async (client) => {
    const orderToUpdate = await ensureCanEditOrder({ orderId }, client);

    await client.orderItem.update({
      where: { productId_orderId: { orderId, productId } },
      data: { quantity },
    });

    return orderToUpdate;
  });

  return { ...order, items: [] };
};
