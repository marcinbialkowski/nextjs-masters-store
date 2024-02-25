import { z } from 'zod';
import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest } from 'next/server';

const payloadSchema = z.object({
  productSlug: z.string(),
});

export async function POST(request: NextRequest): Promise<Response> {
  const rawPayload: unknown = await request.json();
  const payload = payloadSchema.safeParse(rawPayload);

  if (!payload.success) {
    return new Response('Invalid payload', { status: 400 });
  }

  revalidatePath(`/product/${payload.data.productSlug}`);
  revalidateTag('products');

  return new Response(null, { status: 204 });
}
