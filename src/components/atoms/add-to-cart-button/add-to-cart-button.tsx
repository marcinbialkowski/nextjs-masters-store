'use client';

import { useFormStatus } from 'react-dom';
import { PrimaryButton } from '@/components/atoms/primary-button';

export const AddToCartButton = () => {
  const status = useFormStatus();

  return (
    <PrimaryButton
      className="w-full"
      data-testid="add-to-cart-button"
      disabled={status.pending}
      type="submit"
    >
      Add to cart
    </PrimaryButton>
  );
};
