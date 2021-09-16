import React from 'react';
import { Input as BaseInput } from 'baseui/input';

function Input({ ...props }) {
  return (
    <BaseInput
      {...props}
      overrides={{
        Input: {
          style: {
            fontSize: '14px',
          },
        },
        Root: {
          style: {
            ':focus-within': {
              borderTopColor: '#3D3026',
              borderRightColor: '#3D3026',
              borderBottomColor: '#3D3026',
              borderLeftColor: '#3D3026',
            },
          },
        },
      }}
    />
  );
}

export default Input;
