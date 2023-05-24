import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import stores from './stores'
import products from './products'
import reviews from './reviews'
import cart from './cart'

// The root reducer will contain all of the reducer slices

const rootReducer = combineReducers({
  session,
  stores,
  products,
  reviews,
  cart
});


let enhancer;

// If the environment is in production, then we will only apply the thunk middleware
// Otherwise, we will apply the thunk middleware and the logger middleware for easier debugging

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
