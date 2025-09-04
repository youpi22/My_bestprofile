import '@/styles/globals.css';
import { PageProvider } from '../context/pageContext';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
      <Analytics />
    </>
  );
}
