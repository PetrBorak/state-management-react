import React, { useEffect, useCallback } from 'react'
import { fetchTodos } from "../backend/backend";
import {connect} from "react-redux";

import { todosActionCreatorFetchSuccess, todosActionCreatorFetchError, todosActionCreatorFetchPending} from '../store/todos/todosActions'

export const Todos = (props) => {
    const { fetchTodosPending, fetchTodosSuccess, todos } = props;

    const fetchAndStore = useCallback((param = '') => {
        fetchTodosPending()
        fetchTodos(param).then((result) => {
            fetchTodosSuccess(result)
        })
    }, [fetchTodosSuccess, fetchTodosPending])

    const filterSelection = (ev) => fetchAndStore(ev.target.value)

    useEffect(() => {
        fetchAndStore()
    }, [fetchAndStore]);

    return (
        <div>
            <h2>HELLO WORLD FROM TODOS COMPONENT</h2>
            <select onChange={filterSelection}>
                <option value={'ALL'}>ALL</option>
                <option value={'DONE'}>DONE</option>
                <option value={'WAITING'}>WAITING</option>
            </select>
            <h2>TODOS:</h2>
            {todos.map((todo)=><div><h3>{todo.title}</h3>{todo.body}<input type='checkbox' checked={todo.state==='DONE'}/></div>)}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchTodosSuccess: (payload) => dispatch(todosActionCreatorFetchSuccess(payload)),
    fetchTodosPending: () => dispatch(todosActionCreatorFetchPending()),
    fetchTodosError: () => dispatch(todosActionCreatorFetchError()),
})

const mapStateToProps = (state) => {
    debugger
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)