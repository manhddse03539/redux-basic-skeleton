import request from '../service/request';

export const authApi = {
  signin: (loginData) => {
    const url = '/signin';
    return request.post(url, { loginData });
  },
  allUserApi: () => {
    const url = '/users';
    return request.get(url);
  },
};
