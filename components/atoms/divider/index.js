import React from 'react';
import { Block } from 'baseui/block';
import PropTypes from 'prop-types';

export const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
};

function Horizontal({
  color, marginTop, marginBottom, width, justify,
}) {
  return (
    <Block marginTop={marginTop} marginBottom={marginBottom} width="100%" height="20px" display="flex" justifyContent={justify} alignItems="center">
      <Block backgroundColor={color} width={width} height="1px" />
    </Block>
  );
}

function Vertical({
  color, marginRight, marginLeft, height, justify,
}) {
  return (
    <Block marginRight={marginRight} marginLeft={marginLeft} width="10px" height="100%" display="flex" justifyContent={justify} alignItems="center">
      <Block backgroundColor={color} width="1px" height={height} />
    </Block>
  );
}

function Divider({
  color,
  direction,
  height,
  justify,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  width,
}) {
  switch (direction) {
    case DIRECTION.HORIZONTAL:
      return (
        <Horizontal
          color={color}
          justify={justify}
          marginBottom={marginBottom}
          marginTop={marginTop}
          width={width}
        />
      );
    case DIRECTION.VERTICAL:
      return (
        <Vertical
          color={color}
          height={height}
          justify={justify}
          marginLeft={marginLeft}
          marginRight={marginRight}
        />
      );
    default:
      return null;
  }
}

export default Divider;

Horizontal.propTypes = {
  color: PropTypes.any.isRequired,
  justify: PropTypes.any.isRequired,
  marginTop: PropTypes.any.isRequired,
  marginBottom: PropTypes.any.isRequired,
  width: PropTypes.any.isRequired,
};

Vertical.propTypes = {
  color: PropTypes.any.isRequired,
  justify: PropTypes.any.isRequired,
  marginRight: PropTypes.any.isRequired,
  marginLeft: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
};

Divider.propTypes = {
  color: PropTypes.any,
  direction: PropTypes.any.isRequired,
  height: PropTypes.any,
  justify: PropTypes.any,
  marginTop: PropTypes.any,
  marginRight: PropTypes.any,
  marginBottom: PropTypes.any,
  marginLeft: PropTypes.any,
  width: PropTypes.any,
};

Divider.defaultProps = {
  color: '#3D3026',
  height: '100%',
  justify: 'center',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  width: '100%',
};
