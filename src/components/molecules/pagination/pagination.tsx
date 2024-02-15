import clsx from 'clsx';
import { usePagination } from './use-pagination';
import { PaginationEllipsis } from '@/components/atoms/pagination-ellipsis';
import { PaginationItem } from '@/components/atoms/pagination-item';

interface PaginationProps {
  className?: string;
  currentPage: number;
  pagesCount: number;
}

export const Pagination = ({
  className,
  currentPage,
  pagesCount,
}: PaginationProps) => {
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

  if (lastPage < 2) {
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
        <PaginationItem href={`/products/${firstPage}`}>
          {firstPage}
        </PaginationItem>
      )}
      {showStartEllipsis && <PaginationEllipsis />}
      {siblings.map((page) => (
        <PaginationItem href={`/products/${page}`} key={page}>
          {page}
        </PaginationItem>
      ))}
      {showEndEllipsis && <PaginationEllipsis />}
      {showLastPage && (
        <PaginationItem href={`/products/${lastPage}`}>
          {lastPage}
        </PaginationItem>
      )}
    </nav>
  );
};
