import React from 'react';
import { Block } from 'baseui/block';
import { Heart } from 'phosphor-react';
import { useStyletron } from 'baseui';
import { useSelector } from 'react-redux';
import { selectWish } from '@/slices/wish.slice';

function WishlistIcon() {
  const wishRepo = useSelector(selectWish);
  const { totalWishes } = wishRepo;

  const [css, theme] = useStyletron();
  return (
    <Block className={css({
      display: 'flex',
      color: theme.colors.mono1000,
      fontSize: '20px',
      lineHeight: '20px',
      height: '20px',
      paddingBottom: '0',
      cursor: 'pointer',
      transitionProperty: 'all',
      transitionDuration: theme.animation.timing700,
      ':hover': { color: theme.colors.mono500 },
    })}
    >
      <Heart weight="bold" />
      <div className={css({
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '0px',
        marginLeft: '1px',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
      })}
      >
        {totalWishes || ''}
      </div>
    </Block>
  );
}

export default WishlistIcon;
