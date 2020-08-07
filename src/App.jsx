import React from 'react';
import './App.css';
import { Route, Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import { todosReducer } from './store/todos/todos'
import rootSaga from "./store/middleware/sagas";
import Todos from "./todosComponent/Todos";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    todosReducer,
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
sagaMiddleware.run(rootSaga)

function App() {
  return (
      <Router history={createBrowserHistory()}>
          <Provider store={store}>
              <Route path={'/'} component={Todos}></Route>
          </Provider>
      </Router>
  );
}

export default App;
