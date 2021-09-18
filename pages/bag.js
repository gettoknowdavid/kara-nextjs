import React from 'react';
import { DisplayLarge } from 'baseui/typography';
import Layout from '../layout';
import Container from '@/atoms/container';

function Bag() {
  return (
    <Layout seo={{ metaTitle: 'Bag' }}>
      <Container>
        <DisplayLarge>Bag</DisplayLarge>
      </Container>
    </Layout>
  );
}

export default Bag;
