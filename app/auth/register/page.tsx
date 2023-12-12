// By default, all pages in Next are SSR'd. Meanwhile Formik's Form uses React's Context API, which only functions on the client. Therefore we do 'use client';
'use client';

import { Container, Group } from '@mantine/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


// TODO: prettify this bad boy. Center stuff and shadows and colors and shit
// Maybe set width for labels, and make a div around them, so that all inputs and labels are vertically aligned. Or make it a grid or whatever (that sounds too much tho)

// TODO: add Yup validation
export default function RegisterPage() {
  return (
    <Container className="h-full flex flex-wrap justify-center content-center">
      <Formik
        initialValues={{ email: '', password: '', rePassword: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>

        <Group className="flex justify-center mt-3">
            <label htmlFor="userName">Username</label>
            <Field name="userName" type="text" />
            <ErrorMessage name="userName"></ErrorMessage>
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email"></ErrorMessage>
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password"></ErrorMessage>
          </Group>

          <Group className="flex justify-center mt-3">
            <label htmlFor="rePassword">Re-Enter Password</label>
            <Field name="rePassword" type="password" />
            <ErrorMessage name="rePassword"></ErrorMessage>
          </Group>

          <Group className="flex justify-center mt-3">
            <button type="submit">Register</button>
          </Group>
        </Form>
      </Formik>
    </Container>
  );
}
