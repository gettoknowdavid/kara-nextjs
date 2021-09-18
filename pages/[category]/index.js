import React from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import Link from 'next/link';
import Layout from '../../layout';
import { CategoriesQuery, CategoryVariables } from '@/query/categories.query';
import { fetchAPI } from '../../lib/api';
import Container from '@/atoms/container';
import { ProductsByCategoryQuery, ProductsVariables } from '@/query/products-by-category.query';
import ProductList from '@/molecules/product-list';
import Breadcrumbs from '@/atoms/breadcrumbs';

function Category({ category, products }) {
  const [css, theme] = useStyletron();

  return (
    <Layout seo={{ metaTitle: category.title }}>
      <Container paddingRight="2px" paddingLeft="2px">
        <Block className={css({
          paddingRight: '14px',
          paddingLeft: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
        >
          <Block>
            <Breadcrumbs>
              <Link href="/">
                <span className={css({ ...theme.typography.LabelSmall, cursor: 'pointer', textDecoration: 'underline' })}>
                  Home
                </span>
              </Link>
              <span>{category.title}</span>
            </Breadcrumbs>
          </Block>

          <Block className={css({ display: 'flex', ...theme.typography.LabelSmall })}>
            <span>{`Showing all ${products.length} products`}</span>
            <Block width="30px" />
            <span>Filters</span>
          </Block>
        </Block>

        <Block>
          <ProductList products={products} />
        </Block>
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

  const { data: { products } } = await fetchAPI({
    query: ProductsByCategoryQuery,
    variables: ProductsVariables({ params }),
  });

  return {
    props: { category: categories[0], products },
  };
}
