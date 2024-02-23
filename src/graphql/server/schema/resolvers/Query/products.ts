import type { QueryResolvers } from './../../../types.generated';

export const products: NonNullable<QueryResolvers['products']> = async (
  _parent,
  arg,
  ctx,
) => {
  const take = arg.first ?? 10;
  const skip = arg.skip ?? 0;
  const search = arg.search;

  const where = search
    ? ({ name: { contains: search, mode: 'insensitive' } } as const)
    : {};

  const [data, total] = await ctx.prisma.$transaction([
    ctx.prisma.product.findMany({
      where,
      take,
      skip,
    }),
    ctx.prisma.product.count({ where }),
  ]);

  return {
    data: data.map((product) => ({ ...product, images: [] })),
    meta: {
      count: data.length,
      total,
    },
  };
};
