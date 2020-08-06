import React, { ReactDOM, useEffect, useState } from 'react'
import { fetchTodos, getTodos } from "../backend/backend";

export const Todos = (props) => {
    const [todos, setTodos] = useState([])
    const filterSelection = (ev) => fetchTodos(ev.target.value).then((result) => {
        setTodos(result)
    });
    useEffect(() => {
        fetchTodos().then((result) => {
            setTodos(result)
        })
    }, []);

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
