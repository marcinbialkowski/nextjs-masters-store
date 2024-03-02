import { revalidateTag, unstable_cache as cache } from 'next/cache';
import {
  executeGraphql,
  ReviewCreateDocument,
  type ReviewCreateMutationVariables,
  type ReviewFragment,
  ReviewsGetByProductIdDocument,
} from '@/graphql/client';

export const createReview = async (data: ReviewCreateMutationVariables) => {
  await executeGraphql(ReviewCreateDocument, data);
  revalidateTag('reviews');
  revalidateTag('products');
};

export const getReviews = cache(
  (productId: string): Promise<ReviewFragment[]> =>
    executeGraphql(ReviewsGetByProductIdDocument, { productId }).then(
      (result) => result.reviews,
    ),
  ['get-reviews'],
  {
    tags: ['reviews'],
  },
);
