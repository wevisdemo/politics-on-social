import '../styles/globals.css'
import type { AppProps } from 'next/app'

import WvNavbar from '@wevisdemo/ui/components/navbar';
import WvFooter from '@wevisdemo/ui/components/footer';
import WvNavButton from '@wevisdemo/ui/components/nav-button'
import '@wevisdemo/ui/styles/components.css';
import '@wevisdemo/ui/styles/typography.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <WvNavbar title="POLITICS ON SOCIAL" dark={true} >
        <WvNavButton dark={true} active={router?.asPath === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
        <WvNavButton dark={true} active={router?.asPath === '/about'} onClick={() => router.replace('/about')}>About</WvNavButton>
      </WvNavbar>
      <Component {...pageProps} />
      <WvFooter />
    </>)
}

export default MyApp
