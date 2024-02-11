import { type ProductResponse } from './products.types';
import { type Product } from '@/types';

export const toProduct = ({
  description,
  id,
  image,
  price,
  title,
}: ProductResponse): Product => ({
  description,
  id,
  image: {
    alt: title,
    src: image,
  },
  name: title,
  price: {
    amount: price,
  },
});
