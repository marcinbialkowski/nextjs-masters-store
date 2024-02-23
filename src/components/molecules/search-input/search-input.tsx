'use client';

import { type ChangeEventHandler, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useSearch } from './use-search';
import { Input } from '@/components/atoms/input';

interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const searchParams = useSearchParams();
  const initialQuery = decodeURIComponent(searchParams.get('query') ?? '');
  const [value, setValue] = useState(initialQuery);
  const triggerSearch = useSearch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const query = event.target.value;
    setValue(query);
    triggerSearch(query);
  };

  return (
    <search className={className}>
      <label htmlFor="products-global-search" className="sr-only">
        Search products
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-300" />
        </div>
        <Input
          autoComplete="off"
          className="w-full pl-11"
          id="products-global-search"
          onChange={handleChange}
          placeholder="Search"
          type="search"
          value={value}
        />
      </div>
    </search>
  );
};
