import { listApi } from '../api/listDemoApi';

export const setDatas = () => {
  return (dispatch) => {
    listApi
      .getAll()
      .then((response) => dispatch(setDatasSuccess(response.data)))
      .catch((error) => dispatch(setDatasFailed(error)));
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
