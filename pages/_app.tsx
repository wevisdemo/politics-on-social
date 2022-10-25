import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@wevisdemo/ui/styles/components.css';
import '@wevisdemo/ui/styles/typography.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
