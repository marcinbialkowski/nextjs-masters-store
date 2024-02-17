import type { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers } from '@/graphql/server/resolvers.generated';
import { typeDefs } from '@/graphql/server/typeDefs.generated';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: (req) => Promise.resolve({ req }),
});

export { handler as GET, handler as POST };
