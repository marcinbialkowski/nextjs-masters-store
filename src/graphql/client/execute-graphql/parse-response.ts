import { type GraphQLResponse } from '@apollo/server';

export const parseResponse = <TResult>(
  response: GraphQLResponse<TResult>,
): TResult => {
  if (response.body.kind !== 'single') {
    throw TypeError(
      `Unsupported GraphQL operation type: ${response.body.kind}`,
    );
  }

  const result = response.body.singleResult;

  if (result.errors) {
    throw TypeError('GraphQL Error', {
      cause: result.errors,
    });
  }

  if (!result.data) {
    throw TypeError(
      'Unexpected empty `apolloServer.executeOperation()` result',
    );
  }

  return result.data;
};
