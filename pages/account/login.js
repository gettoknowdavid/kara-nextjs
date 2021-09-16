import React from 'react';
import {
  getCsrfToken, getSession, signIn,
} from 'next-auth/client';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { useStyletron } from 'baseui';
import { ParagraphSmall } from 'baseui/typography';
import Link from 'next/link';
import { At, Lock } from 'phosphor-react';
import { useRouter } from 'next/router';
import Layout from '../../layout';
import Container from '@/atoms/container';
import Input from '@/atoms/input';
import Button from '@/atoms/button';
import { LoadingIndicator } from '@/atoms/loading-indicator';
import AuthFormContainer from '@/atoms/auth-form-container';

function Login({ csrfToken }) {
  const seo = { metaTitle: 'Login' };
  const router = useRouter();
  const [css, theme] = useStyletron();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [errorOpacity, setErrorOpacity] = React.useState('0');
  const loginError = 'Invalid email or password.';

  function clearErrors() {
    setLoading(false);
    setEmailError('');
    setPasswordError('');
    setErrorOpacity('0');
  }

  function onEmailChange(e) {
    clearErrors();
    setEmail(e.currentTarget.value);
  }

  function onPasswordChange(e) {
    clearErrors();
    setPassword(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      signIn('credentials', { email, password, redirect: false })
        .then((res) => {
          if (res.ok) {
            router.push('/account');
          } else {
            setLoading(false);
            setErrorOpacity('1');
          }
        });
    } else {
      setEmailError('This field cannot be empty');
      setPasswordError('This field cannot be empty');
    }
  }

  const quickLinkCSS = css({
    marginTop: '6px',
    marginBottom: '6px',
    cursor: 'pointer',
    color: theme.colors.mono700,
    transitionProperty: 'all',
    transitionDuration: theme.animation.timing700,
    ':hover': { color: theme.colors.mono900 },
  });

  const animationCSS = css({
    transitionProperty: 'all',
    transitionDuration: theme.animation.timing700,
  });

  return (
    <Layout seo={seo}>
      {loading ? (<LoadingIndicator />) : null}
      <Container paddingTop={['20px', '20px', '30px', '60px']}>
        <AuthFormContainer error={loginError} title="Login" errorOpacity={errorOpacity}>
          {/* Form */}
          <Block className={animationCSS}>
            <form onSubmit={handleSubmit} method="post">
              <Block marginBottom="25px" className={animationCSS}>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <FormControl error={emailError}>
                  <Input
                    placeholder="Email"
                    value={email}
                    type="email"
                    error={emailError}
                    onChange={(e) => onEmailChange(e)}
                    startEnhancer={() => (<At />)}
                  />
                </FormControl>
              </Block>
              <Block marginBottom="40px" className={animationCSS}>
                <FormControl error={passwordError}>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    error={passwordError}
                    onChange={(e) => onPasswordChange(e)}
                    startEnhancer={() => (<Lock />)}
                  />
                </FormControl>
              </Block>
              <Button type="submit">Log In</Button>
            </form>

          </Block>
          <Block className={css({
            marginTop: '20px',
            display: 'grid',
            textAlign: 'center',
            justifyContent: 'center',
          })}
          >
            <Link href="/account/register">
              <ParagraphSmall className={quickLinkCSS}>Create Account</ParagraphSmall>
            </Link>
            <Link href="/account/forgot-password">
              <ParagraphSmall className={quickLinkCSS}>Forgot Password</ParagraphSmall>
            </Link>
          </Block>
        </AuthFormContainer>
      </Container>
    </Layout>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        source: '/account/login',
        destination: '/account',
        permanent: false,
      },
    };
  }

  return { props: { csrfToken, session } };
}
