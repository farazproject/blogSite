import '@/styles/globals.css';
import { Provider } from 'react-redux';
import {store} from '../store1';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
