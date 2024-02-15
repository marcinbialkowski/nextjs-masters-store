import { z } from 'zod';
import { notFound } from 'next/navigation';

const pageSchema = z.coerce.number().int().positive();

export const parsePageParam = (page: string) => {
  const parseResult = pageSchema.safeParse(page);
  return parseResult.success ? parseResult.data : notFound();
};
