import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';
import { styled, useStyletron } from 'baseui';
import { HeadingMedium, ParagraphSmall } from 'baseui/typography';

const Wrapper = styled(Block, ({ $theme }) => ({
  maxWidth: '400px',
  marginTop: '0px',
  marginRight: 'auto',
  marginBottom: '0',
  marginLeft: 'auto',
  left: '0',
  right: '0',
  width: '100%',
  boxShadow: $theme.lighting.shadow700,
  paddingTop: '30px',
  paddingBottom: '40px',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing700,
  [$theme.mediaQuery.small]: {
    paddingRight: '14px',
    paddingLeft: '14px',
  },
  [$theme.mediaQuery.medium]: {
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  [$theme.mediaQuery.large]: {
    paddingRight: '30px',
    paddingLeft: '30px',
  },
}));

const TitleBlock = styled(Block, () => ({
  marginBottom: '20px',
  width: '100%',
  display: 'block',
  textAlign: 'center',
}));

const Title = styled(HeadingMedium, ({ $theme }) => ({
  textAlign: 'center',
  letterSpacing: '5px',
  fontWeight: '700',
  textTransform: 'uppercase',
  color: '#3D3026',
  marginTop: '16px',
  marginBottom: '30px',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing700,
}));

function AuthFormContainer({
  title, error, errorOpacity, children,
}) {
  const [css, theme] = useStyletron();

  return (
    <Wrapper>
      <TitleBlock>
        <Title>{title}</Title>
        <Block className={css({
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        })}
        >
          <span className={css({
            width: '70%',
            height: '1px',
            backgroundColor: theme.colors.mono700,
            transitionProperty: 'all',
            transitionDuration: theme.animation.timing700,
          })}
          />
        </Block>
        <ParagraphSmall
          color="red"
          className={css({
            marginTop: '6px',
            marginBottom: 0,
            fontStyle: 'italic',
            opacity: errorOpacity,
            transitionProperty: 'all',
            transitionDuration: theme.animation.timing700,
          })}
        >
          {error}
        </ParagraphSmall>
      </TitleBlock>
      {children}
    </Wrapper>
  );
}

AuthFormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  errorOpacity: PropTypes.string.isRequired,
};

export default AuthFormContainer;
