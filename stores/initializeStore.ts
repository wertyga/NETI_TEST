import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reduces/rootReducer';

const middlewares = [thunk];
export const initializeStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares),
  )
);
