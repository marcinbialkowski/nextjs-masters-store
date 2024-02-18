import type { QueryResolvers } from './../../../types.generated';
import { prisma } from '@/db';

export const products: NonNullable<QueryResolvers['products']> = async (
  _parent,
  arg,
  _ctx,
) => {
  const take = arg.first ?? 10;
  const skip = arg.skip ?? 0;

  const [data, total] = await prisma.$transaction([
    prisma.product.findMany({
      take,
      skip,
      include: {
        images: true,
      },
    }),
    prisma.product.count(),
  ]);

  return {
    data,
    meta: {
      count: data.length,
      total,
    },
  };
};
