import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';

function Image({
  fit, height, image, width,
}) {
  const { url, alternativeText } = image;
  const src = `http://localhost:1337${url}`;

  const [css, theme] = useStyletron();

  return (
    <img
      src={src}
      alt={alternativeText}
      className={css({
        display: 'block',
        height,
        objectFit: fit,
        transitionDuration: theme.animation.timing700,
        transitionProperty: 'all',
        width,
      })}
    />
  );
}

Image.propTypes = {
  fit: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.string,
};

Image.defaultProps = {
  fit: 'cover',
  height: '100%',
  width: '100%',
};

export default Image;
