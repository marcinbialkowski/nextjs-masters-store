import type { QueryResolvers } from './../../../types.generated';

export const product: NonNullable<QueryResolvers['product']> = async (
  _parent,
  arg,
  ctx,
) => {
  const product = await ctx.prisma.product.findUnique({
    where: { slug: arg.slug },
  });

  if (!product) {
    return null;
  }

  const aggregations = await ctx.prisma.review.aggregate({
    _avg: {
      rating: true,
    },
    where: {
      productId: product.id,
    },
  });

  return {
    ...product,
    images: [],
    reviews: [],
    rating: aggregations._avg.rating,
  };
};
