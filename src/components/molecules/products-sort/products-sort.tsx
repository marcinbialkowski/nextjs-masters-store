'use client';

import { type ChangeEventHandler } from 'react';
import { useRouter } from 'next/navigation';

interface ProductsSortProps {
  defaultValue?: string;
}

export const ProductsSort = ({ defaultValue }: ProductsSortProps) => {
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const [sortBy, sortDirection] = event.target.value.split('-');
    router.push(`/products/1?sortBy=${sortBy}&sortDirection=${sortDirection}`);
  };

  return (
    <label className="relative after:absolute after:right-2 after:top-0 after:flex after:h-full after:items-center after:content-['▼']">
      <span className="sr-only">Order by</span>
      <select
        className="min-w-48 cursor-pointer appearance-none rounded bg-gray-50 px-2 py-1 text-sm text-gray-800 ring-1 ring-inset ring-gray-300 focus:outline-0 focus:ring-2 focus:ring-green-700"
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        <option value="PRICE-ASC" data-testid="sort-by-price">
          Price (Low to High)
        </option>
        <option value="PRICE-DESC" data-testid="sort-by-price">
          Price (High to Low)
        </option>
      </select>
    </label>
  );
};
