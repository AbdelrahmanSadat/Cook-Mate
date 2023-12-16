'use client';
const fetchCache = 'force-no-store';

import { Container, Group, Textarea } from '@mantine/core';
import { Recipe } from '@prisma/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

export default function CreateRecipe() {
  const router = useRouter();
  return (
    <Container className="h-full flex flex-wrap justify-center content-center">
      <Formik
        initialValues={{ title: '', description: '', ingredients: '', steps: '' }}
        onSubmit={async (values) => {
          const createdRecipeRes = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify(values),
          }).catch((err) => console.log(err));

          const createdRecipe: Recipe = await createdRecipeRes?.json();
          console.log(createdRecipeRes, createdRecipe);
          if (createdRecipeRes?.ok) router.push(`/recipes/${createdRecipe.id}`);
        }}
      >
        <Form>
          <Group>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text"></Field>
            <ErrorMessage name="title"></ErrorMessage>
          </Group>

          <Group>
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" as="textarea"></Field>
            <ErrorMessage name="description"></ErrorMessage>
          </Group>

          <Group>
            <label htmlFor="ingredients">Ingredients</label>
            <Field name="ingredients" type="text" as="textarea"></Field>
            <ErrorMessage name="ingredients"></ErrorMessage>
          </Group>

          <Group>
            <label htmlFor="steps">Steps</label>
            <Field name="steps" type="text" as="textarea"></Field>
            <ErrorMessage name="steps"></ErrorMessage>
          </Group>

          <Group className="flex justify-center mt-3">
            <button type="submit">Register</button>
          </Group>
        </Form>
      </Formik>
    </Container>
  );
}
