import type { NextRequest } from 'next/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { apolloServer } from '@/graphql/server';

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: (req) => Promise.resolve({ req }),
});

export { handler as GET, handler as POST };
