import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'actions/listDemo';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('Enter new task!'),
});

const AddForm = () => {
  const dispatch = useDispatch();
  const handleAddTask = (values) => {
    dispatch(addTask(values));
    history.back();
  };

  return (
    <>
      <h3>Add new task</h3>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={taskSchema}
        onSubmit={(values) => handleAddTask(values)}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Field name="title" type="text" values={values.title} />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddForm;
