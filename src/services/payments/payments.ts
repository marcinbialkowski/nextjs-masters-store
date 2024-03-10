import { getStripe } from './payments.utils';
import { getCartFromCookie } from '@/services/orders';
import { getCartTotal } from '@/utils/get-cart-total';
import { paymentIntentMetadataSchema } from '@/services/payments/payments.schema';

export const createPaymentIntent = async () => {
  const cart = await getCartFromCookie();
  const amount = cart ? getCartTotal(cart) : 0;

  if (!cart || !amount) {
    throw new Error('No products in the cart');
  }

  const paymentIntent = await getStripe().paymentIntents.create({
    amount,
    payment_method_types: ['card'],
    currency: 'usd',
    metadata: paymentIntentMetadataSchema.parse({
      orderId: cart.id,
    }),
  });

  if (!paymentIntent.client_secret) {
    throw new Error('Missing paymentIntent.client_secret');
  }

  return paymentIntent.client_secret;
};

export const getPaymentIntentStatus = async (
  id: string,
  clientSecret: string,
) => {
  const paymentIntent = await getStripe().paymentIntents.retrieve(id);

  if (paymentIntent.client_secret !== clientSecret) {
    throw Error('Invalid client secret');
  }

  return paymentIntent.status;
};
