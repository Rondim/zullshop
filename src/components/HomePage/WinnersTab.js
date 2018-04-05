import React from 'react';
import { Col, Row } from 'reactstrap';
import womenWinners from './womenWinners.json';
import menWinners from './menWinners.json';
import WinnersHeader from './WinnersHeader';
import WinnerRow from './WinnerRow';

const WinnersTab = () => {
  const womenData = getRowData(womenWinners);
  const menData = getRowData(menWinners);
  return (
    <Row>
      <Col xs="6">
        <Row style={{ fontSize: '200%' }}>
          <Col xs={12}>
            Розыгрыш "25 по 2000"
          </Col>
        </Row>
        <WinnersHeader />
        {womenData.map(({ fio, memberCard, coupon, location, order }) => (
          <WinnerRow 
            fio={fio}
            memberCard={memberCard}
            coupon={coupon}
            location={location}
            order={order}
          />
        ))}
      </Col>
      <Col xs="6">
        <Row style={{ fontSize: '200%' }}>
          <Col xs={12}>
            Розыгрыш "Для мужчин"
          </Col>
        </Row>
        <WinnersHeader />
        {menData.map(({ fio, memberCard, coupon, location, order }) => (
          <WinnerRow
          fio={fio}
          memberCard={memberCard}
          coupon={coupon}
          location={location}
          order={order}
        />
        ))}
      </Col>
    </Row>
  );
};

export default WinnersTab;

function getRowData(arr) {
  let result = arr.map((value, index) => {
    const { department, membercard, fio, coupon } = value;
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
      coupon,
      location,
      order: (index+1)
    };
  });
  return result;

  function getShortFio(fio) {
    const arr = fio.split(' ');
    const surname = arr[0];
    const nameChar = arr[1] ? arr[1].substring(0, 1) : '';
    const patronymicChar = arr[2] ? arr[2].substring(0, 1) : '';
    return `${surname} ${nameChar}. ${patronymicChar}.`;
  }
}

