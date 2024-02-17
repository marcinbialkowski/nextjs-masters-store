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

export type Product = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type Query = {
  product?: Maybe<Product>;
  products: Array<Product>;
};

export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};

export type ProductsGetListQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsGetListQuery = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
  }>;
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

export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList {
  products {
    id
    name
    description
    price
  }
}
    `) as unknown as TypedDocumentString<
  ProductsGetListQuery,
  ProductsGetListQueryVariables
>;
