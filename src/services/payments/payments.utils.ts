import Stripe from 'stripe';

const { STRIPE_SECRET_KEY } = process.env;

export const getStripe = () => {
  if (!STRIPE_SECRET_KEY) {
    throw new Error('Missing Stripe configuration');
  }

  return new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
    typescript: true,
  });
};
