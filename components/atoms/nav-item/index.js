import React from 'react';
import Link from 'next/link';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function NavItem({ category }) {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const isActive = router.asPath.includes(category.slug);
  return (
    <Link href={`/${category.slug}`}>
      <li
        className={css({
          textTransform: 'uppercase',
          paddingTop: '3px',
          paddingRight: '9px',
          paddingBottom: '3px',
          paddingLeft: '9px',
          marginRight: '10px',
          marginLeft: '10px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '2px',
          color: isActive ? theme.colors.mono100 : theme.colors.mono900,
          backgroundColor: isActive ? '#3D3026' : 'transparent',
          transitionProperty: 'all',
          transitionDuration: theme.animation.timing700,
          ':hover': {
            backgroundColor: '#3D3026',
            color: theme.colors.mono100,
          },

        })}
      >
        {category.title}
      </li>
    </Link>
  );
}

NavItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default NavItem;
