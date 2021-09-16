import React from 'react';
import { DisplayLarge } from 'baseui/typography';
import Layout from '../layout';
import Container from '@/atoms/container';

function Cart() {
  const seo = {
    metaTitle: 'Cart',
  };
  return (
    <Layout seo={seo}>
      <Container>
        <DisplayLarge>Cart</DisplayLarge>
      </Container>
    </Layout>
  );
}

export default Cart;
