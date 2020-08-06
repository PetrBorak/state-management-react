import React from 'react';
import './App.css';
import { Route, Router } from 'react-router'
import { createBrowserHistory } from 'history'

import { Todos} from "./todosComponent/Todos";

function App() {
  return (
      <Router history={createBrowserHistory()}>
        <Route path={'/'} component={Todos}></Route>
      </Router>
  );
}

export default App;
