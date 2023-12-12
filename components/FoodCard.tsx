import { Card, Image, Text, Badge, Button, Group, CardSection } from '@mantine/core';

export default function FoodCard() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <CardSection>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className="bg-red-100">
            Koshari
          </Text>
          <div>
            <Badge color="pink">Egyptian Food</Badge>
            <Badge color="gold">3/5 Stars</Badge>
          </div>
        </Group>

        <Text size="sm" c="dimmed">
          How to make Koshari: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          molestiae necessitatibus maxime sint ipsam totam deleniti autem pariatur corrupti aperiam
          inventore numquam quia dolores magnam vitae veritatis voluptas illo quae perspiciatis
          fugit at modi accusamus doloribus. Dolorum, illum ad, velit provident facilis nemo
          reprehenderit laborum consequatur cumque, temporibus facere beatae. At nisi alias itaque
          nulla illum autem optio mollitia minus obcaecati libero dolorem aperiam quaerat saepe,
          quis quisquam, cupiditate suscipit rerum? Minus neque labore deserunt, a voluptate placeat
          omnis tempora.
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          See How To Make
        </Button>
      </Card>
    </>
  );
}
