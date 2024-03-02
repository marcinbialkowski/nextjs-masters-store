import { RecommendedProductList } from '@/components/organisms/recommended-product-list';

interface RecommendedProductsSectionProps {
  className?: string;
}

export const RecommendedProductsSection = ({
  className,
}: RecommendedProductsSectionProps) => (
  <section className={className} data-testid="related-products">
    <h2 className="mb-5 text-xl font-bold">Similar products</h2>
    <RecommendedProductList />
  </section>
);
