import { type ApolloContext } from '../types';
import { getProducts, type GetProductsOptions } from './get-products';
import { getProductsCount } from './get-products-count';

export const getProductsList = async (
  ctx: ApolloContext,
  options: GetProductsOptions,
) => {
  const [products, total] = await ctx.prisma.$transaction([
    getProducts(ctx, options),
    getProductsCount(ctx, options),
  ]);

  return {
    data: products.map((product) => ({
      ...product,
      images: [],
      reviews: [],
    })),
    meta: {
      count: products.length,
      total,
    },
  };
};
