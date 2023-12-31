import { Recipe } from '@prisma/client';
import FoodCard from '@/components/FoodCard';

export const fetchCache = 'force-no-store';

export default async function HomePage() {
  const recipesRes = await fetch(`${process.env.DOMAIN}/api/recipes`);
  const recipes = await recipesRes.json();

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        {recipes.map((recipe: Recipe) => (
          <FoodCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
