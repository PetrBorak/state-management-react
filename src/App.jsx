import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { createRootReducer } from './store/createReducer'
import rootSaga from "./store/middleware/sagas";
import Todos from "./todosComponent/Todos";

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    createRootReducer(history), // root reducer with router state,
    compose(
        applyMiddleware(routerMiddleware(history), sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
sagaMiddleware.run(rootSaga)

function App() {
  return (
      <Provider store={store}>
          <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
              <Router>
                  <Switch>
                      <Route path={'/:filter'} render={(props) => <Todos {...props}></Todos>}></Route>
                      <Route path={'/'} component={Todos}></Route>
                  </Switch>
              </Router>
          </ConnectedRouter>
      </Provider>
  );
}

export default App;
