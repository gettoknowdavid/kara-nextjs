import React from 'react';
import { useSelector } from 'react-redux';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { ShoppingBag } from 'phosphor-react';
import { selectBag } from '@/slices/bag.slice';

function BagIcon() {
  const bagRepo = useSelector(selectBag);
  const { totalQuantity } = bagRepo;
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
      <ShoppingBag weight="bold" />
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
        {totalQuantity || ''}
      </div>
    </Block>
  );
}

export default BagIcon;
