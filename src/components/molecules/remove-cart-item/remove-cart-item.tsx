import { type CartFragment, type CartItemFragment } from '@/graphql/client';
import { removeCartItem } from '@/services/orders';
import { RemoveCartItemButton } from '@/components/atoms/remove-cart-item-button';

interface RemoveCartItemProps {
  cartId: CartFragment['id'];
  className?: string;
  productId: CartItemFragment['product']['id'];
}

export const RemoveCartItem = ({
  cartId,
  className,
  productId,
}: RemoveCartItemProps) => {
  const removeCartItemAction = async () => {
    'use server';
    await removeCartItem(cartId, productId);
  };

  return (
    <form action={removeCartItemAction} className={className}>
      <RemoveCartItemButton />
    </form>
  );
};
