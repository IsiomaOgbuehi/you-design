// import '../styles/globals.css'
import '../styles/style.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/logo01.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/logo01.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/logo01.svg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
