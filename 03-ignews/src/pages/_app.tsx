import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { SessionProvider } from 'next-auth/react'

import '../styles/global.scss'
import { PrismicProvider } from '@prismicio/react';
import { client } from '../../prismicio.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </PrismicProvider>

  );
}

export default MyApp
