import { listApi } from '../api/listDemoApi';

export const setDatas = () => {
  return (dispatch) => {
    listApi
      .getAll()
      .then((response) => dispatch(setDatasSuccess(response.data)))
      .catch((error) => dispatch(setDatasFailed(error)));
  };
};

export const getTaskDetail = (id) => {
  return (dispatch) => {
    listApi
      .get(id)
      .then((response) => {
        dispatch(getTaskDetailSuccess(response.data));
      })
      .catch((error) => dispatch(getTaskDetailFailed(error)));
  };
};

export const addTask = (task) => {
  return (dispatch) => {
    listApi
      .add(task)
      .then((response) => {
        dispatch(addTaskSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addTaskFailed(error));
      });
  };
};

export const deleteTask = (task) => {
  return (dispatch) => {
    listApi
      .delete(task)
      .then((response) => {
        dispatch(deleteTaskSuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteTaskFailed(error));
      });
  };
};

const setDatasSuccess = (listData) => ({
  type: 'SET_DATA_SUCCESS',
  listData,
});

const setDatasFailed = (error) => ({
  type: 'SET_DATA_FAILED',
  payload: { error },
});

const getTaskDetailSuccess = (task) => ({
  type: 'GET_TASK_SUCCESS',
  task,
});

const getTaskDetailFailed = (error) => ({
  type: 'GET_TASK_FAILED',
  payload: { error },
});

const addTaskSuccess = (taskAdded) => ({
  type: 'ADD_TASK_SUCCESS',
  taskAdded,
});

const addTaskFailed = (error) => ({
  type: 'ADD_TASK_FAILED',
  payload: { error },
});

const deleteTaskSuccess = (taskDeleted) => ({
  type: 'DELETE_TASK_SUCCESS',
  taskDeleted,
});

const deleteTaskFailed = (error) => ({
  type: 'DELETE_TASK_FAILED',
  payload: { error },
});
