
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://design-systems.wevis.info/typography.css"
        />
      </Head>
      <body className='scroll-smooth'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}