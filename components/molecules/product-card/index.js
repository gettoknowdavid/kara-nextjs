import React from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';
import { ParagraphSmall } from 'baseui/typography';
import { Heart, MagnifyingGlassPlus } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import Image from '@/atoms/image';
import { Currency } from '../../../lib/currency';
import AddToBagButton from '@/atoms/add-to-bag-button';
import { addToBag } from '@/slices/bag.slice';
import { addWish } from '@/slices/wish.slice';

function ProductCard({ product }) {
  const [css, theme] = useStyletron();
  const { featuredImage, title } = product;
  const price = Currency.format(product.price);
  const [opacity, setOpacity] = React.useState('0');
  const dispatch = useDispatch();

  function handleAddToBag() {
    const data = { ...product, quantity: 1 };
    dispatch(addToBag(data));
  }

  function handleAddWish() {
    dispatch(addWish(product));
  }

  return (
    <Block position="relative">
      <Block
        onMouseEnter={() => setOpacity('1')}
        onMouseLeave={() => setOpacity('0')}
        className={css({
          position: 'relative',
          cursor: 'pointer',
          transitionProperty: 'all',
          transitionDuration: theme.animation.timing700,
          transitionTimingFunction: theme.animation.easeInOutQuinticCurve,
        })}
      >
        <Block className={css({
          position: 'absolute',
          right: '0',
          top: '0',
          paddingTop: '6px',
          paddingRight: '10px',
          paddingLeft: '10px',
          zIndex: '2',
          fontSize: '20px',
          color: theme.colors.accent,
          backgroundColor: theme.colors.mono200,
          borderBottomLeftRadius: '10px',
          transitionProperty: 'all',
          transitionDuration: theme.animation.timing700,
          transitionTimingFunction: theme.animation.easeInOutCurve,
          opacity,
        })}
        >
          <span className={css({ cursor: 'pointer' })} onClick={() => handleAddWish()}><Heart /></span>
          <span className={css({ marginLeft: '12px', cursor: 'pointer' })}><MagnifyingGlassPlus /></span>
        </Block>

        <Block className={css({
          width: '100%',
          [theme.mediaQuery.small]: { height: 'calc((100vw - 26px) / 2)' },
          [theme.mediaQuery.medium]: { height: 'calc((100vw - 26px) / 3)' },
          [theme.mediaQuery.large]: { height: 'calc((100vw - 26px) / 4)' },
        })}
        >
          <Image image={featuredImage} fit="cover" />
        </Block>
        <Block>
          <ParagraphSmall className={css({
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '600',
            marginBottom: '0',
            color: theme.colors.mono900,
            textAlign: 'center',

          })}
          >
            {title}
          </ParagraphSmall>
        </Block>
        <Block>
          <ParagraphSmall className={css({
            marginTop: '3px',
            marginBottom: '0',
            letterSpacing: '0.6px',
            color: theme.colors.mono900,
            textAlign: 'center',
          })}
          >
            {price}
            <span className={css({
              fontSize: '12px',
              fontStyle: 'italic',
              marginLeft: '6px',
              color: theme.colors.mono700,
            })}
            >
              {'  - per yard'}
            </span>
          </ParagraphSmall>
        </Block>
      </Block>
      <Block marginTop="6px">
        <AddToBagButton onClick={() => handleAddToBag()} />
      </Block>
    </Block>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
