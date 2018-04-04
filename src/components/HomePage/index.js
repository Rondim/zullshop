import React from 'react';
import men from '../../men.json';
import women from '../../women.json';
import { Container, Col, Row } from 'reactstrap';
import ParticipantRow from './ParticipantRow';
import HeaderRow from './HeaderRow';

const HomePage = () => {
  const womenList = getRowData(women);
  const menList = getRowData(men);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ZULL</h1>
      </header>
      <Container>
        <Row>
          <Col xs="6">
            <Row style={{fontSize: '200%'}}>
              <Col xs={12}>
                Розыгрыш "25 по 2000"
              </Col>
            </Row>
            <HeaderRow />
            {womenList.map(({ memberCard, fio, coupons, isZull, order }) => (
              <ParticipantRow
                key={order}
                memberCard={memberCard}
                fio={fio}
                coupons={coupons}
                isZull={isZull}
              />
            ))}
            
          </Col>
          <Col xs="6">
            <Row style={{ fontSize: '200%' }}>
              <Col xs={12}>
                Розыгрыш "Для мужчин"
              </Col>
            </Row>
            <HeaderRow />
            {menList.map(({ memberCard, fio, coupons, isZull, order }) => (
              <ParticipantRow
                key={order}
                memberCard={memberCard}
                fio={fio}
                coupons={coupons}
                isZull={isZull}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;

function getRowData(arr) {
  let result = arr.map(value => {
    const { department, membercard, fio, coupons, order } = value;
    if (department === 'Белый Яр') {
      // debugger;
    }
    const isZull = department !== 'Белый Яр' && department !== 'БЯ';
    const shortFio = getShortFio(fio);
    return {
      memberCard: membercard,
      isZull,
      fio: shortFio,
      coupons,
      order
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