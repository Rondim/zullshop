import React from 'react';
import { Row, Col } from 'reactstrap';

const ParticipantRow = ({ memberCard, fio, coupons, location}) => {
  return (
    <Row>
      <Col xs={2}>{memberCard}</Col>
      <Col xs={1}>{location}</Col>
      <Col xs={5}>{fio}</Col>
      <Col xs={4}>{coupons}</Col>
    </Row>
  )
};

export default ParticipantRow;
