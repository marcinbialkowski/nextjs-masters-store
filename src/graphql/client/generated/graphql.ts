/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  slug: Scalars['String']['output'];
};

export type CategoryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  slug: Scalars['String']['output'];
};

export type CollectionProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ListMeta = {
  count: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Product = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type Query = {
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  product?: Maybe<Product>;
  products: ProductList;
};

export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};

export type QueryCollectionArgs = {
  slug: Scalars['String']['input'];
};

export type QueryProductArgs = {
  slug: Scalars['String']['input'];
};

export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageFragment = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductFragment = {
  slug: string;
  name: string;
  description: string;
  price: number;
  images: Array<{ url: string; alt: string; width: number; height: number }>;
};

export type ProductListFragment = {
  data: Array<{
    slug: string;
    name: string;
    price: number;
    images: Array<{ url: string; alt: string; width: number; height: number }>;
  }>;
  meta: { total: number };
};

export type ProductListItemFragment = {
  slug: string;
  name: string;
  price: number;
  images: Array<{ url: string; alt: string; width: number; height: number }>;
};

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsFirst?: InputMaybe<Scalars['Int']['input']>;
  productsSkip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CategoryGetBySlugQuery = {
  category?: {
    name: string;
    products: {
      data: Array<{
        slug: string;
        name: string;
        price: number;
        images: Array<{
          url: string;
          alt: string;
          width: number;
          height: number;
        }>;
      }>;
      meta: { total: number };
    };
  } | null;
};

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsFirst?: InputMaybe<Scalars['Int']['input']>;
  productsSkip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CollectionGetBySlugQuery = {
  collection?: {
    name: string;
    description: string;
    products: {
      data: Array<{
        slug: string;
        name: string;
        price: number;
        images: Array<{
          url: string;
          alt: string;
          width: number;
          height: number;
        }>;
      }>;
      meta: { total: number };
    };
  } | null;
};

export type ProductGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type ProductGetBySlugQuery = {
  product?: {
    slug: string;
    name: string;
    description: string;
    price: number;
    images: Array<{ url: string; alt: string; width: number; height: number }>;
  } | null;
};

export type ProductsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ProductsGetListQuery = {
  products: {
    data: Array<{
      slug: string;
      name: string;
      price: number;
      images: Array<{
        url: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
    meta: { total: number };
  };
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ImageFragmentDoc = new TypedDocumentString(
  `
    fragment Image on Image {
  url
  alt
  width
  height
}
    `,
  { fragmentName: 'Image' },
) as unknown as TypedDocumentString<ImageFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(
  `
    fragment Product on Product {
  slug
  name
  description
  price
  images {
    ...Image
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}`,
  { fragmentName: 'Product' },
) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(
  `
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    ...Image
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}`,
  { fragmentName: 'ProductListItem' },
) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductListFragmentDoc = new TypedDocumentString(
  `
    fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductListItem on Product {
  slug
  name
  price
  images {
    ...Image
  }
}`,
  { fragmentName: 'ProductList' },
) as unknown as TypedDocumentString<ProductListFragment, unknown>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {
  category(slug: $slug) {
    name
    products(first: $productsFirst, skip: $productsSkip) {
      ...ProductList
    }
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  slug
  name
  price
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  CategoryGetBySlugQuery,
  CategoryGetBySlugQueryVariables
>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {
  collection(slug: $slug) {
    name
    description
    products(first: $productsFirst, skip: $productsSkip) {
      ...ProductList
    }
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  slug
  name
  price
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  CollectionGetBySlugQuery,
  CollectionGetBySlugQueryVariables
>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  product(slug: $slug) {
    ...Product
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment Product on Product {
  slug
  name
  description
  price
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  ProductGetBySlugQuery,
  ProductGetBySlugQueryVariables
>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int, $skip: Int) {
  products(first: $first, skip: $skip) {
    ...ProductList
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  slug
  name
  price
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  ProductsGetListQuery,
  ProductsGetListQueryVariables
>;
