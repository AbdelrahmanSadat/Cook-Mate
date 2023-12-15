import { Card, Image, Text, Badge, Button, Group, CardSection } from '@mantine/core';
import { Recipe } from '@prisma/client';
import Link from 'next/link';

export default function FoodCard({ recipe }: { recipe: Recipe }) {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <CardSection>
          <Image
            src="https://www.fooddolls.com/wp-content/uploads/2021/10/Koshari-2-500x375.jpg"
            height={160}
            alt="Norway"
          />
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{recipe.title}</Text>
          <div>
            <Badge color="pink">Egyptian Food</Badge>
            <Badge color="gold">3/5 Stars</Badge>
          </div>
        </Group>

        <Text size="sm" c="dimmed">
          {recipe.description}
        </Text>

        <Link href={`recipes/${recipe.id}`}>
          <Button color="blue" fullWidth mt="md" radius="md">
            See How To Make
          </Button>
        </Link>
      </Card>
    </>
  );
}
