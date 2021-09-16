import React from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';
import Link from 'next/link';

function Logo({ size }) {
  const [css] = useStyletron();
  return (
    <Link href="/">
      <Block className={css({
        fontSize: size,
        lineHeight: size,
        fontWeight: '600',
        cursor: 'pointer',
        color: '#3D3026',
      })}
      >
        <span>kara</span>
      </Block>
    </Link>
  );
}
Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: '26px',
};

export default Logo;
