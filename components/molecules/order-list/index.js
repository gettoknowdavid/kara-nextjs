import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';
import { ParagraphMedium } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { SIZE } from 'baseui/button';
import AddressCard from '@/molecules/address-card';
import Button from '@/atoms/button';

function OrderList({ orders }) {
  const [css] = useStyletron();

  return (
    <Block className={css({ marginTop: '10px' })}>
      {orders.length ? (
        <ul>
          {orders?.map((address) => (
            <AddressCard key={address.id} address={address} />))}
        </ul>
      ) : (
        <Block>
          <ParagraphMedium marginBottom="6px">You have not placed any orders yet.</ParagraphMedium>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <ParagraphMedium marginTop={0} marginBottom="20px">Let's get you shopping.</ParagraphMedium>
          <Block maxWidth="200px">
            <Button size={SIZE.compact}>
              Shop now
            </Button>
          </Block>
        </Block>
      )}
    </Block>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default OrderList;
