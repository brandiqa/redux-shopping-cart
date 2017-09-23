import store from './store.js';
import { addToCart, updateCart, deleteFromCart }  from './actions/cart-actions';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const App = <h1>Redux Shopping Cart</h1>;

ReactDOM.render(
  <Provider store={store}>
    { App }
  </Provider> ,
  document.getElementById('root')
);

// console.log("initial state: ", store.getState());
//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// Add to Cart
store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));

// unsubscribe();

console.log('Install Redux DevTools Chrome Extension to view output!');
