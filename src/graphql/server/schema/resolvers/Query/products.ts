import type { QueryResolvers } from './../../../types.generated';

export const products: NonNullable<QueryResolvers['products']> = async (
  _parent,
  arg,
  ctx,
) => {
  const take = arg.first ?? 10;
  const skip = arg.skip ?? 0;

  const [data, total] = await ctx.prisma.$transaction([
    ctx.prisma.product.findMany({
      take,
      skip,
      include: {
        images: true,
      },
    }),
    ctx.prisma.product.count(),
  ]);

  return {
    data,
    meta: {
      count: data.length,
      total,
    },
  };
};
