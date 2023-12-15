// Since Prisma does not automatically create types for models with relations
// https://github.com/prisma/prisma/discussions/10928
import { Prisma } from '@prisma/client'
export type RecipeWithCreator = Prisma.RecipeGetPayload<{
  include: { creator: true }
}>