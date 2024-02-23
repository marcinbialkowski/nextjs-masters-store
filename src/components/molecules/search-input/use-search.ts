import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export const useSearch = (searchParams: URLSearchParams) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { replace } = useRouter();

  return useDebouncedCallback((query: string) => {
    if (query) {
      const params = new URLSearchParams(searchParams);
      params.set('query', query);
      replace(`/search?${params.toString()}`);
    }
  }, 500);
};
