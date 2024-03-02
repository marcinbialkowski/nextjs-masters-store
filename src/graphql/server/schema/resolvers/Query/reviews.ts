import type { QueryResolvers } from './../../../types.generated';

export const reviews: NonNullable<QueryResolvers['reviews']> = (
  _parent,
  arg,
  ctx,
) =>
  ctx.prisma.product
    .findUnique({ where: { id: arg.productId } })
    .reviews({ orderBy: { createdAt: 'desc' } })
    .then((reviews) => reviews ?? []);
