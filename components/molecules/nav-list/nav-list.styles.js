import { styled } from 'baseui';

export const StyledNavList = styled('ul', ({ $theme }) => ({
  marginTop: '0',
  marginRight: '0',
  marginBottom: '0',
  marginLeft: '0',
  paddingLeft: '0px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  right: '0',
  position: 'absolute',
  zIndex: '-1',
  [$theme.mediaQuery.small]: { display: 'none' },
  [$theme.mediaQuery.medium]: { display: 'none' },
  [$theme.mediaQuery.large]: { display: 'flex' },
}));
