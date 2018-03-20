import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';
import { addToCart} from './state/cart/actions'

const store = configureStore({  });
store.dispatch(addToCart('1',9))
store.dispatch(addToCart('2',9))
store.dispatch(addToCart('3',9))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
