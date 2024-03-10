import { notFound } from 'next/navigation';
import { getPaymentIntentStatus } from '@/services/payments';
import { CheckoutStatus } from '@/components/atoms/checkout-status';

interface CartSuccessProps {
  searchParams?: {
    payment_intent?: string;
    payment_intent_client_secret?: string;
  };
}

const CartSuccess = async ({ searchParams }: CartSuccessProps) => {
  if (
    !searchParams?.payment_intent ||
    !searchParams?.payment_intent_client_secret
  ) {
    notFound();
  }

  const status = await getPaymentIntentStatus(
    searchParams.payment_intent,
    searchParams.payment_intent_client_secret,
  );

  return (
    <div className="container pt-14">
      <CheckoutStatus status={status} />
    </div>
  );
};

export default CartSuccess;
