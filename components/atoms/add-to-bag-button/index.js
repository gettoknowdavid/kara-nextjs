import React from 'react';
import { Button, SIZE } from 'baseui/button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleBagPopup } from '@/slices/bag.slice';

function AddToBagButton({ onClick }) {
  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = React.useState(false);
  function handleOnClick() {
    setIsAdded(true);
    onClick();
    dispatch(toggleBagPopup());
    setTimeout(() => setIsAdded(false), 3000);
    setTimeout(() => dispatch(toggleBagPopup()), 5000);
  }

  return (
    <Button
      onClick={() => handleOnClick()}
      size={SIZE.compact}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '12px',
            width: '100%',
            color: $theme.colors.mono900,
            backgroundColor: 'transparent',
            transitionProperty: 'all',
            transitionDuration: $theme.animation.timing700,
            ':hover': {
              color: $theme.colors.mono100,
            },
          }),
        },
      }}
    >
      {isAdded ? 'Item Added' : 'Add to Bag'}
    </Button>
  );
}

AddToBagButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToBagButton;
