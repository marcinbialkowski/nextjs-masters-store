import { type ApolloContext } from '../types';
import { type GetProductsOptions } from './get-products';

type GetProductsCountOptions = Pick<
  GetProductsOptions,
  'ids' | 'search' | 'categoryId' | 'collectionId'
>;

const toIdsCondition = (ids: GetProductsCountOptions['ids']) =>
  ids && ids.length > 0 ? { id: { in: ids } } : {};

const toSearchCondition = (search: GetProductsCountOptions['search']) =>
  search ? { name: { contains: search, mode: 'insensitive' as const } } : {};

const toCategoryIdCondition = (
  categoryId: GetProductsCountOptions['categoryId'],
) => (categoryId ? { categories: { some: { id: categoryId } } } : {});

const toCollectionIdCondition = (
  collectionId: GetProductsCountOptions['collectionId'],
) => (collectionId ? { collections: { some: { id: collectionId } } } : {});

const buildWhere = ({
  ids,
  search,
  categoryId,
  collectionId,
}: GetProductsCountOptions) => ({
  ...toIdsCondition(ids),
  ...toSearchCondition(search),
  ...toCategoryIdCondition(categoryId),
  ...toCollectionIdCondition(collectionId),
});

export const getProductsCount = (
  ctx: ApolloContext,
  options: GetProductsCountOptions,
) => ctx.prisma.product.count({ where: buildWhere(options) });
