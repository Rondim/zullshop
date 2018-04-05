import React from 'react';
import { Row, Col } from 'reactstrap';

const HeaderRow = () => {
  return (
    <Row style={{ fontWeight: 'bold', fontSize: '150%'}}>
      <Col xs={3}>№ ДК</Col>
      <Col xs={5}>ФИО</Col>
      <Col xs={4}>Купоны</Col>
    </Row>
  )
};

export default HeaderRow;