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
  'fragment Image on Image {\n  url\n  alt\n  width\n  height\n}':
    types.ImageFragmentDoc,
  'fragment Product on Product {\n  slug\n  name\n  description\n  price\n  images {\n    ...Image\n  }\n}':
    types.ProductFragmentDoc,
  'fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}':
    types.ProductListFragmentDoc,
  'fragment ProductListItem on Product {\n  slug\n  name\n  price\n  images {\n    ...Image\n  }\n}':
    types.ProductListItemFragmentDoc,
  'query CategoryGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {\n  category(slug: $slug) {\n    name\n    products(first: $productsFirst, skip: $productsSkip) {\n      ...ProductList\n    }\n  }\n}':
    types.CategoryGetBySlugDocument,
  'query CollectionGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {\n  collection(slug: $slug) {\n    name\n    description\n    products(first: $productsFirst, skip: $productsSkip) {\n      ...ProductList\n    }\n  }\n}':
    types.CollectionGetBySlugDocument,
  'query ProductGetBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...Product\n  }\n}':
    types.ProductGetBySlugDocument,
  'query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductList\n  }\n}':
    types.ProductsGetListDocument,
};

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
  source: 'fragment Product on Product {\n  slug\n  name\n  description\n  price\n  images {\n    ...Image\n  }\n}',
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
  source: 'fragment ProductListItem on Product {\n  slug\n  name\n  price\n  images {\n    ...Image\n  }\n}',
): typeof import('./graphql').ProductListItemFragmentDoc;
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
  source: 'query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductList\n  }\n}',
): typeof import('./graphql').ProductsGetListDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
