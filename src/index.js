import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from './components/Home/index.jsx';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import store from '../src/modules/index';
// import AppContainer from './Components/AppContainer';
import PageNotFound from './components/PageNotFound';

const router = (
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="*" component={PageNotFound}/>
    </Router>
);

// render(router, document.getElementById('app'));

render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById('app')
);