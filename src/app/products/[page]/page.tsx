import { notFound } from 'next/navigation';
import { ProductList } from '@/components/organisms/product-list';
import { getProducts } from '@/services/products';
import { Pagination } from '@/components/molecules/pagination';
import { parsePageParam } from '@/utils/parse-page-param';

interface ProductsPageProps {
  params: { page: string };
}

const pageSize = 20;

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
      <h1 className="sr-only">All products</h1>
      <ProductList products={products} />
      <Pagination
        className="mt-14"
        currentPage={page}
        pagesCount={pagesCount}
      />
    </>
  );
};

export default ProductsPage;
