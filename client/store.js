/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/userReducer';
import thunk from 'redux-thunk';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
