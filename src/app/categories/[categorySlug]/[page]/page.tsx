import { notFound } from 'next/navigation';
import { H1 } from '@/components/atoms/h1';
import { ProductList } from '@/components/organisms/product-list';
import { Pagination } from '@/components/molecules/pagination';
import { parsePageParam } from '@/utils/parse-page-param';
import { getCategory } from '@/services/categories';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    page: string;
  };
}

const pageSize = 4;

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categorySlug: slug } = params;
  const page = parsePageParam(params.page);

  const category = await getCategory(slug, {
    page,
    pageSize,
  });

  if (!category || (category.products.length === 0 && page > 1)) {
    return notFound();
  }

  return (
    <>
      <H1>{category.name}</H1>
      <ProductList products={category.products} />
      <Pagination
        className="mt-14"
        currentPage={page}
        pagesCount={category.pagesCount}
        pageToHref={(page) => `/categories/${slug}/${page}`}
      />
    </>
  );
};

export default CategoryPage;
