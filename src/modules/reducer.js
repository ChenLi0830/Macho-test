import {combineReducers} from 'redux';
import navReducer from './nav';
import productReducer from './product';
// import followModalReducer from './followModal';

const reducer = combineReducers({
  nav: navReducer,
  product: productReducer
});

// console.log("reducer.js", reducer);

export default reducer;




