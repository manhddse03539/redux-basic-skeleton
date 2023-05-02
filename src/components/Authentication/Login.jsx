import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Wrapper } from './LoginStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, loginFailed, loginSuccess } from 'actions/auth';
import { authService } from 'service/AuthService';
import randomToken from 'random-token';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Required!'),
});

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const { usersReducer } = useSelector((state) => state);
  const handleLogin = (values) => {
    var token = randomToken(16);
    const existedUser = usersReducer.users.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (existedUser) {
      dispatch(loginSuccess(values));
      authService.login(existedUser.email, existedUser.id, token);
    }
    dispatch(loginFailed('Wrong email or password. Pleased check again!'));
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <Formik
        initialValues={{
          uid: '',
          token: '',
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div>{errors.email}</div>
            <Field name="email" type="email" values={values.email} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" values={values.password} />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
