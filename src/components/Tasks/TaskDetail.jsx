/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { getTaskDetail } from 'actions/listDemo';
import { useEffect } from 'react';
import { Link } from 'react-navi';
import { useDispatch, useSelector } from 'react-redux';

const TaskDetail = (task) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskDetail(task.task.id));
  }, [dispatch]);
  const { listDemoSlice } = useSelector((state) => state);

  return (
    <>
      <h3>Task Detail</h3>
      <p>Task ID: {listDemoSlice.task?.id}</p>
      <p>Task Title: {listDemoSlice.task?.title}</p>
      <Link href={`/edit/${listDemoSlice.task?.id}`}>Edit</Link>
      <button onClick={() => history.back()}>Go Back</button>
    </>
  );
};

export default TaskDetail;
