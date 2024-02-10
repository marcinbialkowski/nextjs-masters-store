import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Płaszcz Trenchcoat beżowy',
    price: { amount: 3499 },
    image: {
      src: 'https://picsum.photos/400',
      alt: 'Płaszcz Trenchcoat beżowy',
    },
  },
  {
    id: '2',
    name: 'Klasyczna koszula bawełniana',
    price: { amount: 4189 },
    image: {
      src: 'https://picsum.photos/410',
      alt: 'Klasyczna koszula bawełniana',
    },
  },
  {
    id: '3',
    name: 'Jeansy Slim Fit',
    price: { amount: 4189 },
    image: {
      src: 'https://picsum.photos/420',
      alt: 'Jeansy Slim Fit',
    },
  },
  {
    id: '4',
    name: 'Luźna bluza',
    price: { amount: 4189 },
    image: {
      src: 'https://picsum.photos/430',
      alt: 'Luźna bluza',
    },
  },
];
