import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

// TODO: replace encode/decodeURIComponent with
// new URLSearchParams(currentParams).set(...)
// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export const useSearch = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { replace } = useRouter();

  return useDebouncedCallback((query: string) => {
    if (query) {
      replace(`/search?query=${encodeURIComponent(query)}`);
    }
  }, 500);
};
