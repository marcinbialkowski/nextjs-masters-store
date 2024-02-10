export interface Money {
  amount: number;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  price: Money;
  image: ProductImage;
}
