/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Category } from './schema/resolvers/Category';
import { Collection } from './schema/resolvers/Collection';
import { Image } from './schema/resolvers/Image';
import { ListMeta } from './schema/resolvers/ListMeta';
import { orderAddItem as Mutation_orderAddItem } from './schema/resolvers/Mutation/orderAddItem';
import { orderChangeItemQuantity as Mutation_orderChangeItemQuantity } from './schema/resolvers/Mutation/orderChangeItemQuantity';
import { orderCreate as Mutation_orderCreate } from './schema/resolvers/Mutation/orderCreate';
import { orderRemoveItem as Mutation_orderRemoveItem } from './schema/resolvers/Mutation/orderRemoveItem';
import { reviewCreate as Mutation_reviewCreate } from './schema/resolvers/Mutation/reviewCreate';
import { Order } from './schema/resolvers/Order';
import { OrderItem } from './schema/resolvers/OrderItem';
import { Product } from './schema/resolvers/Product';
import { ProductList } from './schema/resolvers/ProductList';
import { category as Query_category } from './schema/resolvers/Query/category';
import { collection as Query_collection } from './schema/resolvers/Query/collection';
import { order as Query_order } from './schema/resolvers/Query/order';
import { product as Query_product } from './schema/resolvers/Query/product';
import { products as Query_products } from './schema/resolvers/Query/products';
import { reviews as Query_reviews } from './schema/resolvers/Query/reviews';
import { Review } from './schema/resolvers/Review';
export const resolvers: Resolvers = {
  Query: {
    category: Query_category,
    collection: Query_collection,
    order: Query_order,
    product: Query_product,
    products: Query_products,
    reviews: Query_reviews,
  },
  Mutation: {
    orderAddItem: Mutation_orderAddItem,
    orderChangeItemQuantity: Mutation_orderChangeItemQuantity,
    orderCreate: Mutation_orderCreate,
    orderRemoveItem: Mutation_orderRemoveItem,
    reviewCreate: Mutation_reviewCreate,
  },

  Category: Category,
  Collection: Collection,
  Image: Image,
  ListMeta: ListMeta,
  Order: Order,
  OrderItem: OrderItem,
  Product: Product,
  ProductList: ProductList,
  Review: Review,
};
