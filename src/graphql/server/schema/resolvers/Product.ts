import type { ProductResolvers } from './../../types.generated';

export const Product: ProductResolvers = {
  images: (parent, _arg, ctx) =>
    ctx.prisma.product
      .findUnique({ where: { id: parent.id } })
      .images()
      .then((images) => images ?? []),
  reviews: (parent, _arg, ctx) =>
    ctx.prisma.product
      .findUnique({ where: { id: parent.id } })
      .reviews({ orderBy: { createdAt: 'desc' } })
      .then((reviews) => reviews ?? []),
};
