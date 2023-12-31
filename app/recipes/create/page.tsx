'use client';

import { Container, Group } from '@mantine/core';
import { Recipe } from '@prisma/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

// nextjs config value. ignore ts on line
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchCache = 'force-no-store';

export default function CreateRecipe() {
  const router = useRouter();
  return (
    <Container className="h-[90vh] flex flex-wrap justify-center content-center">
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
          <Group className="flex justify-center conten mt-3">
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" as="textarea" />
            <ErrorMessage name="description" />
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="ingredients">Ingredients</label>
            <Field name="ingredients" type="text" as="textarea" />
            <ErrorMessage name="ingredients" />
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="steps">Steps</label>
            <Field name="steps" type="text" as="textarea" />
            <ErrorMessage name="steps" />
          </Group>

          <Group className="flex justify-end mt-3">
            <button type="submit">Create</button>
          </Group>
        </Form>
      </Formik>
    </Container>
  );
}
