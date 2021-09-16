import React from 'react';
import { getSession, useSession } from 'next-auth/client';
import Layout from '../../layout';
import AccountContents from '@/contents/acccount.contents';
import { LoadingIndicator } from '@/atoms/loading-indicator';

function Account() {
  const [session, loading] = useSession();

  return (
    <Layout seo={{ metaTitle: 'Account' }}>
      {loading ? (<LoadingIndicator />) : null}
      <AccountContents session={session} />
    </Layout>
  );
}

export default Account;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        source: '/account',
        destination: '/account/login',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}
