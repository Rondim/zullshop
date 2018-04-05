import React, { Fragment } from 'react';
import { FormGroup, Label, Col, Button } from 'reactstrap';
import { Formik, Field, FieldArray } from 'formik';
import yup from 'yup';
import { Query, Mutation } from 'react-apollo';

import TextField from './TextField';
import { ME_DEPARTMENT } from './queries';
import { CREATE_ORDER } from './mutation';

const CouponFormGroup = ({ index, coupon }) => {
  return (
    <Fragment>
      <Col xs={1}>
        <Label for="couponType">ТипКупон</Label>
        <Field
          component="select"
          name={`coupons.${index}.couponType`}
          id="couponType"
          className="form-control"
          value={coupon.couponType}
        >
          <option value="WOMEN">25 по 2</option>
          <option value="MEN">МУЖ</option>
        </Field>
      </Col>
      <Col xs={1}>
        <TextField
          name={`coupons.${index}.couponNumber`}
          label="№ купона"
        />
      </Col>
    </Fragment>
  );
}


const AddCouponsForm = ({ values, errors, handleSubmit, isValid, resetForm }) => {
  console.log('Formik values', values);
  console.log('Formik errors', errors);
  console.log('is VALID', isValid);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      await new Promise(() => {
        handleSubmit(e);
      });
      resetForm();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <FormGroup row>
        <Col xs={1}>
          <Query query={ME_DEPARTMENT}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <div>Error...</div>
              return (
                <div>
                  <strong>
                    {data.me.department.name}
                  </strong>
                </div>
              );
            }}
          </Query>
        </Col>
        <Col xs={1}>
          <TextField name="memberCard" label="№ ДК" />
        </Col>
        <Col xs={2}>
          <TextField name="surname" label="Фамилия" />
        </Col>
        <Col xs={2}>
          <TextField name="name" label="Имя" />
        </Col>
        <Col xs={2}>
          <TextField name="patronymic" label="Отчество" />
        </Col>
        <Col xs={1}>
          <TextField name="check" label="Чек" />
        </Col>

      </FormGroup>
      <FieldArray
        name="coupons"
        render={arrayHelpers => (
          <FormGroup row>
            {values.coupons && values.coupons.length > 0 ? (
              <Fragment>
                {values.coupons.map((coupon, index) => (
                  <CouponFormGroup
                    key={index}
                    index={index}
                    coupon={coupon}
                  />
                ))}
              </Fragment>
            ) : null}
            <Button
              onClick={() => arrayHelpers.push({ couponType: 'WOMEN' })}
              color="success"
              style={{ marginLeft: '12px' }}
            >
              +
            </Button>
            <Button
              onClick={() => arrayHelpers.pop('')}
              color="danger"
              style={{ marginLeft: '12px' }}
            >
              -
            </Button>
          </FormGroup>
        )}
      />


      <Button color="success">Добавить</Button>
      {!isValid && <span style={{ color: 'red' }}>  Форма не заполнена правильно</span>}
    </form>
  );
}

const schema = yup.object().shape({
  memberCard: yup.string().required('Пустое'),
  surname: yup.string().required('Пустое'),
  name: yup.string().required('Пустое'),
  patronymic: yup.string().required('Пустое'),
  check: yup.number().positive().integer().required('Пустое'),
  coupons: yup.array().of(yup.object().shape({
    couponNumber: yup.string().required('Пустое')
  })).min(1)
});
const AddCouponPage = () => {
  return (
    <Mutation mutation={CREATE_ORDER}>
      {(createOrder, { data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error...</div>
        if (data) {
          console.log(data);
        }
        return (<Formik
          component={AddCouponsForm}
          initialValues={{
            coupons: [{ couponType: 'WOMEN' }]
          }}
          onSubmit={values => {
            createOrder({
              variables: { ...values }
            });
          }}
          validationSchema={schema}
        />);
      }}
    </Mutation>
  );
};

export default AddCouponPage;