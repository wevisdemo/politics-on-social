import WvNavbar from '@wevisdemo/ui/components/navbar';
import WvFooter from '@wevisdemo/ui/components/footer';
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
        <WvNavbar title="politic" dark={true} />
        <Main />
        <WvFooter />
        <NextScript />
      </body>
    </Html>
  )
}