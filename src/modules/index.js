import reducer from './reducer';
import {createStore} from 'redux';

// console.log("reducer", JSON.stringify(reducer));

const store = createStore(reducer);
export default store;

import * as navActions from './nav';
import * as productActions from './product';
import * as workActions from './work';
export {navActions, productActions, workActions};


