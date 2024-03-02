import { Reviews } from '@/components/organisms/reviews';
import { getReviews } from '@/services/reviews';

interface ProductReviewsSectionProps {
  className?: string;
  productId: string;
}

export const ProductReviewsSection = async ({
  className,
  productId,
}: ProductReviewsSectionProps) => {
  const reviews = await getReviews(productId);

  return (
    <section className={className}>
      <h2 className="mb-5 text-xl font-bold">Reviews</h2>
      <Reviews productId={productId} reviews={reviews} />
    </section>
  );
};
