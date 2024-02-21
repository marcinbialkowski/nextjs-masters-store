import { Suspense } from 'react';
import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/PageTitle';
import { CollectionList } from '@/components/organisms/collection-list';
import { RecommendedProductList } from '@/components/organisms/recommended-product-list';

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

const HomePage = () => (
  <>
    <PageTitle className="sr-only">Home</PageTitle>
    <MainBanner tag="section">
      <h2 className="sr-only">Collections</h2>
      <CollectionList collections={collections} />
    </MainBanner>
    <section className="container pt-14" data-testid="related-products">
      <h2 className="sr-only">Recommended products</h2>
      <Suspense>
        <RecommendedProductList />
      </Suspense>
    </section>
  </>
);

export default HomePage;
