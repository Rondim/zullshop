import React from 'react';
import { Formik, Field } from 'formik';
import { number, object } from 'yup';

const schema = object().shape({
  testField: number().required().positive().integer()
});

const Form = (props) => {
  const { isValid } = props;
  console.log(isValid);
  return (
    <form>
      <Field
        name="testField"
      />
    </form>
  );
};

const TestPage = () => {
  return (
    <Formik
      component={Form}
      initialValues={{testField: ''}}

    />
  )
};

export default TestPage;
