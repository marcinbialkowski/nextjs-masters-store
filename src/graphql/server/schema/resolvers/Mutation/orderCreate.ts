import type { MutationResolvers } from './../../../types.generated';

export const orderCreate: NonNullable<MutationResolvers['orderCreate']> = (
  _parent,
  _arg,
  ctx,
) =>
  ctx.prisma.order
    .create({ data: {} })
    .then((order) => ({ ...order, items: [] }));
