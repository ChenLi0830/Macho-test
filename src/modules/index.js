import reducer from './reducer';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

// console.log("reducer", JSON.stringify(reducer));

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

import * as navActions from './nav';
import * as productActions from './product';
export {navActions, productActions};


