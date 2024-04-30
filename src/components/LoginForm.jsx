import React from 'react';
import { useDispatch } from 'react-redux';
import css from '../components/ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../redux/auth/operations';

const MIN_CHAR_PASSWORD_VALIDATION = 7;

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required!')
    .email('You must enter valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`,
    ),
});

const FORM_INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={loginUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.contactData}>
          <label>
            <span>Email: </span>
          </label>
          <Field type="email" name="email" placeholder="email@addres.com" />
        </div>
        <div className={css.contactData}>
          <label>
            <span>Password: </span>
          </label>
          <Field type="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className={css.buttonSub}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
