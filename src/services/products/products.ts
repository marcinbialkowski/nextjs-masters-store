import { toProduct } from './products.utils';
import type { Product } from '@/types';
import type { ProductResponse } from '@/services/products/products.types';

export const getProducts = (): Promise<Product[]> =>
  fetch('https://naszsklep-api.vercel.app/api/products?take=20')
    .then((response) => response.json())
    .then((json: ProductResponse[]) => json.map(toProduct));

export const getProduct = (id: Product['id']): Promise<Product> =>
  fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
    .then((response) => response.json())
    .then(toProduct);
