import { GraphQLError } from 'graphql/index';
import { type PrismaClient } from '@prisma/client';
import type * as runtime from '@prisma/client/runtime/library';

interface Arg {
  orderId: string;
}

export const ensureCanEditOrder = async (
  { orderId }: Arg,
  client: Omit<PrismaClient, runtime.ITXClientDenyList>,
) => {
  const order = await client.order.findUnique({
    where: { id: orderId, status: 'CREATED' },
  });

  if (!order) {
    throw new GraphQLError(
      `Order with id ${orderId} and status CREATED doesn't exist`,
    );
  }

  return order;
};
