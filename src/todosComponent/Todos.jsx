import React, { useEffect, useCallback } from 'react'
import {connect} from "react-redux";

import { todosActionCreatorFetch } from '../store/todos/todosActions'

export const Todos = (props) => {
    const { todosActionCreatorFetch, todos } = props;

    const fetchAndStore = useCallback((param = '') => {
        todosActionCreatorFetch(param)
    }, [todosActionCreatorFetch])

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
    todosActionCreatorFetch: (param) => dispatch(todosActionCreatorFetch(param))
})

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)