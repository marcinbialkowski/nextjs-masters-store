import { revalidatePath } from 'next/cache';
import { getCartIdCookie, setCartIdCookie } from './orders.utils';
import {
  CartAddItemDocument,
  CartChangeItemQuantityDocument,
  CartCreateDocument,
  CartGetByIdDocument,
  CartRemoveItemDocument,
  executeGraphql,
} from '@/graphql/client';

export const getCart = async () => {
  const cartId = getCartIdCookie();
  if (!cartId) {
    return null;
  }

  const { order: cart } = await executeGraphql(CartGetByIdDocument, {
    id: cartId,
  });

  return cart ?? null;
};

export const getCartItemsCount = async () => {
  const cart = await getCart();

  return cart?.items.reduce((count, item) => count + item.quantity, 0) ?? 0;
};

export const createCart = async () => {
  const { orderCreate: cart } = await executeGraphql(CartCreateDocument);
  setCartIdCookie(cart.id);
  return cart;
};

export const getOrCreateCart = async () => {
  const cart = await getCart();
  return cart ?? (await createCart());
};

export const addProductToCart = async (cartId: string, productId: string) => {
  await executeGraphql(CartAddItemDocument, {
    cartId,
    productId,
  });

  revalidatePath('/');
};

export const removeCartItem = async (cartId: string, productId: string) => {
  await executeGraphql(CartRemoveItemDocument, {
    cartId,
    productId,
  });

  revalidatePath('/');
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

  revalidatePath('/');
};
