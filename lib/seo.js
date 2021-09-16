import React from 'react';
import Head from 'next/head';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { selectGlobal } from '../redux/slices/global.slice';

function Seo({ seo }) {
  const { globalSettings: { defaultSeo } } = useSelector(selectGlobal);

  const seoWithDefaults = { ...defaultSeo, ...seo };

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} | ${defaultSeo.metaDescription}`,
    shareImage: seoWithDefaults.shareImage.url,
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" key="viewport" />
      <meta name="twitter:card" content="summary_large_image" />

      <title>{fullSeo.metaTitle}</title>
      <meta property="og:title" content={fullSeo.metaTitle} />
      <meta name="twitter:title" content={fullSeo.metaTitle} />

      <meta name="description" content={fullSeo.metaDescription} />
      <meta property="og:description" content={fullSeo.metaDescription} />
      <meta name="twitter:description" content={fullSeo.metaDescription} />

      <meta property="og:image" content={fullSeo.shareImage} />
      <meta name="twitter:image" content={fullSeo.shareImage} />
      <meta name="image" content={fullSeo.shareImage} />

      {fullSeo.isProduct && <meta property="og;type" content="product" />}
    </Head>
  );
}

Seo.propTypes = {
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

export default Seo;
