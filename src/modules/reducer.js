import {combineReducers} from 'redux';
import navReducer from './nav';
import productReducer from './product';
import workReducer from './work';
// import followModalReducer from './followModal';

const reducer = combineReducers({
  nav: navReducer,
  product: productReducer,
  work: workReducer,
});

// console.log("reducer.js", reducer);

export default reducer;




