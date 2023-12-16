import FoodCard from '@/components/FoodCard';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { Recipe } from '@prisma/client';

export const fetchCache = 'force-no-store';

export default async function HomePage() {
  const recipesRes = await fetch(`${process.env.DOMAIN}/api/recipes`);
  const recipes = await recipesRes.json();


  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        {recipes.map((recipe: Recipe) => (
          <FoodCard key={recipe.id} recipe={recipe}></FoodCard>
        ))}
      </div>
    </>
  );
}
