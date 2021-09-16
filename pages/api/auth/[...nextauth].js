import Providers from 'next-auth/providers';
import NextAuth from 'next-auth';
import { postAPI } from '../../../lib/api';
import { LoginMutation, LoginVariables } from '@/mutation/login.mutation';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Kara',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if ('email' in credentials && 'password' in credentials) {
          const { data: { userLogin: user } } = await postAPI({
            mutation: LoginMutation,
            variables: LoginVariables({
              params: {
                email: credentials.email,
                password: credentials.password,
              },
            }),
          });

          if (user) {
            return user;
          }

          return null;
        }

        return null;
      },
    }),
  ],
  session: { jwt: true },
  callbacks: {
    signIn: async () => {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      }
      // Return false to display a default error message
      return false;
    },
    redirect: async (url, baseUrl) => (url.startsWith(baseUrl)
      ? url
      : baseUrl),
    session: async (session, token) => {
      session.jwt = token.jwt;
      session.user = token.user;
      await Promise.resolve(session);
      return session;
    },
    jwt: async (token, user) => {
      const isSignIn = !!user;

      if (isSignIn) {
        token.jwt = user.jwt;
        token.user = user.user;
      }
      await Promise.resolve(token);
      return token;
    },
  },
  pages: {
    signIn: '/account/login',
    error: '/account/login',
  },
};

export default (req, res) => NextAuth(req, res, options);
