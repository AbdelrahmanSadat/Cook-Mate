// By default, all pages in Next are SSR'd. Meanwhile Formik's Form uses React's Context API, which only functions on the client. Therefore we do 'use client';

'use client';

import { Container, Group } from '@mantine/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signIn } from 'next-auth/react';

// TODO: prettify this bad boy. Center stuff and shadows and colors, etc.
// Maybe set width for labels, and make a div around them, so that all inputs and labels are vertically aligned. Or make it a grid or whatever (that sounds too much tho)

// TODO: add Yup validation. And add onSubmit Error Validation
export default function RegisterPage() {
  return (
    <Container className="h-[90vh] overflow-hidden flex flex-wrap justify-center content-center">
      <Formik
        initialValues={{ username: '', email: '', password: '', rePassword: '' }}
        onSubmit={async (values) => {
          const createdUserRes = await fetch('/api/auth/create', {
            method: 'POST',
            body: JSON.stringify(values),
          }).catch((err) => console.log(err));

          if (createdUserRes?.ok) {
            signIn('credentials', {
              email: values.email,
              password: values.password,
              callbackUrl: '/',
            });
          }
        }}
      >
        <Form>
          <Group className="flex justify-center mt-3">
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" />
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" />
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="rePassword">Re-Enter Password</label>
            <Field name="rePassword" type="password" />
            <ErrorMessage name="rePassword" />
          </Group>

          <Group className="flex justify-center mt-3">
            <button type="submit">Register</button>
          </Group>
        </Form>
      </Formik>
    </Container>
  );
}
