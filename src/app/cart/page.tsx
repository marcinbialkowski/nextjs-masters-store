import { PageTitle } from '@/components/atoms/page-title';
import { MainBanner } from '@/components/atoms/main-banner';
import { EmptyCart } from '@/components/atoms/empty-cart';
import { Cart } from '@/components/organisms/cart';
import { getCart } from '@/services/orders';

const CartPage = async () => {
  const cart = await getCart();

  return (
    <>
      <MainBanner>
        <PageTitle>Your Cart</PageTitle>
      </MainBanner>
      <div className="container pt-14">
        {cart && cart.items.length > 0 ? <Cart cart={cart} /> : <EmptyCart />}
      </div>
    </>
  );
};

export default CartPage;
