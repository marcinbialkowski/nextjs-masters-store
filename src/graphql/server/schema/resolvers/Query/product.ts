import type { QueryResolvers } from './../../../types.generated';

export const product: NonNullable<QueryResolvers['product']> = (
  _parent,
  arg,
  ctx,
) =>
  ctx.prisma.product
    .findUnique({
      where: { slug: arg.slug },
    })
    .then((product) => (product ? { ...product, images: [] } : product));
