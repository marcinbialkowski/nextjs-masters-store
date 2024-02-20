import type { CollectionResolvers } from './../../types.generated';

export const Collection: CollectionResolvers = {
  products: async (parent, arg, ctx) => {
    const take = arg.first ?? 10;
    const skip = arg.skip ?? 0;

    const [data, total] = await ctx.prisma.$transaction([
      ctx.prisma.collection
        .findUnique({
          where: { id: parent.id },
        })
        .products({ take, skip }),
      ctx.prisma.product.count({
        where: { collections: { some: { id: parent.id } } },
      }),
    ]);

    return {
      data: data?.map((product) => ({ ...product, images: [] })) ?? [],
      meta: {
        count: data?.length ?? 0,
        total,
      },
    };
  },
};
