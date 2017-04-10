// npm imports
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Components/Utils
import IncrementComponent from './increment';
import SettingsComponent from './settings';
import rootReducer from './reducers';

// Static files
import logo from './logo.svg';

// Stylesheets
import './App.css';
import './bootstrap.css';

const loggerMiddleware = createLogger();
const store = createStore(
  combineReducers({
    ...rootReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
          <Route path="/">
            <Route path="user_request" component={IncrementComponent}/>
            <Route path="settings" component={SettingsComponent}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
