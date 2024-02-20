import type { QueryResolvers } from './../../../types.generated';

export const collection: NonNullable<QueryResolvers['collection']> = async (
  _parent,
  arg,
  ctx,
) => {
  const result = await ctx.prisma.collection.findUnique({
    where: { slug: arg.slug },
  });
  const products = { data: [], meta: { count: 0, total: 0 } };

  return result ? { ...result, products } : null;
};
