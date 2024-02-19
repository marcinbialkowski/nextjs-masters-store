import clsx from 'clsx';
import { type Route } from 'next';
import { usePagination } from './use-pagination';
import { PaginationEllipsis } from '@/components/atoms/pagination-ellipsis';
import { PaginationItem } from '@/components/atoms/pagination-item';

interface PaginationProps<RouteInferType extends string> {
  className?: string;
  currentPage: number;
  pagesCount: number;
  pageToHref: (page: number) => Route<RouteInferType>;
}

export const Pagination = <RouteInferType extends string>({
  className,
  currentPage,
  pagesCount,
  pageToHref,
}: PaginationProps<RouteInferType>) => {
  const firstPage = 1;
  const lastPage = pagesCount;

  const {
    showEndEllipsis,
    showFirstPage,
    showLastPage,
    showStartEllipsis,
    siblings,
  } = usePagination({
    currentPage,
    firstPage,
    lastPage,
  });

  if (lastPage < 1) {
    return null;
  }

  return (
    <nav
      aria-label="pagination"
      className={clsx(
        className,
        'flex flex-wrap items-center justify-center gap-x-1 gap-y-4',
      )}
    >
      {showFirstPage && (
        <PaginationItem href={pageToHref(firstPage)}>
          {firstPage}
        </PaginationItem>
      )}
      {showStartEllipsis && <PaginationEllipsis />}
      {siblings.map((page) => (
        <PaginationItem href={pageToHref(page)} key={page}>
          {page}
        </PaginationItem>
      ))}
      {showEndEllipsis && <PaginationEllipsis />}
      {showLastPage && (
        <PaginationItem href={pageToHref(lastPage)}>{lastPage}</PaginationItem>
      )}
    </nav>
  );
};
