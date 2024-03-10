'use client';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe-promise';
import { CheckoutForm } from '@/components/molecules/checkout-form';

interface PaymentFormProps {
  clientSecret: string;
}

export const StripeForm = ({ clientSecret }: PaymentFormProps) => (
  <Elements
    options={{ appearance: { theme: 'stripe' }, clientSecret }}
    stripe={stripePromise}
  >
    <CheckoutForm />
  </Elements>
);
