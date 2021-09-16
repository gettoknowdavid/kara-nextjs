import React from 'react';
import { Block } from 'baseui/block';
import { Pencil, Trash } from 'phosphor-react';
import {
  AddressActionsBlock,
  AddressCardWrapper, AddressDefaultButton, AddressDeleteButton,
  AddressDetail,
  AddressDetailItem,
  AddressDetailTitle, AddressEditButton,
} from '@/molecules/address-card/address-card.styles';

function AddressCard({ address }) {
  const name = `${address.firstName} ${address.lastName}`;

  return (
    <AddressCardWrapper>
      <Block>
        <AddressDetailItem>
          <AddressDetailTitle>Name:</AddressDetailTitle>
          <AddressDetail>{name}</AddressDetail>
        </AddressDetailItem>
        <AddressDetailItem>
          <AddressDetailTitle>Line:</AddressDetailTitle>
          <AddressDetail>{address.line}</AddressDetail>
        </AddressDetailItem>
        <AddressDetailItem>
          <AddressDetailTitle>Postal:</AddressDetailTitle>
          <AddressDetail>{address.postal}</AddressDetail>
        </AddressDetailItem>
      </Block>
      <AddressActionsBlock>
        <AddressDefaultButton>
          {address.default ? 'Default' : 'Set as Default'}
        </AddressDefaultButton>
        <AddressEditButton><Pencil /></AddressEditButton>
        <AddressDeleteButton><Trash /></AddressDeleteButton>
      </AddressActionsBlock>
    </AddressCardWrapper>
  );
}

export default AddressCard;
