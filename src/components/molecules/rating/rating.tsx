import clsx from 'clsx';
import { formatRating } from './format-rating';
import { StarRating } from '@/components/atoms/star-rating';
import { MAX_REVIEW } from '@/const';

interface RatingProps {
  className?: string;
  rating: number;
}

export const Rating = ({ className, rating }: RatingProps) => {
  if (!rating) {
    return null;
  }

  return (
    <div className={clsx(className, 'flex items-center gap-3')}>
      <p className="italic">
        {formatRating(rating)} / {MAX_REVIEW}
      </p>
      <StarRating rating={Math.round(rating)} />
    </div>
  );
};
