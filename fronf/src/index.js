import React from 'react';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { rootReducer } from './components/redux/reducers/rootReducer';
import App from './App';

import './index.css';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
));

const history = createBrowserHistory();

render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router history={ history }>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);