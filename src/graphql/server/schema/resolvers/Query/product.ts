import type { QueryResolvers } from './../../../types.generated';
import { prisma } from '@/db';

export const product: NonNullable<QueryResolvers['product']> = (
  _parent,
  arg,
  _ctx,
) =>
  prisma.product.findUnique({
    where: { slug: arg.slug },
    include: {
      images: true,
    },
  });
