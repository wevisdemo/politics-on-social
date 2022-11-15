import { Html, Main, Head, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          defer
          data-domain="wevis.info/politics-on-social"
          src="https://analytics.punchup.world/js/plausible.js"
        ></script>
      </Head>
      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
