import { redirect } from 'next/navigation';
import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { StripeForm } from '@/components/molecules/stripe-form';
import { createPaymentIntent } from '@/services/payments';

const CheckoutPage = async () => {
  let clientSecret;

  try {
    clientSecret = await createPaymentIntent();
  } catch (error) {
    redirect('/cart');
  }

  return (
    <>
      <MainBanner>
        <PageTitle>Checkout</PageTitle>
      </MainBanner>
      <div className="container pt-14">
        <StripeForm clientSecret={clientSecret} />
      </div>
    </>
  );
};

export default CheckoutPage;
