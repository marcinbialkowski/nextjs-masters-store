import type { QueryResolvers } from './../../../types.generated';

export const order: NonNullable<QueryResolvers['order']> = (
  _parent,
  arg,
  ctx,
) =>
  ctx.prisma.order
    .findUnique({
      where: { id: arg.id, status: arg.status ?? undefined },
    })
    .then((order) => (order ? { ...order, items: [] } : null));
