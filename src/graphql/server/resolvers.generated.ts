/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Category } from './schema/resolvers/Category';
import { Image } from './schema/resolvers/Image';
import { ListMeta } from './schema/resolvers/ListMeta';
import { Product } from './schema/resolvers/Product';
import { ProductList } from './schema/resolvers/ProductList';
import { category as Query_category } from './schema/resolvers/Query/category';
import { product as Query_product } from './schema/resolvers/Query/product';
import { products as Query_products } from './schema/resolvers/Query/products';
export const resolvers: Resolvers = {
  Query: {
    category: Query_category,
    product: Query_product,
    products: Query_products,
  },

  Category: Category,
  Image: Image,
  ListMeta: ListMeta,
  Product: Product,
  ProductList: ProductList,
};
