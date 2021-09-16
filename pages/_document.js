import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '../styletron';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const renderPage = () => context.renderPage({
      enhanceApp: (App) => (props) => (
        <StyletronProvider value={styletron}>
          <App {...props} />
        </StyletronProvider>
      ),
    });

    const initialProps = await Document.getInitialProps({
      ...context, renderPage,
    });

    const stylesheets = styletron.getStylesheets() || [];

    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, index) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={index}
            />
          ))}
          <style>
            {`
              * { box-sizing: border-box; }
              body { margin: 0; }
              ::selection { background: #276EF1; color: white; }
            `}
          </style>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="/fonts/styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
