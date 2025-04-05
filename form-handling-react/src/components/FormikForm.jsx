import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Form submitted:', values);
        alert('Registration successful!');
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username">Username</label><br />
            <Field type="text" name="username" id="username" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="username" />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email</label><br />
            <Field type="email" name="email" id="email" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="email" />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password</label><br />
            <Field type="password" name="password" id="password" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="password" />
            </div>
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;


