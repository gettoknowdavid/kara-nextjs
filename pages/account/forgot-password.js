import React from 'react';
import { DisplayLarge } from 'baseui/typography';
import Layout from '../../layout';
import Container from '@/atoms/container';

function ForgotPassword() {
  const seo = { metaTitle: 'Forgot Password' };

  return (
    <Layout seo={seo}>
      <Container>
        <DisplayLarge>Forgot Password</DisplayLarge>
      </Container>
    </Layout>
  );
}

export default ForgotPassword;
