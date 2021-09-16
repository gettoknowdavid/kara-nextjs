import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { At, Lock } from 'phosphor-react';
import Link from 'next/link';
import { ParagraphSmall } from 'baseui/typography';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import Layout from '../../layout';
import Container from '@/atoms/container';
import AuthFormContainer from '@/atoms/auth-form-container';
import Input from '@/atoms/input';
import { LoadingIndicator } from '@/atoms/loading-indicator';
import Button from '@/atoms/button';
import { postAPI } from '../../lib/api';
import { RegisterMutation, RegisterVariables } from '@/mutation/register.mutation';

function Register() {
  const seo = { metaTitle: 'Create Account' };
  const router = useRouter();
  const [css, theme] = useStyletron();
  const [params, setParams] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [registerError, setRegisterError] = React.useState('');
  const [errorOpacity, setErrorOpacity] = React.useState('0');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (params.firstName && params.lastName && params.email && params.password) {
      setButtonDisabled(false);
    } else { setButtonDisabled(true); }
  }, [params, setParams, buttonDisabled, setButtonDisabled]);

  async function handleRegister(e) {
    e.preventDefault();
    if (params.firstName && params.lastName && params.email && params.password) {
      setLoading(true);
      await postAPI({
        mutation: RegisterMutation,
        variables: RegisterVariables({ params }),
        errorPolicy: 'none',
      }).then((response) => {
        if (response.data) {
          const { email, password } = params;
          signIn('credentials', { email, password, redirect: false })
            .then((res) => {
              if (res.ok) router.push('/account');
            });
        }
      }).catch(({ graphQLErrors }) => {
        setLoading(false);
        graphQLErrors.forEach(({ extensions }) => {
          setRegisterError(extensions.exception.data.message[0].messages[0].message);
          setErrorOpacity('1');
        });
      });
    }
  }

  const animationCSS = css({
    transitionProperty: 'all',
    transitionDuration: theme.animation.timing700,
  });

  const quickLinkCSS = css({
    marginTop: '6px',
    marginBottom: '6px',
    cursor: 'pointer',
    color: theme.colors.mono700,
    transitionProperty: 'all',
    transitionDuration: theme.animation.timing700,
    ':hover': { color: theme.colors.mono900, textDecoration: 'underline' },
  });

  return (
    <Layout seo={seo}>
      {loading ? (<LoadingIndicator />) : null}
      <Container paddingTop={['20px', '20px', '30px', '40px']}>
        <AuthFormContainer error={registerError} errorOpacity={errorOpacity} title="Register">
          <Block className={animationCSS} marginTop="35px">
            <form method="post" onSubmit={handleRegister}>
              <Block display="flex" className={animationCSS}>
                <Block marginRight="6px">
                  <FormControl>
                    <Input
                      required
                      value={params.firstName}
                      placeholder="First Name"
                      name={params.firstName}
                      onChange={(e) => {
                        setErrorOpacity('0');
                        setParams({ ...params, firstName: e.currentTarget.value });
                      }}
                    />
                  </FormControl>
                </Block>
                <Block marginLeft="6px">
                  <FormControl>
                    <Input
                      required
                      value={params.lastName}
                      placeholder="Last Name"
                      name={params.lastName}
                      onChange={(e) => {
                        setErrorOpacity('0');
                        setParams({ ...params, lastName: e.currentTarget.value });
                      }}
                    />
                  </FormControl>
                </Block>
              </Block>
              <FormControl>
                <Input
                  required
                  startEnhancer={() => (<At />)}
                  value={params.email}
                  placeholder="Email"
                  name={params.email}
                  type="email"
                  onChange={(e) => {
                    setErrorOpacity('0');
                    setParams({ ...params, email: e.currentTarget.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <Input
                  required
                  startEnhancer={() => (<Lock />)}
                  value={params.password}
                  placeholder="Password"
                  name={params.password}
                  type="password"
                  onChange={(e) => {
                    setErrorOpacity('0');
                    setParams({ ...params, password: e.currentTarget.value });
                  }}
                />
              </FormControl>
              <Block height="30px" />
              <Button type="submit" disabled={buttonDisabled}>
                Create Account
              </Button>
            </form>
            <Block className={css({
              marginTop: '20px',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
            })}
            >
              <Link href="/account/login">
                <ParagraphSmall className={quickLinkCSS}>
                  Already have an account? Log in
                </ParagraphSmall>
              </Link>
            </Block>
          </Block>
        </AuthFormContainer>
      </Container>
    </Layout>
  );
}

export default Register;
