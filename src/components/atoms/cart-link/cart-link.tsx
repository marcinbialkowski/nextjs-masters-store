import { ShoppingCart } from 'lucide-react';
import { ActiveLink } from '@/components/atoms/active-link';
import { getCartItemsCount } from '@/services/orders';

export const CartLink = async () => {
  const itemsCount = await getCartItemsCount();

  return (
    <ActiveLink className="flex items-center gap-2 text-gray-600" href="/cart">
      <ShoppingCart size={20} />
      <span className="sr-only">Cart</span>
      <span className="text-sm font-medium">{itemsCount}</span>
    </ActiveLink>
  );
};
