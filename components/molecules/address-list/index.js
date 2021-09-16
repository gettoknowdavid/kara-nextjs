import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';
import { ParagraphMedium } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { SIZE } from 'baseui/button';
import { Plus } from 'phosphor-react';
import AddressCard from '@/molecules/address-card';
import Button from '@/atoms/button';

function AddressList({ addresses }) {
  const [css] = useStyletron();

  return (
    <Block className={css({ marginTop: '10px' })}>
      {addresses.length ? (
        <ul>
          {addresses?.map((address) => (
            <AddressCard key={address.id} address={address} />))}
        </ul>
      ) : (
        <Block>
          <ParagraphMedium marginBottom="6px">Looks like you have no addresses saved.</ParagraphMedium>
          <ParagraphMedium marginTop={0} marginBottom="20px">You should save one now.</ParagraphMedium>
          <Block maxWidth="200px">
            <Button startEnhancer={() => (<Plus />)} size={SIZE.compact}>
              Address
            </Button>
          </Block>
        </Block>
      )}
    </Block>
  );
}

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
};

export default AddressList;
