import { gql } from '@apollo/client';

export const RegisterMutation = gql`
    mutation Register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        userRegister(input: {
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            password: $password
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

export const RegisterVariables = ({ params }) => ({
  firstName: params.firstName,
  lastName: params.lastName,
  email: params.email,
  password: params.password,
});
