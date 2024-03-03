import { revalidatePath } from 'next/cache';
import { AddToCartButton } from '@/components/atoms/add-to-cart-button';
import { addProductToCart } from '@/services/orders';
import { type ProductFragment } from '@/graphql/client';

interface AddToCartProps {
  className?: string;
  product: ProductFragment;
}

export const AddToCart = ({ className, product }: AddToCartProps) => {
  const addToCartAction = async () => {
    'use server';
    await addProductToCart(product.id);
    revalidatePath('/cart');
    revalidatePath(`/product/${product.slug}`);
  };

  return (
    <form action={addToCartAction} className={className}>
      <AddToCartButton />
    </form>
  );
};
