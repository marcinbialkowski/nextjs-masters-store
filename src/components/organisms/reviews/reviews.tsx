'use client';

import { useOptimistic, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { z } from 'zod';
import { submitReviewAction } from './actions';
import { ReviewForm } from '@/components/molecules/review-form';
import { ReviewList } from '@/components/organisms/review-list';
import { type ReviewFragment } from '@/graphql/client';
import { MAX_REVIEW } from '@/const';

interface ReviewsProps {
  productId: string;
  reviews: ReviewFragment[];
}

const reviewSchema = z
  .object({
    productId: z.string(),
    name: z.string(),
    email: z.string(),
    headline: z.string(),
    content: z.string(),
    rating: z.coerce.number().int().gte(1).lte(MAX_REVIEW),
  })
  .transform(({ headline, name, ...data }) => ({
    title: headline,
    author: name,
    ...data,
  }));

export const Reviews = ({ productId, reviews }: ReviewsProps) => {
  const [formKey, setFormKey] = useState(() => uuid4());
  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (state, newReview: ReviewFragment) => [newReview, ...state],
  );

  const createReview = async (formData: FormData) => {
    const reviewData = reviewSchema.parse(Object.fromEntries(formData));
    addOptimisticReview({ id: uuid4(), ...reviewData });
    setFormKey(uuid4());
    await submitReviewAction(reviewData);
  };

  return (
    <div className="grid grid-cols-1 gap-16 2xl:grid-cols-[3fr_5fr]">
      <form action={createReview} data-testid="add-review-form" key={formKey}>
        <ReviewForm productId={productId} />
      </form>
      <ReviewList reviews={optimisticReviews} />
    </div>
  );
};
