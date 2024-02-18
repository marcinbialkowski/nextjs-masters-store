import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers.generated';
import { typeDefs } from './typeDefs.generated';

export const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});
