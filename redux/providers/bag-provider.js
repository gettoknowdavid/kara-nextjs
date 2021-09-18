import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '@/hooks/use-local-storage';
import { karaStore } from '@/redux/store';

function BagProvider({ children }) {
  const [persistedBagItems, setPersistedBagItems] = useLocalStorage('bagItems', []);

  const persistedBagState = { isBagOpen: false, items: persistedBagItems || [] };

  const store = karaStore();

  useEffect(() => {
    setPersistedBagItems(store.getState().items);
  }, [JSON.stringify(store.getState().items)]);

  return (
    <div />
  );
}

BagProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BagProvider;
