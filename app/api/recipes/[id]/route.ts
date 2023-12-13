import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

// route params will always be string, even if cast as id:number ?
// TODO?: See this: https://www.prisma.io/blog/nestjs-prisma-validation-7D056s1kOla1#perform-input-validation
// for parseInt pipe on dynamic routes
// TODO: route validation for params
export async function GET(request: Request, { params }: { params: { id: string } }) {
  let res = await prisma.recipe.findFirstOrThrow({ where: { id: +params.id } });
  return Response.json(res);
}
