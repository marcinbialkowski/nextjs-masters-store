'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/atoms/button';

export const AddToCartButton = () => {
  const status = useFormStatus();

  return (
    <Button
      className="w-full"
      data-testid="add-to-cart-button"
      disabled={status.pending}
      type="submit"
      variant="primary"
    >
      Add to cart
    </Button>
  );
};
