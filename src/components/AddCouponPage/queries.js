import gql from 'graphql-tag';


export const ME_DEPARTMENT = gql`
  {
    me {
      name
      department {
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  {
    orders {
      department {
        name
      }
      memberCard
      surname
      name
      patronymic
      check
      coupons {
        couponType
        couponNumber
      }
    }
  }
`;