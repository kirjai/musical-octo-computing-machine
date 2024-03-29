import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { MY_VAR } from '../environments/environment';

function CustomApp({ Component, pageProps }: AppProps) {
  console.log('my var', MY_VAR);

  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to next-app!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
