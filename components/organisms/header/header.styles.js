import { styled } from 'baseui';

export const StyledHeader = styled('header', ({ $theme }) => ({
  height: '60px',
  backgroundColor: $theme.colors.mono100,
  zIndex: '10',
  position: 'sticky',
  top: '0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing700,
  [$theme.mediaQuery.small]: {
    paddingLeft: '14px',
    paddingRight: '14px',
  },
  [$theme.mediaQuery.medium]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  [$theme.mediaQuery.large]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
}));
