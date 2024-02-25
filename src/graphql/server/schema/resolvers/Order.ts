import type { OrderResolvers } from './../../types.generated';

export const Order: OrderResolvers = {
  items: (parent, _arg, ctx) =>
    ctx.prisma.order
      .findUnique({ where: { id: parent.id } })
      .items({
        include: { product: { include: { images: true } } },
        orderBy: { createdAt: 'asc' },
      })
      .then((items) => items ?? []),
};
