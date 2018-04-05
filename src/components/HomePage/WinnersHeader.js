import React from 'react';
import { Row, Col } from 'reactstrap';

const WinnerRow = () => {
  return (
    <Row>
      <Col xs={1}>№</Col>
      <Col xs={2}>ДК</Col>
      <Col xs={1}>  </Col>
      <Col xs={5}>ФИО</Col>
      <Col xs={3}>Купон</Col>
    </Row>
  )
};

export default WinnerRow;
