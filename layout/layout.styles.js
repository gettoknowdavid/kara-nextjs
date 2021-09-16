import { styled } from 'baseui';
import { Block } from 'baseui/block';

export const StyledLayout = styled('main', ({ $theme }) => ({
  maxWidth: '1440px',
  margin: '0px auto',
  position: 'relative',
  backgroundColor: $theme.colors.mono200,
}));

export const StyledLayoutBody = styled(Block, ({ $theme }) => ({
  maxWidth: '1440px',
  minHeight: 'calc(100vh - 60px)',
  margin: '0px auto',
  backgroundColor: $theme.colors.mono200,
}));
