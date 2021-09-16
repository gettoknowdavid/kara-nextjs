import React from 'react';
import { Block } from 'baseui/block';
import {
  OrderActionButton,
  OrderActionsBlock,
  OrderCardWrapper,
  OrderDetail,
  OrderDetailItem,
  OrderDetailTitle,
} from '@/molecules/order-card/order-card.styles';

function OrderCard({ order }) {
  const name = `${order.firstName} ${order.lastName}`;

  return (
    <OrderCardWrapper>
      <Block>
        <OrderDetailItem>
          <OrderDetailTitle>ID:</OrderDetailTitle>
          <OrderDetail>{order.transactionId}</OrderDetail>
        </OrderDetailItem>
        <OrderDetailItem>
          <OrderDetailTitle>Name:</OrderDetailTitle>
          <OrderDetail>{name}</OrderDetail>
        </OrderDetailItem>
        <OrderDetailItem>
          <OrderDetailTitle>Address:</OrderDetailTitle>
          <OrderDetail>{order.address}</OrderDetail>
        </OrderDetailItem>
        <OrderDetailItem>
          <OrderDetailTitle>Products Quantity:</OrderDetailTitle>
          <OrderDetail>{order.quantity}</OrderDetail>
        </OrderDetailItem>
      </Block>
      <OrderActionsBlock>
        <OrderActionButton>VIEW</OrderActionButton>
        <OrderActionButton>MORE</OrderActionButton>
      </OrderActionsBlock>
    </OrderCardWrapper>
  );
}

export default OrderCard;
