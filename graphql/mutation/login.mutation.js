import { gql } from '@apollo/client';

export const LoginMutation = gql`
    mutation Login($email: String!, $password: String!) {
        userLogin(input: {
            identifier: $email,
            password: $password,
        }) {
            jwt
            user {
                id
                firstName
                lastName
                email
                avatar
            }
        }
    }
`;

export const LoginVariables = ({ params }) => ({
  email: params.email,
  password: params.password,
});
