import prisma from '@/lib/prisma';
import { ValidationError, array, object, string } from 'yup';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/authOptions';

// This is opting out of caching by default. Similar to getServerSideProps in previous Next versions
export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  let res = await prisma.recipe.findMany();
  return Response.json(res);
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if(!session) return Response.json("User unauthorized", {status:401})

    const body = await request.json();

    //   async approach
    //   let schemaErrors;
    //   await createRecipeDto.validate(body).catch((err) => (schemaErrors = err));
    //   if (schemaErrors) return new Response('bad request', { status: 400 });

    createRecipeDto.validateSync(body);

    //   TODO: creator id from authorized user
    const res = await prisma.recipe.create({ data: { ...body, creatorId: session.user?.id } });

    return Response.json(body, { status: 201 });
    // let createdRecipe = await prisma.recipe.create()
  } catch (err) {
    if (err instanceof ValidationError) return Response.json(err.errors, { status: 400 });
  }
}

// TODO?: to be moved
let createRecipeDto = object({
  title: string().required(),
  description: string().required(),
  steps: string().required(),
  ingredients: string().required(),
});
