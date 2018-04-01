import React from 'react';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// const CHECK_TOKEN = gql`
//   query me() {
//     name
//   }
// `;

const AddCouponPage = () => {
  let emailInput;
  let passwordInput;

  return (
    <div>
      <Mutation mutation={LOGIN}>
        {(login, { data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error...</div>;

          if (data) {
            localStorage.setItem('token', data.login.token);
            return <div>Авторизован</div>
          } else {
            return (<form onSubmit={e => {
              e.preventDefault();
              login({
                variables: {
                  email: emailInput.value,
                  password: passwordInput.value
                }
              });
            }}>
              <input
                ref={node => emailInput = node}
                type="email"
              />
              <input
                ref={node => passwordInput = node}
                type="password"
              />
              <button type="submit">Login</button>
            </form>);
          }
        }}
      </Mutation>
    </div>
  );
}


export default AddCouponPage;
