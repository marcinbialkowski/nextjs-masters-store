import { useElements, useStripe } from '@stripe/react-stripe-js';
import { type FormEvent, useState } from 'react';

export const useConfirmPayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const confirmPayment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/cart/status`,
      },
    });

    const message =
      error.type === 'card_error' || error.type === 'validation_error'
        ? error.message ?? 'Something went wrong'
        : 'An unexpected error occurred.';

    setErrorMessage(message);
    setIsLoading(false);
  };

  return {
    confirmPayment,
    errorMessage,
    isLoading: isLoading || !stripe || !elements,
  };
};
