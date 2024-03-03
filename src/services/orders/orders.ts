import { getCartIdCookie, setCartIdCookie } from './orders.utils';
import {
  CartAddItemDocument,
  CartChangeItemQuantityDocument,
  CartCreateDocument,
  CartGetByIdDocument,
  CartRemoveItemDocument,
  executeGraphql,
} from '@/graphql/client';

const getCart = async (cartId: string) => {
  const { order: cart } = await executeGraphql(CartGetByIdDocument, {
    id: cartId,
  });

  return cart ?? null;
};

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

export const addProductToCart = async (productId: string) => {
  const cart = await getOrCreateCart();
  await executeGraphql(CartAddItemDocument, {
    cartId: cart.id,
    productId,
  });
};

export const removeCartItem = async (cartId: string, productId: string) => {
  await executeGraphql(CartRemoveItemDocument, {
    cartId,
    productId,
  });
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
};
