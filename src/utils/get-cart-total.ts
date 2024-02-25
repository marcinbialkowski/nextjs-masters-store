import { type CartFragment, type CartItemFragment } from '@/graphql/client';

export const getCartItemTotal = (item: CartItemFragment) =>
  item.quantity * item.product.price;

export const getCartTotal = (cart: CartFragment) =>
  cart.items.reduce((total, item) => total + getCartItemTotal(item), 0);
