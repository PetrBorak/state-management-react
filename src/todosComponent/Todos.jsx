import React, { useEffect, useCallback } from 'react'
import {connect} from "react-redux";
import { Link, useParams } from "react-router-dom";
import { todosActionCreatorFetch } from '../store/todos/todosActions'

export const Todos = (props) => {
    debugger;
    const { todosActionCreatorFetch, todos, history } = props;
    let { filter } = useParams();

    const fetchAndStore = useCallback((param = '') => {
        todosActionCreatorFetch(param)
    }, [todosActionCreatorFetch, filter])

    const filterSelection = (ev) => history.push(ev.target.value)

    useEffect(() => {
        fetchAndStore(filter)
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
        todos: state.todos.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)