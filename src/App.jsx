import React from 'react';
import './App.css';
import { Route, Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { todosReducer } from './store/todos/todos'

import Todos from "./todosComponent/Todos";

function App() {
  return (
      <Router history={createBrowserHistory()}>
          <Provider store={createStore(todosReducer)}>
              <Route path={'/'} component={Todos}></Route>
          </Provider>
      </Router>
  );
}

export default App;
