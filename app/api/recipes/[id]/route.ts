import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { getServerSession } from 'next-auth';
import { ValidationError, array, number, object, string } from 'yup';
import prisma from '@/lib/prisma';
import editRecipeDto from '@/dto/recipe/editRecipe.yup';
import { authOptions } from '@/config/authOptions';

export const dynamic = 'force-dynamic';

// route params will always be string, even if cast as id:number ?
// TODO?: See this: https://www.prisma.io/blog/nestjs-prisma-validation-7D056s1kOla1#perform-input-validation for parseInt pipe on dynamic routes
// TODO: route validation for params
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const res = await prisma.recipe.findFirstOrThrow({
    where: { id: +params.id },
    include: { creator: true },
  });
  return Response.json(res);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return Response.json('User unauthorized', { status: 401 });
    const body = await request.json();
    editRecipeDto.validateSync(body);
    const recipteToUpdate = await prisma.recipe.findFirstOrThrow({ where: { id: +params.id } });
    if (recipteToUpdate.creatorId !== session.user?.id)
      return Response.json('User Unauthorized', { status: 401 });

    const res = await prisma.recipe.update({ where: { id: +params.id }, data: body });
    if (!res) return Response.json('Recipe not found', { status: 404 });
    return Response.json(res);
  } catch (err) {
    if (err instanceof ValidationError) return Response.json(err.errors, { status: 400 });
    if (err instanceof PrismaClientKnownRequestError)
      if (err.code === 'P2025') return Response.json(err.meta?.cause, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return Response.json('User unauthorized', { status: 401 });
    const recipteToDelete = await prisma.recipe.findFirstOrThrow({ where: { id: +params.id } });
    if (recipteToDelete.creatorId !== session.user?.id)
      return Response.json('User Unauthorized', { status: 401 });

    const res = await prisma.recipe.delete({ where: { id: +params.id } });
    return Response.json(res);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError)
      if (err.code === 'P2025') return Response.json(err.meta?.cause, { status: 400 });
  }
}
