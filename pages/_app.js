// pages/_app.js
import '../app/globals.css';
import { FavoriteProvider } from '../context/FavoriteContext';

function MyApp({ Component, pageProps }) {
  return (
    <FavoriteProvider>
      <Component {...pageProps} />
    </FavoriteProvider>
  );
}

export default MyApp;
