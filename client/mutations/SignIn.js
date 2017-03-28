import gql from 'graphql-tag';

export default gql`
mutation signInUser($email: String, $password: String){
    signup(email: $email,password: $password ){
    email
  }
}
`;
