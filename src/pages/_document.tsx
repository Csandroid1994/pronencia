import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document';
import {GA_TRACKING_ID} from 'lib/ga';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  createMarkup() {
    return {
      __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });`,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* favicons */}
          <link 
            rel="apple-touch-icon" 
            sizes="76x76" 
            href="/static/favicons/apple-touch-icon.png" 
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />

          {/* Google Analytics tag */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script dangerouslySetInnerHTML={this.createMarkup()} /> 

          {/* noto sans kr, roboto font-familly */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap" 
            rel="stylesheet" 
          />
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
