import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import {promiseMiddleware} from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
      return applyMiddleware(promiseMiddleware);
    } else {
      // Enable additional logging in non-production environments.
      return applyMiddleware(promiseMiddleware, createLogger())
    }
  };

export const store = createStore(reducer,composeWithDevTools(getMiddleware()));