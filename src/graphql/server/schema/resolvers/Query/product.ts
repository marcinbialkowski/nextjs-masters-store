import type { QueryResolvers } from './../../../types.generated';
export const product: NonNullable<QueryResolvers['product']> = (
  _parent,
  _arg,
  _ctx,
) => ({
  id: '1',
  name: 'Test',
  slug: 'test-1',
  description: 'desc',
  price: 122,
});
