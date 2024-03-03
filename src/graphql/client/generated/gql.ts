/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'fragment Cart on Order {\n  id\n  items {\n    ...CartItem\n  }\n}':
    types.CartFragmentDoc,
  'fragment CartItem on OrderItem {\n  id\n  quantity\n  product {\n    ...ProductListItem\n  }\n}':
    types.CartItemFragmentDoc,
  'fragment Image on Image {\n  url\n  alt\n  width\n  height\n}':
    types.ImageFragmentDoc,
  'fragment Product on Product {\n  id\n  slug\n  name\n  description\n  price\n  rating\n  images {\n    ...Image\n  }\n}':
    types.ProductFragmentDoc,
  'fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}':
    types.ProductListFragmentDoc,
  'fragment ProductListItem on Product {\n  id\n  slug\n  name\n  price\n  rating\n  images {\n    ...Image\n  }\n}':
    types.ProductListItemFragmentDoc,
  'fragment Review on Review {\n  id\n  author\n  title\n  content\n  rating\n}':
    types.ReviewFragmentDoc,
  'mutation CartAddItem($cartId: ID!, $productId: ID!) {\n  orderAddItem(orderId: $cartId, productId: $productId) {\n    id\n  }\n}':
    types.CartAddItemDocument,
  'mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  orderChangeItemQuantity(\n    orderId: $cartId\n    productId: $productId\n    quantity: $quantity\n  ) {\n    id\n  }\n}':
    types.CartChangeItemQuantityDocument,
  'mutation CartCreate {\n  orderCreate {\n    id\n  }\n}':
    types.CartCreateDocument,
  'mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  orderRemoveItem(orderId: $cartId, productId: $productId) {\n    id\n  }\n}':
    types.CartRemoveItemDocument,
  'mutation ReviewCreate($productId: ID!, $author: String!, $email: String!, $title: String!, $content: String!, $rating: Int!) {\n  reviewCreate(\n    productId: $productId\n    author: $author\n    email: $email\n    title: $title\n    content: $content\n    rating: $rating\n  ) {\n    id\n  }\n}':
    types.ReviewCreateDocument,
  'query CartGetById($id: ID!) {\n  order(id: $id, status: CREATED) {\n    ...Cart\n  }\n}':
    types.CartGetByIdDocument,
  'query CategoryGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {\n  category(slug: $slug) {\n    name\n    products(first: $productsFirst, skip: $productsSkip) {\n      ...ProductList\n    }\n  }\n}':
    types.CategoryGetBySlugDocument,
  'query CollectionGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {\n  collection(slug: $slug) {\n    name\n    description\n    products(first: $productsFirst, skip: $productsSkip) {\n      ...ProductList\n    }\n  }\n}':
    types.CollectionGetBySlugDocument,
  'query ProductGetBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...Product\n  }\n}':
    types.ProductGetBySlugDocument,
  'query ProductsGetList($first: Int, $skip: Int, $search: String, $sortBy: ProductsSortBy, $sortDirection: ProductsSortDirection) {\n  products(\n    first: $first\n    skip: $skip\n    search: $search\n    sortBy: $sortBy\n    sortDirection: $sortDirection\n  ) {\n    ...ProductList\n  }\n}':
    types.ProductsGetListDocument,
  'query ReviewsGetByProductId($productId: ID!) {\n  reviews(productId: $productId) {\n    ...Review\n  }\n}':
    types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Cart on Order {\n  id\n  items {\n    ...CartItem\n  }\n}',
): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment CartItem on OrderItem {\n  id\n  quantity\n  product {\n    ...ProductListItem\n  }\n}',
): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Image on Image {\n  url\n  alt\n  width\n  height\n}',
): typeof import('./graphql').ImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Product on Product {\n  id\n  slug\n  name\n  description\n  price\n  rating\n  images {\n    ...Image\n  }\n}',
): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}',
): typeof import('./graphql').ProductListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ProductListItem on Product {\n  id\n  slug\n  name\n  price\n  rating\n  images {\n    ...Image\n  }\n}',
): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Review on Review {\n  id\n  author\n  title\n  content\n  rating\n}',
): typeof import('./graphql').ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CartAddItem($cartId: ID!, $productId: ID!) {\n  orderAddItem(orderId: $cartId, productId: $productId) {\n    id\n  }\n}',
): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  orderChangeItemQuantity(\n    orderId: $cartId\n    productId: $productId\n    quantity: $quantity\n  ) {\n    id\n  }\n}',
): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CartCreate {\n  orderCreate {\n    id\n  }\n}',
): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  orderRemoveItem(orderId: $cartId, productId: $productId) {\n    id\n  }\n}',
): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation ReviewCreate($productId: ID!, $author: String!, $email: String!, $title: String!, $content: String!, $rating: Int!) {\n  reviewCreate(\n    productId: $productId\n    author: $author\n    email: $email\n    title: $title\n    content: $content\n    rating: $rating\n  ) {\n    id\n  }\n}',
): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query CartGetById($id: ID!) {\n  order(id: $id, status: CREATED) {\n    ...Cart\n  }\n}',
): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query CategoryGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {\n  category(slug: $slug) {\n    name\n    products(first: $productsFirst, skip: $productsSkip) {\n      ...ProductList\n    }\n  }\n}',
): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query CollectionGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {\n  collection(slug: $slug) {\n    name\n    description\n    products(first: $productsFirst, skip: $productsSkip) {\n      ...ProductList\n    }\n  }\n}',
): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ProductGetBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...Product\n  }\n}',
): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ProductsGetList($first: Int, $skip: Int, $search: String, $sortBy: ProductsSortBy, $sortDirection: ProductsSortDirection) {\n  products(\n    first: $first\n    skip: $skip\n    search: $search\n    sortBy: $sortBy\n    sortDirection: $sortDirection\n  ) {\n    ...ProductList\n  }\n}',
): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ReviewsGetByProductId($productId: ID!) {\n  reviews(productId: $productId) {\n    ...Review\n  }\n}',
): typeof import('./graphql').ReviewsGetByProductIdDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
