import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col justify-between min-h-[125vh]'>
      <Head>
        <link rel="icon" href="https://admin.fasthosts.co.uk/skins/fh2015/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
