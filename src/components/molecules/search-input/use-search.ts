import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

// TODO: replace encode/decodeURIComponent with
// new URLSearchParams(currentParams).set(...)
// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export const useSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return useDebouncedCallback((query: string) => {
    if (query) {
      const url = `/search?query=${encodeURIComponent(query)}` as const;
      searchParams.has('query') ? router.replace(url) : router.push(url);
    }
  }, 500);
};
