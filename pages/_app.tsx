import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@wevisdemo/ui/styles/index.css';
import WvCookieConsent from '@wevisdemo/ui/react/cookie-consent';
import { initClarity } from '../utils/clarity';

function onCookieAccept(options: Record<string, boolean>) {
  if (options['Analytics']) {
    initClarity();
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <WvCookieConsent
        policyUrl='https://punchup.world'
        cookieOptions={['Analytics']}
        onAccept={onCookieAccept}
      />
    </>
  );
}

export default MyApp;
