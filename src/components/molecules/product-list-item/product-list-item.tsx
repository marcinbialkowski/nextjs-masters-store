import { Link } from '@/components/atoms/link';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductListItemDescription } from '@/components/atoms/product-list-item-description';
import { type ProductListItemFragment } from '@/graphql/client';

interface ProductListItemProps {
  product: ProductListItemFragment;
}

export const ProductListItem = ({ product }: ProductListItemProps) => (
  <li>
    <article className="flex w-full flex-col rounded-lg bg-white shadow">
      <Link href={`/product/${product.slug}`}>
        {product.images[0] && (
          <ProductImage className="rounded-t-lg" image={product.images[0]} />
        )}
        <ProductListItemDescription product={product} />
      </Link>
    </article>
  </li>
);
