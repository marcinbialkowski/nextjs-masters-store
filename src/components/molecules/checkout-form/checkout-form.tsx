'use client';

import { PaymentElement } from '@stripe/react-stripe-js';
import { useConfirmPayment } from './use-confirm-payment';
import { Button } from '@/components/atoms/button';

export const CheckoutForm = () => {
  const { confirmPayment, errorMessage, isLoading } = useConfirmPayment();

  return (
    <form className="mx-auto max-w-md" onSubmit={confirmPayment}>
      <PaymentElement options={{ layout: 'tabs' }} />
      <Button
        className="mt-6 w-full"
        disabled={isLoading}
        type="submit"
        variant="primary"
      >
        Pay now
      </Button>
      {errorMessage && (
        <p className="mt-4 text-base text-gray-700" role="status">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
