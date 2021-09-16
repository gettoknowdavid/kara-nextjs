import { styled } from 'baseui';
import { Block } from 'baseui/block';
import {
  HeadingXSmall, HeadingXXLarge, ParagraphSmall, ParagraphXSmall,
} from 'baseui/typography';

export const UserInfoWrapper = styled(Block, ({ $theme }) => ({
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: $theme.colors.accent,
  [$theme.mediaQuery.small]: { height: 'calc(100vh * 0.22)' },
  [$theme.mediaQuery.medium]: { height: 'calc(100vh * 0.25)' },
  [$theme.mediaQuery.large]: { height: 'calc(100vh * 0.3)' },
}));

export const UserName = styled(HeadingXXLarge, ({ $theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  color: $theme.colors.mono100,
  [$theme.mediaQuery.small]: {
    fontSize: '24px',
    lineHeight: '24px',
    letterSpacing: '-1.5px',
  },
  [$theme.mediaQuery.medium]: {
    fontSize: '40px',
    lineHeight: '40px',
    letterSpacing: '-1.25px',
  },
  [$theme.mediaQuery.large]: {
    fontSize: '48px',
    lineHeight: '52px',
    letterSpacing: '-1px',
  },
}));

export const UserEmail = styled(ParagraphSmall, ({ $theme }) => ({
  marginTop: '10px',
  marginBottom: '0px',
  color: $theme.colors.mono400,
  lineHeight: '14px',
  [$theme.mediaQuery.small]: { fontSize: '10px' },
  [$theme.mediaQuery.medium]: { fontSize: '12px' },
  [$theme.mediaQuery.large]: { fontSize: '14px' },
}));

export const LogoutButton = styled(ParagraphXSmall, ({ $theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  fontWeight: '400',
  lineHeight: '14px',
  cursor: 'pointer',
  paddingTop: '4px',
  paddingRight: '12px',
  paddingBottom: '4px',
  paddingLeft: '12px',
  color: $theme.colors.mono500,
  backgroundColor: $theme.colors.accent,
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing700,
  ':hover': {
    color: $theme.colors.mono900,
    backgroundColor: $theme.colors.mono400,
  },
}));

export const AccountDetailTitle = styled(HeadingXSmall, ({ $theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginTop: '0',
  marginBottom: '0',
  color: $theme.colors.accent,
}));
