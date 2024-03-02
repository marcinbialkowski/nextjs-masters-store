import { z } from 'zod';
import { notFound } from 'next/navigation';

const pageSchema = z.coerce.number().int().positive();
const sortBySchema = z.enum(['PRICE']).default('PRICE');
const sortDirectionSchema = z.enum(['ASC', 'DESC']).default('ASC');

const searchParamsSchema = z.object({
  sortBy: sortBySchema,
  sortDirection: sortDirectionSchema,
});

export const parsePageParam = (page: string) => {
  const parseResult = pageSchema.safeParse(page);
  return parseResult.success ? parseResult.data : notFound();
};

export const parseSearchParams = (params: Record<string, unknown>) => {
  const parseResult = searchParamsSchema.safeParse(params);
  return parseResult.success ? parseResult.data : notFound();
};
