import React from 'react';
import { signOut, useSession } from 'next-auth/client';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import {
  HeadingLarge, HeadingSmall, HeadingXSmall, ParagraphMedium, ParagraphSmall, ParagraphXSmall,
} from 'baseui/typography';
import { Pencil, Trash } from 'phosphor-react';
import Divider, { DIRECTION } from '@/atoms/divider';
import Container from '@/atoms/container';
import {
  AccountDetailTitle,
  LogoutButton, UserEmail, UserInfoWrapper, UserName,
} from './account.styles';
import Button from '@/atoms/button';
import AddressCard from '@/molecules/address-card';
import AddressList from '@/molecules/address-list';
import OrderList from '@/molecules/order-list';

function AccountContents({ addresses }) {
  const [css, theme] = useStyletron();
  const [session] = useSession();
  const { firstName, lastName, email } = session.user;
  return (
    <Container>
      <UserInfoWrapper>
        <UserName>{`${firstName} ${lastName}`}</UserName>
        <UserEmail>{email}</UserEmail>
        <Divider
          color="mono800"
          marginTop={['0', '0', '16px', '16px']}
          marginBottom={['0', '0', '16px', '16px']}
          width={['15%', '15%', '7%', '5%']}
          direction={DIRECTION.HORIZONTAL}
        />
        <LogoutButton onClick={() => signOut()}>Logout</LogoutButton>
      </UserInfoWrapper>
      <Block marginTop="30px">
        <FlexGrid
          flexGridColumnCount={[1, 1, 3, 3]}
          flexGridColumnGap={['scale400', 'scale400', 'scale700', 'scale1000']}
        >
          <FlexGridItem>
            <Block>
              <AccountDetailTitle>Addresses</AccountDetailTitle>
              <Divider direction={DIRECTION.HORIZONTAL} width="5%" justify="flex-start" />
            </Block>
            <AddressList addresses={[]} />
          </FlexGridItem>
          <FlexGridItem maxWidth="1px" display={['none', 'none', 'flex', 'flex']}>
            <Divider direction={DIRECTION.VERTICAL} color="mono500" />
          </FlexGridItem>
          <FlexGridItem>
            <Block>
              <AccountDetailTitle>Orders</AccountDetailTitle>
              <Divider direction={DIRECTION.HORIZONTAL} width="5%" justify="flex-start" />
            </Block>
            <OrderList orders={[]} />
          </FlexGridItem>
        </FlexGrid>
      </Block>
    </Container>
  );
}

export default AccountContents;
