import { type PrismaClient } from '@prisma/client';

export type ApolloContext = {
  prisma: PrismaClient;
};
