import App from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import styletron from '../styletron';
import { useApollo } from '../lib/apollo';
import Theme from '../theme';
import { karaStore } from '@/redux/store';
import { fetchAPI } from '../lib/api';
import { getGlobalSettings } from '@/slices/global.slice';
import '../styles/globals.css';
import { GlobalQuery } from '@/query/global.query';
import KaraProvider from '@/redux/providers/kara-provider';

function Kara({ Component, pageProps }) {
  const { initialReduxState, initialApolloState, session } = pageProps;
  const client = useApollo(initialApolloState);

  return (
    <AuthProvider session={session}>
      <KaraProvider initialReduxState={initialReduxState}>
        <ApolloProvider client={client}>
          <StyletronProvider value={styletron}>
            <BaseProvider theme={Theme}>
              <Component {...pageProps} />
            </BaseProvider>
          </StyletronProvider>
        </ApolloProvider>
      </KaraProvider>
    </AuthProvider>
  );
}

export default Kara;

Kara.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const store = karaStore();
  const { dispatch } = store;

  const { data: { global } } = await fetchAPI({ query: GlobalQuery });
  dispatch(getGlobalSettings(global), { payload: global });

  return {
    ...appProps,
    pageProps: { initialReduxState: store.getState() },
  };
};
