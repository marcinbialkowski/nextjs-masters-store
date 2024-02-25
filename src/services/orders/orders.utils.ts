import { cookies } from 'next/headers';

const CART_COOKIE_NAME = 'cart_id';

export const getCartIdCookie = () => cookies().get(CART_COOKIE_NAME)?.value;

export const setCartIdCookie = (cartId: string) =>
  cookies().set(CART_COOKIE_NAME, cartId, {
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    secure: true,
  });
