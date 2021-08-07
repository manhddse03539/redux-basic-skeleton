import request from '../service/request';

export const listApi = {
  getAll: () => {
    const url = '/list';
    return request.get(url);
  },

  get: (id) => {
    const url = `/list/${id}`;
    return request.get(url);
  },
};
