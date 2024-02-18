import { type NextRequest } from 'next/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { apolloServer, type ApolloContext, context } from '@/graphql/server';

const handler = startServerAndCreateNextHandler<NextRequest, ApolloContext>(
  apolloServer,
  {
    context: () => Promise.resolve(context),
  },
);

export { handler as GET, handler as POST };
