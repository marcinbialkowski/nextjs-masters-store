import type { OrderResolvers } from './../../types.generated';

export const Order: OrderResolvers = {
  items: (parent, _arg, ctx) =>
    ctx.prisma.order
      .findUnique({ where: { id: parent.id } })
      .items({
        include: { product: true },
        orderBy: { createdAt: 'asc' },
      })
      .then(
        (items) =>
          items?.map((item) => ({
            ...item,
            product: {
              ...item.product,
              images: [],
              reviews: [],
            },
          })) ?? [],
      ),
};
