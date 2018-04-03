import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
  mutation createOrder(
    $memberCard:String!,
    $surname: String!,
    $name: String!,
    $patronymic: String!,
    $check:Int!,
    $coupons: [CouponInput!]!
) {
    createOrder(
      memberCard: $memberCard,
      surname: $surname,
      name: $name,
      patronymic: $patronymic,
      check: $check,
      coupons: $coupons
    ) {
      name
    }
  }
`;