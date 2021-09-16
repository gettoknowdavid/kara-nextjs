import App from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import styletron from '../styletron';
import { useApollo } from '../lib/apollo';
import Theme from '../theme';
import { createStore } from '@/redux/store';
import { fetchAPI } from '../lib/api';
import { GlobalQuery } from '../graphql/query/global.query';
import { getGlobalSettings } from '@/slices/global.slice';
import '../styles/globals.css';

function Kara({ Component, pageProps }) {
  const { initialReduxState, initialApolloState, session } = pageProps;
  const store = createStore(initialReduxState);
  const client = useApollo(initialApolloState);

  return (
    <AuthProvider session={session}>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <StyletronProvider value={styletron}>
            <BaseProvider theme={Theme}>
              <Component {...pageProps} />
            </BaseProvider>
          </StyletronProvider>
        </ApolloProvider>
      </ReduxProvider>
    </AuthProvider>
  );
}

export default Kara;

Kara.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const store = createStore();
  const { dispatch } = store;

  const { data: { global } } = await fetchAPI({ query: GlobalQuery });
  dispatch(getGlobalSettings(global), { payload: global });

  return {
    ...appProps,
    pageProps: { initialReduxState: store.getState() },
  };
};
