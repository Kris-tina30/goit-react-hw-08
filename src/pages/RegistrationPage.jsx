import React from 'react';
import { useDispatch } from 'react-redux';
import css from '../components/ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../redux/auth/operations';

const MAX_CHAR_NAME_VALIDATION = 50;
const MIN_CHAR_NAME_VALIDATION = 3;
const MIN_CHAR_PASSWORD_VALIDATION = 7;

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `Your name must be more than ${MIN_CHAR_NAME_VALIDATION} characters!`,
    )
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`,
    )
    .required('Name is required!'),

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
  name: '',
  password: '',
};
const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={registerUserSchema}
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
            <span>Name: </span>
          </label>
          <Field type="text" name="name" placeholder="Enter your Username" />
        </div>
        <div className={css.contactData}>
          <label>
            <span>Password: </span>
          </label>
          <Field type="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className={css.buttonSub}>
          Create new user
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
