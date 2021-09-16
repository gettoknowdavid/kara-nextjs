import { styled } from 'baseui';
import { Block } from 'baseui/block';
import { ParagraphMedium, ParagraphXSmall } from 'baseui/typography';

export const AddressCardWrapper = styled(Block, ({ $theme }) => ({
  backgroundColor: $theme.colors.mono100,
  paddingTop: '14px',
  paddingRight: '16px',
  paddingBottom: '14px',
  paddingLeft: '16px',
}));

export const AddressDetailItem = styled(ParagraphMedium, () => ({
  marginTop: '6px',
  marginBottom: '6px',
  display: 'flex',
}));

export const AddressDetailTitle = styled('span', () => ({
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginRight: '6px',
}));

export const AddressDetail = styled('span', ({ $theme }) => ({
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.6px',
  [$theme.mediaQuery.small]: { fontSize: '13px' },
  [$theme.mediaQuery.medium]: { fontSize: '13px' },
  [$theme.mediaQuery.large]: { fontSize: '13px' },
}));

export const AddressActionsBlock = styled(Block, () => ({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const AddressDefaultButton = styled(ParagraphXSmall, ({ $theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  paddingBlock: '6px',
  paddingInline: '10px',
  marginRight: '10px',
  cursor: 'pointer',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing700,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  ':hover': {
    color: $theme.colors.mono100,
    backgroundColor: $theme.colors.accent,
  },
}));

export const AddressEditButton = styled('li', ({ $theme }) => ({
  paddingBlock: '6px',
  paddingInline: '10px',
  marginRight: '10px',
  cursor: 'pointer',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing700,
  height: '100%',
  ':hover': {
    color: $theme.colors.mono100,
    backgroundColor: $theme.colors.accent,
  },
}));

export const AddressDeleteButton = styled('li', ({ $theme }) => ({
  paddingBlock: '6px',
  paddingInline: '10px',
  marginRight: '10px',
  cursor: 'pointer',
  color: 'red',
  transitionProperty: 'all',
  height: '100%',
  transitionDuration: $theme.animation.timing700,
  ':hover': {
    color: 'white',
    backgroundColor: $theme.colors.accent,
  },
}));
