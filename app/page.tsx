import FoodCard from '@/components/FoodCard';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { Recipe } from '@prisma/client';

export default async function HomePage() {
  const recipesRes = await fetch(`${process.env.domain}/api/recipes`);
  const recipes = await recipesRes.json();

  const session = await getServerSession(authOptions);
  console.log('Server session from Home Page', session);

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
