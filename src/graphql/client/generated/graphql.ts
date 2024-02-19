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
  product?: Maybe<Product>;
  products: ProductList;
};

export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};

export type QueryProductArgs = {
  slug: Scalars['String']['input'];
};

export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
        id: string;
        slug: string;
        name: string;
        description: string;
        price: number;
        images: Array<{
          id: string;
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
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    images: Array<{
      id: string;
      url: string;
      alt: string;
      width: number;
      height: number;
    }>;
  } | null;
};

export type ProductsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ProductsGetListQuery = {
  products: {
    data: Array<{
      id: string;
      slug: string;
      name: string;
      description: string;
      price: number;
      images: Array<{
        id: string;
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

export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {
  category(slug: $slug) {
    name
    products(first: $productsFirst, skip: $productsSkip) {
      data {
        id
        slug
        name
        description
        price
        images {
          id
          url
          alt
          width
          height
        }
      }
      meta {
        total
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
  CategoryGetBySlugQuery,
  CategoryGetBySlugQueryVariables
>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  product(slug: $slug) {
    id
    slug
    name
    description
    price
    images {
      id
      url
      alt
      width
      height
    }
  }
}
    `) as unknown as TypedDocumentString<
  ProductGetBySlugQuery,
  ProductGetBySlugQueryVariables
>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int, $skip: Int) {
  products(first: $first, skip: $skip) {
    data {
      id
      slug
      name
      description
      price
      images {
        id
        url
        alt
        width
        height
      }
    }
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<
  ProductsGetListQuery,
  ProductsGetListQueryVariables
>;
