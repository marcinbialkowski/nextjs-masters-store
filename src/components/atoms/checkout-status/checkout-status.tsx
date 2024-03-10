import type Stripe from 'stripe';
import { toMessage } from './to-message';

interface CheckoutStatusProps {
  status: Stripe.PaymentIntent.Status;
}

export const CheckoutStatus = ({ status }: CheckoutStatusProps) => (
  <p className="text-center text-xl">{toMessage(status)}</p>
);
