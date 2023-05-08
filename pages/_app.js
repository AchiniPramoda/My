import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
