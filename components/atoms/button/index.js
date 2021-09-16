import React from 'react';
import { Button as BaseButton } from 'baseui/button';

function Button({ ...props }) {
  return (
    <BaseButton
      {...props}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            width: '100%',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            fontSize: '13px',
            fontWeight: '400',
            transitionProperty: 'all',
            transitionDuration: $theme.animation.timing700,
            ':hover': {
              backgroundColor: '#3D3026',
            },
          }),
        },
      }}
    />
  );
}

export default Button;
