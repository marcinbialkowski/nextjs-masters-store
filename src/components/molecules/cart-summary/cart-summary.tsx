import clsx from 'clsx';
import { type CartFragment } from '@/graphql/client';
import { PrimaryButton } from '@/components/atoms/primary-button';
import { formatMoney } from '@/utils/format-money';
import { getCartTotal } from '@/utils/get-cart-total';

interface CartSummaryProps {
  cart: CartFragment;
  className?: string;
}

export const CartSummary = ({ cart, className }: CartSummaryProps) => (
  <section className={clsx(className, 'flex flex-col justify-end gap-6')}>
    <h2 className="sr-only">Order summary</h2>
    <span className="flex justify-between text-lg font-bold">
      <span>Total:</span>
      <span>{formatMoney(getCartTotal(cart))}</span>
    </span>
    <PrimaryButton>Checkout</PrimaryButton>
  </section>
);
