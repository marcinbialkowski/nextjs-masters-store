import { ShoppingCart } from 'lucide-react';
import { ActiveLink } from '@/components/atoms/active-link';

export const CartLink = () => (
  <ActiveLink className="text-gray-600" href="/cart">
    <ShoppingCart size={20} />
    <span className="sr-only">Cart</span>
  </ActiveLink>
);
