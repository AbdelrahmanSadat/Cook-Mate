import prisma from '@/lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ValidationError, array, number, object, string } from 'yup';
export const dynamic = 'force-dynamic';

// route params will always be string, even if cast as id:number ?
// TODO?: See this: https://www.prisma.io/blog/nestjs-prisma-validation-7D056s1kOla1#perform-input-validation
// for parseInt pipe on dynamic routes
// TODO: route validation for params
export async function GET(request: Request, { params }: { params: { id: string } }) {
  let res = await prisma.recipe.findFirstOrThrow({ where: { id: +params.id } });
  return Response.json(res);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    editRecipeDto.validateSync(body);

    let res = await prisma.recipe.update({ where: { id: +params.id }, data: body });
    if (!res) return Response.json('Recipe not found', { status: 404 });
    return Response.json(res);
  } catch (err) {
    if (err instanceof ValidationError) return Response.json(err.errors, { status: 400 });
    if (err instanceof PrismaClientKnownRequestError)
      if (err.code == 'P2025') return Response.json(err.meta?.cause, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    let res = await prisma.recipe.delete({ where: { id: +params.id } });
    return Response.json(res);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError)
      if (err.code == 'P2025') return Response.json(err.meta?.cause, { status: 400 });
  }
}

// TODO?: to be moved
let editRecipeDto = object({
  title: string().optional(),
  description: string().optional(),
  steps: string().optional(),
  ingredients: array().of(string()).optional(),
  creatorId: number().integer().optional(),
});
