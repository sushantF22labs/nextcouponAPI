import Document,{ Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document{
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta property='custom' content='yahoo..!'/>
        </Head>
        <body>
          <Main />
        </body>
          <NextScript />
      </Html>
    )
  }

}
