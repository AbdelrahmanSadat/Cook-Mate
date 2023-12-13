import FoodCard from '@/components/FoodCard';
import prisma from '@/lib/prisma';

async function getData() {
  // const res = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
  const res = await prisma.recipe.findMany();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');
  // }

  return res;
}

export default async function HomePage() {
  const data = await getData();
  console.log(data);
  // I am only slightly confused about the ramafications of using await like this before the render.
  // I guess the NextJS fetch api is optimized and memoized and all that shit?

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </div>
    </>
  );
}
