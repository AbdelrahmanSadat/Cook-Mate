import { ValidationError } from 'yup';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import createRecipeDto from '@/dto/recipe/createRecipe.yup';
import { authOptions } from '@/config/authOptions';

// This is opting out of caching-by-default. Similar to getServerSideProps in previous NextJS versions
export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(_request: Request) {
  const res = await prisma.recipe.findMany();
  return Response.json(res);
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return Response.json('User unauthorized', { status: 401 });

    const body = await request.json();

    createRecipeDto.validateSync(body);

    const res = await prisma.recipe.create({ data: { ...body, creatorId: session.user?.id } });

    return Response.json(res, { status: 201 });
    // let createdRecipe = await prisma.recipe.create()
  } catch (err) {
    if (err instanceof ValidationError) return Response.json(err.errors, { status: 400 });
  }
}
