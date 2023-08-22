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
  add: (title) => {
    const url = '/list';
    return request.post(url, { title: title });
  },
  edit: (task) => {
    const url = `/list/${task.id}`;
    return request.put(url, { title: task.title });
  },
  delete: (task) => {
    const url = `/list/${task.id}`;
    return request.delete(url);
  },
};
