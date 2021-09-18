import React from 'react';
import PropTypes from 'prop-types';
import { StyledLayoutBody, StyledLayout } from './layout.styles';
import Seo from '../lib/seo';
import Header from '@/organisms/header';
import Footer from '@/organisms/footer';
import BagDrawer from '@/organisms/bag-drawer';

function Layout({ children, seo }) {
  return (
    <StyledLayout>
      <Seo seo={seo} />
      <BagDrawer />
      <Header />
      <StyledLayoutBody>
        {children}
      </StyledLayoutBody>
      <Footer />
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape({
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    shareImage: PropTypes.shape({
      url: PropTypes.string,
      alternativeText: PropTypes.string,
    }),
    isProduct: PropTypes.bool,
  }).isRequired,
};

export default Layout;
