import { EmptyResultMessage } from '@/components/atoms/empty-result-message';
import { ReviewListItem } from '@/components/molecules/review-list-item';
import { type ReviewFragment } from '@/graphql/client';

interface ReviewListProps {
  reviews: ReviewFragment[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return (
      <EmptyResultMessage className="pt-0">No reviews yet</EmptyResultMessage>
    );
  }

  return (
    <ul className="divide-y divide-gray-300">
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
