interface UsePaginationParams {
  currentPage: number;
  firstPage: number;
  lastPage: number;
}

const siblingsCount = 2;

export const usePagination = ({
  currentPage,
  firstPage,
  lastPage,
}: UsePaginationParams) => {
  const firstSibling = Math.max(
    Math.min(lastPage - siblingsCount * 2, currentPage - siblingsCount),
    firstPage,
  );
  const lastSibling = Math.min(
    Math.max(firstPage + siblingsCount * 2, currentPage + siblingsCount),
    lastPage,
  );
  const siblings = Array.from(
    { length: lastSibling - firstSibling + 1 },
    (_v, index) => firstSibling + index,
  );

  const showFirstPage = firstSibling > firstPage;
  const showLastPage = lastSibling < lastPage;

  const showStartEllipsis = firstSibling > firstPage + 1;
  const showEndEllipsis = lastSibling < lastPage - 1;

  return {
    showEndEllipsis,
    showFirstPage,
    showLastPage,
    showStartEllipsis,
    siblings,
  };
};
