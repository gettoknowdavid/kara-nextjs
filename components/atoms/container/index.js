import React from 'react';
import { Block } from 'baseui/block';
import PropTypes from 'prop-types';

function Container({
  children, minHeight, paddingTop, paddingRight, paddingBottom, paddingLeft,
}) {
  return (
    <Block
      position="relative"
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      minHeight={minHeight}
    >
      {children}
    </Block>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
  paddingTop: PropTypes.any,
  paddingRight: PropTypes.any,
  paddingBottom: PropTypes.any,
  paddingLeft: PropTypes.any,
};

Container.defaultProps = {
  minHeight: '100%',
  paddingTop: ['20px', '20px', '20px', '20px'],
  paddingRight: ['14px', '14px', '20px', '20px'],
  paddingBottom: ['40px', '40px', '50px', '60px'],
  paddingLeft: ['14px', '14px', '20px', '20px'],
};

export default Container;
