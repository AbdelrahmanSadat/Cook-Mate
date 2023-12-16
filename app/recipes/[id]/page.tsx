import { RecipeWithCreator } from '@/types/prisma/RecipeWithCreator';
import { Badge, Container, Group, Image, List, ListItem, Text } from '@mantine/core';

export const fetchCache = 'force-no-store'

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipeRes = await fetch(`${process.env.domain}/api/recipes/${params.id}`);
  const recipe: RecipeWithCreator = await recipeRes.json();

  return (
    <Container>
      <Image
        src="https://www.fooddolls.com/wp-content/uploads/2021/10/Koshari-2-500x375.jpg"
        height={160}
        alt="Norway"
      />
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} size='xl'>{recipe.title}</Text>
        <Group>
          <Badge color="pink">Egyptian Food</Badge>
          <Badge color="gold">3/5 Stars</Badge>
        </Group>
      </Group>
      <Text>
        {recipe.description}
      </Text>
      
      <Text fw={500} className='mt-2'>Ingredients</Text>
      <Text>{recipe.ingredients}</Text>

      <Text fw={500} className='mt-2'>Steps</Text>
      <Text>{recipe.steps}</Text>

      <Text className='mt-4 italic text-right'>Courtesy of Chef: {recipe.creator.username}</Text>

      
    </Container>
  );
}
