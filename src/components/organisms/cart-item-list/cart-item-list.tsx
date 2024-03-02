import { CartItem } from '@/components/molecules/cart-item';
import type { CartFragment } from '@/graphql/client';

interface CartItemListProps {
  cart: CartFragment;
}

export const CartItemList = ({ cart }: CartItemListProps) => (
  <section>
    <h2 className="sr-only">Products in your cart</h2>
    <ul className="divide-y divide-gray-300">
      {cart.items.map((item) => (
        <CartItem cartId={cart.id} item={item} key={item.id} />
      ))}
    </ul>
  </section>
);
