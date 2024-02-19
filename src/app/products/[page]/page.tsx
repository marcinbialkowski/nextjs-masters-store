import { notFound } from 'next/navigation';
import { H1 } from '@/components/atoms/h1';
import { ProductList } from '@/components/organisms/product-list';
import { getProducts } from '@/services/products';
import { Pagination } from '@/components/molecules/pagination';
import { parsePageParam } from '@/utils/parse-page-param';

interface ProductsPageProps {
  params: { page: string };
}

const pageSize = 4;

export const generateStaticParams = async () => {
  const { pagesCount } = await getProducts({ pageSize });
  return Array.from({ length: Math.min(pagesCount, 5) }, (_v, index) => ({
    page: `${index + 1}`,
  }));
};

const ProductsPage = async ({ params }: ProductsPageProps) => {
  const page = parsePageParam(params.page);

  const { products, pagesCount } = await getProducts({
    page,
    pageSize,
  });

  if (products.length === 0 && page > 1) {
    return notFound();
  }

  return (
    <>
      <H1>All products</H1>
      <ProductList products={products} />
      <Pagination
        className="mt-14"
        currentPage={page}
        pagesCount={pagesCount}
        pageToHref={(page) => `/products/${page}`}
      />
    </>
  );
};

export default ProductsPage;
