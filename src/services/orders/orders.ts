import { revalidateTag, unstable_cache as cache } from 'next/cache';
import { getCartIdCookie, setCartIdCookie } from './orders.utils';
import {
  CartAddItemDocument,
  CartChangeItemQuantityDocument,
  CartCreateDocument,
  CartGetByIdDocument,
  CartRemoveItemDocument,
  executeGraphql,
} from '@/graphql/client';

const getCart = cache(
  async (cartId: string) => {
    const { order: cart } = await executeGraphql(CartGetByIdDocument, {
      id: cartId,
    });

    return cart ?? null;
  },
  ['get-cart'],
  { tags: ['cart'] },
);

export const getCartFromCookie = async () => {
  const cartId = getCartIdCookie();

  if (!cartId) {
    return null;
  }

  return getCart(cartId);
};

export const getCartItemsCount = async () => {
  const cart = await getCartFromCookie();

  return cart?.items.reduce((count, item) => count + item.quantity, 0) ?? 0;
};

export const createCart = async () => {
  const { orderCreate: cart } = await executeGraphql(CartCreateDocument);
  setCartIdCookie(cart.id);
  return cart;
};

export const getOrCreateCart = async () => {
  const cart = await getCartFromCookie();
  return cart ?? (await createCart());
};

export const addProductToCart = async (cartId: string, productId: string) => {
  await executeGraphql(CartAddItemDocument, {
    cartId,
    productId,
  });

  revalidateTag('cart');
};

export const removeCartItem = async (cartId: string, productId: string) => {
  await executeGraphql(CartRemoveItemDocument, {
    cartId,
    productId,
  });

  revalidateTag('cart');
};

export const changeCartItemQuantity = async (
  cartId: string,
  productId: string,
  quantity: number,
) => {
  await executeGraphql(CartChangeItemQuantityDocument, {
    cartId,
    productId,
    quantity,
  });

  revalidateTag('cart');
};
