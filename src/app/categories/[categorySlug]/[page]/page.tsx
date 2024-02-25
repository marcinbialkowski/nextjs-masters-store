import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/atoms/page-title';
import { ProductList } from '@/components/organisms/product-list';
import { Pagination } from '@/components/molecules/pagination';
import { parsePageParam } from '@/utils/parse-page-param';
import { getCategory } from '@/services/categories';
import { MainBanner } from '@/components/atoms/main-banner';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    page: string;
  };
}

const pageSize = 4;

export const generateMetadata = async ({
  params,
}: CategoryPageProps): Promise<Metadata> => {
  const { categorySlug: slug } = params;
  const page = parsePageParam(params.page);

  const category = await getCategory(slug, {
    page,
    pageSize,
  });

  return category
    ? {
        title: `${category.name} - NextStore`,
      }
    : {};
};

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
      <MainBanner>
        <PageTitle>{category.name}</PageTitle>
      </MainBanner>
      <div className="container pt-14">
        <ProductList products={category.products} />
        <Pagination
          className="mt-14"
          currentPage={page}
          pagesCount={category.pagesCount}
          pageToHref={(page) => `/categories/${slug}/${page}`}
        />
      </div>
    </>
  );
};

export default CategoryPage;
