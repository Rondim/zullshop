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