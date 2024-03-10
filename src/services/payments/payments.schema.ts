import { z } from 'zod';

export const paymentIntentMetadataSchema = z.object({
  orderId: z.string(),
});
