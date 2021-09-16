import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';

function NavActionItem({ action }) {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const isActive = router.asPath.includes(action.id);

  const iconsStyles = {
    fontSize: '19px',
    marginLeft: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    borderBottomWidth: isActive ? '3px' : '',
    borderBottomStyle: isActive ? 'solid' : '',
    borderBottomColor: isActive ? '#3D3026' : '',
    transitionProperty: 'all',
    transitionDuration: theme.animation.timing700,
    ':hover': {
      color: theme.colors.mono600,
    },
  };

  const menuIconStyle = {
    ...iconsStyles,
    [theme.mediaQuery.small]: { display: 'flex' },
    [theme.mediaQuery.medium]: { display: 'flex' },
    [theme.mediaQuery.large]: { display: 'none' },
  };

  return (
    <li className={action.id.includes('menu') ? css(menuIconStyle) : css(iconsStyles)}>
      {action.icon}
    </li>
  );
}

NavActionItem.propTypes = {
  action: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.node,
  }).isRequired,
};

export default NavActionItem;
