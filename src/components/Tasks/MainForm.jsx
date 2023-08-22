import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, getTaskDetail } from 'actions/listDemo';
import { useEffect } from 'react';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('Please enter task!'),
});

const MainForm = (data) => {
  const dispatch = useDispatch();
  useEffect(() => {
    data?.formType == 'edit' ? dispatch(getTaskDetail(data?.task?.id)) : '';
  }, [dispatch]);
  const handleTask = (title) => {
    data.formType == 'edit'
      ? dispatch(editTask({ title, id: data.task.id }))
      : dispatch(addTask(title));
    window.location.href = '/';
  };
  const { task } = useSelector((state) => state.listDemoSlice);

  return (
    <>
      {data.formType == 'edit' ? <h3>Edit task</h3> : <h3>Add new task</h3>}
      <Formik
        initialValues={{
          title: task ? task.title : '',
        }}
        validationSchema={taskSchema}
        onSubmit={(values) => handleTask(values.title)}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Field name="title" type="text" value={values.title || ''} />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainForm;
