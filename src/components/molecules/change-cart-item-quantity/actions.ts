'use server';

import { revalidatePath } from 'next/cache';
import { changeCartItemQuantity } from '@/services/orders';

export const changeQuantity = async (
  cartId: string,
  productId: string,
  quantity: number,
) => {
  await changeCartItemQuantity(cartId, productId, quantity);
  revalidatePath('/cart');
};
