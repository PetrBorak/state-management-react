import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { todosReducer } from './todos/todos'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todos: todosReducer
})