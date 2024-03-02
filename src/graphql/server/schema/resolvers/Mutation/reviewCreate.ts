import { z } from 'zod';
import { GraphQLError } from 'graphql/index';
import type { MutationResolvers } from './../../../types.generated';
import { MAX_REVIEW } from '@/const';

const argsSchema = z.object({
  productId: z.string(),
  author: z.string().trim().min(2),
  email: z.string().trim().email(),
  title: z.string().trim().min(2),
  content: z.string().trim().min(2),
  rating: z.number().int().gte(1).lte(MAX_REVIEW),
});

export const reviewCreate: NonNullable<MutationResolvers['reviewCreate']> = (
  _parent,
  arg,
  ctx,
) => {
  const payload = argsSchema.safeParse(arg);

  if (!payload.success) {
    throw new GraphQLError('Invalid arguments', {
      extensions: payload.error.flatten().fieldErrors,
    });
  }

  return ctx.prisma.review.create({ data: payload.data });
};
