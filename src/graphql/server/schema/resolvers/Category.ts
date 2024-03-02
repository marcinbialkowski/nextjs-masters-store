import type { CategoryResolvers } from './../../types.generated';

export const Category: CategoryResolvers = {
  products: async (parent, arg, ctx) => {
    const take = arg.first ?? 10;
    const skip = arg.skip ?? 0;

    const [data, total] = await ctx.prisma.$transaction([
      ctx.prisma.category
        .findUnique({
          where: { id: parent.id },
        })
        .products({ take, skip }),
      ctx.prisma.product.count({
        where: { categories: { some: { id: parent.id } } },
      }),
    ]);

    return {
      data:
        data?.map((product) => ({
          ...product,
          images: [],
          reviews: [],
          rating: 0,
        })) ?? [],
      meta: {
        count: data?.length ?? 0,
        total,
      },
    };
  },
};
