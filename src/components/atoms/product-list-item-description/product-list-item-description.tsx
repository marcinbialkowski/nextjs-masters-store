import Link from 'next/link';
import { ProductPrice } from '@/components/atoms/product-price';
import { type ProductListItemFragment } from '@/graphql/client';
import { Rating } from '@/components/molecules/rating';

interface ProductListItemDescriptionProps {
  product: ProductListItemFragment;
}

export const ProductListItemDescription = ({
  product,
}: ProductListItemDescriptionProps) => (
  <div className="grid h-24 grid-cols-[1fr_max-content] gap-x-3 gap-y-1 px-3 pb-3 pt-2">
    <Link
      className="line-clamp-2 h-[2lh] font-bold hover:underline"
      href={`/product/${product.slug}`}
    >
      <h3>{product.name}</h3>
    </Link>
    <ProductPrice
      className="justify-self-end text-gray-600"
      price={product.price}
    />
    <Rating
      className="col-span-2 justify-self-end text-sm"
      rating={product.rating}
      starSize={16}
    />
  </div>
);
