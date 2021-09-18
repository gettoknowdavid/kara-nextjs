import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import PropTypes from 'prop-types';
import ProductCard from '@/molecules/product-card';

function ProductList({ products }) {
  return (
    <FlexGrid
      flexGridColumnCount={[2, 2, 3, 4]}
      flexGridRowGap={['1px', '20px', '40px', '40px']}
      flexGridColumnGap={['1px', '2px', '2px', '2px']}
      marginTop="20px"
    >
      {products.map((product) => (
        <FlexGridItem key={product.id}>
          <ProductCard product={product} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
