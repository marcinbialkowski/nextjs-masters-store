import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers.generated';
import { typeDefs } from './typeDefs.generated';
import { type ApolloContext } from './types';
import { prisma } from '@/db';

export const context: ApolloContext = { prisma };

export const apolloServer = new ApolloServer<ApolloContext>({
  resolvers,
  typeDefs,
});
