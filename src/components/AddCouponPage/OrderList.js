import React from 'react';
// import { Grid } from 'react-virtualized';
import { Query } from 'react-apollo';
import { GET_ORDERS } from './queries';
import OrderGrid from './OrderGrid';


const OrderList = () => {
  return (
    <Query query={GET_ORDERS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error...</div>;
        const orders = flattenOrders(data.orders);
        return (
          <OrderGrid orders={orders}/>
        );
      }}
    </Query>
  );
};

function flattenOrders(orders) {
  return orders.map(order => {
    const arr = [];
    arr.push(order.department.name);
    arr.push(order.memberCard);
    arr.push(order.surname);
    arr.push(order.patronymic);
    arr.push(order.check);
    order.coupons.forEach(coupon => {
      arr.push(coupon.couponType);
      arr.push(coupon.couponNumber);
    });
    return arr;
  });
}

export default OrderList;
