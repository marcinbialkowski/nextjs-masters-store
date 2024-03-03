import { Prisma, type Product } from '@prisma/client';
import {
  type ProductsSortBy,
  type ProductsSortDirection,
} from '../types.generated';
import { type ApolloContext } from '../types';

export interface GetProductsOptions {
  take?: number;
  skip?: number;
  search?: string;
  sortBy?: ProductsSortBy;
  sortDirection?: ProductsSortDirection;
  categoryId?: string;
  collectionId?: string;
}

interface ProductData extends Product {
  rating: number | null;
}

const sortByToSql: Record<ProductsSortBy, ReturnType<typeof Prisma.sql>> = {
  PRICE: Prisma.sql`price`,
  RATING: Prisma.sql`rating`,
};

const sortDirectionToSql: Record<
  ProductsSortDirection,
  ReturnType<typeof Prisma.sql>
> = {
  ASC: Prisma.sql`ASC`,
  DESC: Prisma.sql`DESC`,
};

const buildWhere = ({
  search,
  categoryId,
  collectionId,
}: Pick<GetProductsOptions, 'search' | 'categoryId' | 'collectionId'>) => {
  const whereConditions: Prisma.Sql[] = [];

  if (search) {
    whereConditions.push(Prisma.sql`p.name ILIKE ${`%${search}%`}`);
  }

  if (categoryId) {
    whereConditions.push(Prisma.sql`EXISTS (
      SELECT 1
      FROM "_CategoryToProduct" cp
      WHERE cp."B" = p.id AND cp."A" = ${categoryId}
    )`);
  }

  if (collectionId) {
    whereConditions.push(Prisma.sql`EXISTS (
      SELECT 1
      FROM "_CollectionToProduct" cp
      WHERE cp."B" = p.id AND cp."A" = ${collectionId}
    )`);
  }

  return whereConditions.length
    ? Prisma.sql`WHERE ${Prisma.join(whereConditions, ' AND ')}`
    : Prisma.empty;
};

export const getProducts = (
  ctx: ApolloContext,
  {
    take = 10,
    skip = 0,
    search,
    sortBy = 'RATING',
    sortDirection = 'DESC',
    categoryId,
    collectionId,
  }: GetProductsOptions,
) => ctx.prisma.$queryRaw<ProductData[]>`SELECT
        p.id,
        p.slug,
        p.name,
        p.description,
        p.price,
        AVG(r.rating) AS rating
      FROM
        "Product" p
      LEFT JOIN
        "Review" r ON p.id = r."productId"
      ${buildWhere({ search, categoryId, collectionId })}
      GROUP BY
        p.id
      ORDER BY
        ${sortByToSql[sortBy]} ${sortDirectionToSql[sortDirection]} NULLS LAST
      LIMIT ${take} OFFSET ${skip}`;
