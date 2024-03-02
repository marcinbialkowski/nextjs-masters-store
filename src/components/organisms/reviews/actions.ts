'use server';

import { createReview } from '@/services/reviews';
import type { ReviewCreateMutationVariables } from '@/graphql/client';

export const submitReviewAction = async (
  data: ReviewCreateMutationVariables,
) => {
  await createReview(data);
};
