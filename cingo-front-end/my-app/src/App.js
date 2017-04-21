// npm imports
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// Components/Utils
import TopbarComponent from './topbar';
import IncrementComponent from './increment';
import rootReducer from './reducers';

// Static files
import logo from './logo.svg';

// Stylesheets
import './App.css';
import './bootstrap.css';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         
        <TopbarComponent />
          <IncrementComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
