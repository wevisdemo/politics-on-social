import WvNavbar from '@wevisdemo/ui/components/navbar';
import WvFooter from '@wevisdemo/ui/components/footer';
import WvNavButton from '@wevisdemo/ui/components/nav-button'
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
        <WvNavbar title="POLITICS ON SOCIAL" dark={true} >
          <WvNavButton dark={true} active>Home</WvNavButton>
          <WvNavButton dark={true} active>About</WvNavButton>
        </WvNavbar>
        <Main />
        <WvFooter />
        <NextScript />
      </body>
    </Html>
  )
}