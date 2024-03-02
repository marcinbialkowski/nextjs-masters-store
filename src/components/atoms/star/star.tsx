import { Star as StarIcon } from 'lucide-react';

interface StarProps {
  isFilled: boolean;
  size?: number;
  strokeWidth?: number;
}

export const Star = ({ isFilled, size = 20, strokeWidth }: StarProps) => (
  <StarIcon
    className={
      isFilled ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-400'
    }
    size={size}
    strokeWidth={strokeWidth}
  />
);
