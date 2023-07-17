import { authApi } from 'api/authApi';

export const getUsers = () => {
  return (dispatch) => {
    authApi
      .allUserApi()
      .then((response) => dispatch(getAllUserSuccess(response.data)))
      .catch((error) => dispatch(getAllUserFailed(error)));
  };
};

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  user,
});

export const loginFailed = (error) => ({
  type: 'LOGIN_FAILED',
  payload: { error },
});

export const logout = () => ({
  type: 'LOGOUT',
  payload: '',
});

const getAllUserSuccess = (users) => ({
  type: 'GET_USERS_SUCCESS',
  users,
});

const getAllUserFailed = (error) => ({
  type: 'GET_USERS_FAILED',
  payload: { error },
});
