import React from 'react';
import men from './men.json';
import women from './women.json';
import { Col, Row } from 'reactstrap';
import ParticipantRow from './ParticipantRow';
import ParticipantsHeader from './ParticipantsHeader';

const HomePage = () => {
  const womenList = getRowData(women);
  const menList = getRowData(men);
  return (
      <Row>
        <Col xs="6">
          <Row style={{fontSize: '200%'}}>
            <Col xs={12}>
              Розыгрыш "25 по 2000"
            </Col>
          </Row>
          <ParticipantsHeader />
          {womenList.map(({ memberCard, fio, coupons, order, location }) => (
            <ParticipantRow
              key={order}
              memberCard={memberCard}
              fio={fio}
              coupons={coupons}
              location={location}
            />
          ))}
          
        </Col>
        <Col xs="6">
          <Row style={{ fontSize: '200%' }}>
            <Col xs={12}>
              Розыгрыш "Для мужчин"
            </Col>
          </Row>
          <ParticipantsHeader />
          {menList.map(({ memberCard, fio, coupons, location, order }) => (
            <ParticipantRow
              key={order}
              memberCard={memberCard}
              fio={fio}
              coupons={coupons}
              location={location}
            />
          ))}
        </Col>
      </Row>
  );
};

export default HomePage;

function getRowData(arr) {
  let result = arr.map(value => {
    const { department, membercard, fio, coupons, order } = value;
    let location;
    if (department === 'Белый Яр' || department === 'БЯ') {
      location = 'Б';
    } else if (department === 'Усть-Абакан' || department === 'УА') {
      location = 'У';
    } else {
      location = 'Z';
    }
    const shortFio = getShortFio(fio);
    return {
      memberCard: membercard,
      fio: shortFio,
      coupons,
      order,
      location
    };
  });
  result = result.sort((aObj, bObj) => {
    const a = aObj.memberCard;
    const b = bObj.memberCard;
    if (!isNumeric(a) && !isNumeric(b)) {
      return 0;
    }
    if (!isNumeric(a)) return -1;
    if (!isNumeric(b)) return 1;

    return a - b;
    
  });
  console.log(result);
  console.log(result.length);
  return result;

  function getShortFio(fio) {
    const arr = fio.split(' ');
    const surname = arr[0];
    const nameChar = arr[1] ? arr[1].substring(0,1) : '';
    const patronymicChar = arr[2] ? arr[2].substring(0, 1) : '';
    return `${surname} ${nameChar}. ${patronymicChar}.`;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}