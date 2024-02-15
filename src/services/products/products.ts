import { toProduct } from './products.utils';
import type {
  GetProductsOptions,
  GetProductsResult,
  ProductResponse,
} from './products.types';
import type { Product } from '@/types';

export const getProducts = async ({
  page = 1,
  pageSize,
}: GetProductsOptions): Promise<GetProductsResult> =>
  // Disabled cache as response is too big, temporary until we use GQL API
  fetch(`https://naszsklep-api.vercel.app/api/products?take=Infinity`, {
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((json: ProductResponse[]) => ({
      pagesCount: Math.ceil(json.length / pageSize),
      products: json
        .slice((page - 1) * pageSize, page * pageSize)
        .map(toProduct),
    }));

export const getProduct = (id: Product['id']): Promise<Product> =>
  fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
    .then((response) => response.json())
    .then(toProduct);
