import { DisplayLarge } from 'baseui/typography';
import Layout from '../layout';
import Container from '@/atoms/container';

function Home() {
  return (
    <Layout seo={{ metaTitle: 'Welcome' }}>
      <Container>
        <DisplayLarge>Kara</DisplayLarge>
      </Container>
    </Layout>
  );
}

export default Home;
