import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { karaStore } from '@/redux/store';

function KaraProvider({ children, initialReduxState }) {
  const store = karaStore(initialReduxState);

  const persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}

KaraProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialReduxState: PropTypes.any.isRequired,
};

export default KaraProvider;
