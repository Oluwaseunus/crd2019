import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

const middlewares = [logger];

export default createStore(rootReducer, applyMiddleware(...middlewares));
