import { getProducts } from '@/services/products';
import { H1 } from '@/components/atoms/h1';
import { CollectionList } from '@/components/organisms/collection-list';
import { ProductList } from '@/components/organisms/product-list';

// TODO: add collection image to db and fetch the list from API
const collections = [
  {
    name: 'Summer Vibes',
    slug: 'summer-vibes',
    image: {
      alt: '',
      url: 'https://api.hyperfunctor.com/uploads/M8rn28p_L_Qe_Wf_D93_AU_Mcv_306f0ba042.png',
      width: 1344,
      height: 896,
    },
  },
  {
    name: 'New Arrivals',
    slug: 'new-arrivals',
    image: {
      alt: '',
      url: 'https://api.hyperfunctor.com/uploads/Hj_W7_TV_Sr_Rl_Ob1h874t_WZ_aaa5901be9.png',
      width: 1344,
      height: 896,
    },
  },
  {
    name: 'Elegant Extras',
    slug: 'elegant-extras',
    image: {
      alt: '',
      url: 'https://api.hyperfunctor.com/uploads/Ho_V6_Z_Gnu_TJ_2_Cvgr_X_Qak_O_179269a86d.png',
      width: 1344,
      height: 896,
    },
  },
];

const HomePage = async () => {
  const { products } = await getProducts({
    pageSize: 4,
  });

  return (
    <>
      <H1 className="sr-only">Home</H1>
      <CollectionList collections={collections} />
      <div data-testid="related-products">
        <ProductList className="md:mt-6" products={products} />
      </div>
    </>
  );
};

export default HomePage;
