import { Badge, Container, Group, Image, List, ListItem, Text } from '@mantine/core';

export default function ({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
        height={160}
        alt="Norway"
      />
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} size='xl'>Koshari</Text>
        <Group>
          <Badge color="pink">Egyptian Food</Badge>
          <Badge color="gold">3/5 Stars</Badge>
        </Group>
      </Group>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab quia odit ut nisi
        corporis consequatur pariatur reiciendis ducimus. Officia, reprehenderit incidunt ullam
        aperiam dolor cumque numquam qui culpa, aut sit vel placeat ipsam ipsum deleniti ad?
        Voluptatem minus, ratione vel eligendi qui perferendis reprehenderit. Veritatis, quod
        libero! Ratione alias autem numquam adipisci temporibus, quis illum quibusdam officia veniam
        optio aliquam culpa commodi vero architecto earum assumenda harum suscipit cumque dolores.
        Voluptatibus error cupiditate pariatur. Nisi atque rerum ratione ut.
      </Text>
      
      <Text fw={500} className='mt-2'>Ingredients</Text>
      <List>
        <ListItem>Lintels</ListItem>
        <ListItem>Rice</ListItem>
        <ListItem>Macaroni</ListItem>
      </List>

      <Text fw={500} className='mt-2'>Steps</Text>
      <List>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit architecto beatae autem hic eos, nobis, dolorem suscipit temporibus illum ea excepturi iure eligendi, eveniet laudantium accusantium cumque! Illo omnis vel sint eius. Et, reiciendis voluptates at quidem dolor asperiores accusantium? Quos mollitia quisquam inventore, laboriosam ea eaque quo blanditiis.
      </List>

      <Text className='mt-4 italic text-right'>Courtesy of Chef: John Doe</Text>

      
    </Container>
  );
}
