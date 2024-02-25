import { AddToCartButton } from '@/components/atoms/add-to-cart-button';
import { addProductToCart, getOrCreateCart } from '@/services/orders';

interface AddToCartProps {
  className?: string;
  productId: string;
}

export const AddToCart = ({ className, productId }: AddToCartProps) => {
  const addToCartAction = async () => {
    'use server';
    const cart = await getOrCreateCart();
    await addProductToCart(cart.id, productId);
  };

  return (
    <form action={addToCartAction} className={className}>
      <AddToCartButton />
    </form>
  );
};
