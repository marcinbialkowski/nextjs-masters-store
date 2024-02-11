import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Unbranded Cotton Table',
    price: { amount: 3499 },
    image: {
      src: 'https://picsum.photos/400',
      alt: 'Unbranded Cotton Table',
    },
  },
  {
    id: '2',
    name: 'Incredible Plastic Shoes',
    price: { amount: 4189 },
    image: {
      src: 'https://picsum.photos/410',
      alt: 'Incredible Plastic Shoes',
    },
  },
  {
    id: '3',
    name: 'Refined Wooden Chicken',
    price: { amount: 4189 },
    image: {
      src: 'https://picsum.photos/420',
      alt: 'Refined Wooden Chicken',
    },
  },
  {
    id: '4',
    name: 'Intelligent Metal Ball',
    price: { amount: 4189 },
    image: {
      src: 'https://picsum.photos/430',
      alt: 'Intelligent Metal Ball',
    },
  },
];
