import React from 'react';
import { DisplayLarge } from 'baseui/typography';
import Layout from '../../layout';
import { CategoriesQuery, CategoryVariables } from '@/query/categories.query';
import { fetchAPI } from '../../lib/api';
import Container from '@/atoms/container';

function Category({ category }) {
  const seo = {
    metaTitle: category.title,
  };
  return (
    <Layout seo={seo}>
      <Container>
        <DisplayLarge>{category.title}</DisplayLarge>
      </Container>
    </Layout>
  );
}

export default Category;

export async function getServerSideProps(context) {
  const params = { slug: context.params.category };

  const { data: { categories } } = await fetchAPI({
    query: CategoriesQuery,
    variables: CategoryVariables({ params }),
  });

  return {
    props: { category: categories[0] },
  };
}
