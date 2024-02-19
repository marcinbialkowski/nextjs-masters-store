import type { QueryResolvers } from './../../../types.generated';

export const category: NonNullable<QueryResolvers['category']> = async (
  _parent,
  arg,
  ctx,
) => {
  const result = await ctx.prisma.category.findUnique({
    where: { slug: arg.slug },
  });
  const products = { data: [], meta: { count: 0, total: 0 } };

  return result ? { ...result, products } : null;
};
