'use server';

import { changeCartItemQuantity } from '@/services/orders';

export const changeQuantity = async (
  cartId: string,
  productId: string,
  quantity: number,
) => {
  await changeCartItemQuantity(cartId, productId, quantity);
};
