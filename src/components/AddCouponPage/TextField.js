import React, { Fragment } from 'react';
import { Label } from 'reactstrap';
import { Field } from 'formik';

const TextField = ({name, label, error}) => {
  return (
    <Fragment>
      <Label for={name}>{label}</Label>
      <Field
        type="text"
        name={name}
        id={name}
        className="form-control"
      />
      {error && 
        <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
      }
    </Fragment>
  );
};

export default TextField;


