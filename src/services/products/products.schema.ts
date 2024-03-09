import { z } from 'zod';

const relatedProductSchema = z.object({
  id: z.string(),
});

export const relatedProductsSchema = z.array(relatedProductSchema);
