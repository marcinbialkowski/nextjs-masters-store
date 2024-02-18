import { type TypedDocumentString } from '../generated/graphql';
import { parseResponse } from './parse-response';
import { apolloServer, context } from '@/graphql/server';

export const executeGraphql = async <
  TResult,
  TVariables extends Record<string, unknown>,
>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> =>
  apolloServer
    .executeOperation<TResult>(
      { query: query.toString(), variables },
      { contextValue: context },
    )
    .then(parseResponse);
