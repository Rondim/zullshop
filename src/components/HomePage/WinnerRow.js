import React from 'react';
import { Row, Col } from 'reactstrap';

const WinnerRow = ({ memberCard, fio, coupon, location, order }) => {
  return (
    <Row>
      <Col xs={1}>{order}</Col>
      <Col xs={2}>{memberCard}</Col>
      <Col xs={1}>{location}</Col>
      <Col xs={5}>{fio}</Col>
      <Col xs={3}>{coupon}</Col>
    </Row>
  )
};

export default WinnerRow;
