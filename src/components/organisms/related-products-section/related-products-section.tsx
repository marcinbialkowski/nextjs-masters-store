import { RelatedProductList } from '@/components/organisms/related-product-list';
import { type ProductFragment } from '@/graphql/client';

interface RelatedProductsSectionProps {
  className?: string;
  productSlug: ProductFragment['slug'];
}

export const RelatedProductsSection = ({
  className,
  productSlug,
}: RelatedProductsSectionProps) => (
  <section className={className} data-testid="related-products">
    <h2 className="mb-5 text-xl font-bold">Similar products</h2>
    <RelatedProductList productSlug={productSlug} />
  </section>
);
