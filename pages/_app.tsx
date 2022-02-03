import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { AuthContextProvider } from '../context/auth.context';
import { SavedContextProvider } from '../context/saved.context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <SavedContextProvider>
        <div className='flex flex-col justify-between min-h-[125vh]'>
          <Head>
            <link rel="icon" href="https://admin.fasthosts.co.uk/skins/fh2015/favicon.ico" />
          </Head>

          <Header />
          <Component {...pageProps} />
          <ToastContainer />
          <Footer />
        </div>
      </SavedContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
