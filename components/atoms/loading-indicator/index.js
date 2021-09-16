import React from 'react';
import { Block } from 'baseui/block';
import { StyledSpinnerNext } from 'baseui/spinner';
import { useStyletron } from 'baseui';

export function LoadingIndicator() {
  const [css, theme] = useStyletron();
  return (
    <Block className={css({
      height: '100vh',
      width: '100vw',
      opacity: '0.7',
      backgroundColor: theme.colors.mono800,
      position: 'fixed',
      display: 'flex',
      zIndex: '1000',
      bottom: 0,

      [theme.mediaQuery.small]: {
        paddingRight: '0',
        paddingBottom: '0',
        justifyContent: 'center',
        alignItems: 'center',
      },
      [theme.mediaQuery.medium]: {
        paddingRight: '80px',
        paddingBottom: '50px',
        justifyContent: 'center',
        alignItems: 'center',
      },
      [theme.mediaQuery.large]: {
        paddingRight: '80px',
        paddingBottom: '50px',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
    })}
    >
      <Block className={css({
        height: 'calc(100vh * 0.2)',
        width: 'calc(100vw * 0.15)',
        backgroundColor: theme.colors.mono100,
        boxShadow: theme.lighting.shadow700,
        position: 'fixed',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.mediaQuery.small]: {
          height: 'calc(100vh * 0.14)',
          width: 'calc(100vw * 0.3)',
        },
        [theme.mediaQuery.medium]: {
          height: 'calc(100vh * 0.2)',
          width: 'calc(100vw * 0.15)',
        },
        [theme.mediaQuery.large]: {
          height: 'calc(100vh * 0.2)',
          width: 'calc(100vw * 0.15)',
        },
      })}
      >
        <StyledSpinnerNext />
      </Block>
    </Block>
  );
}
