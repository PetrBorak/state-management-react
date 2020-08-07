const express = require('express')

const app = express()

const todos = [
    {
        title: 'TODO One',
        body: 'Just Do It',
        id: 0,
        state: 'WAITING'
    },{
        title: 'TODO Two',
        body: 'Just Do It',
        id: 1,
        state: 'WAITING'
    },{
        title: 'TODO Three',
        body: 'Just Do It',
        id: 2,
        state: 'DONE'
    },{
        title: 'TODO Four',
        body: 'Just Do It',
        id: 3,
        state: 'DONE'
    }
]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/todos', (req, res) => {
    const filter = req.query.filter || 'ALL';
    console.log('GOT FILTER VALUE ', filter);
    const todosToSend = todos.filter((todo) => filter === 'ALL' || todo.state === filter )
    console.log('have todosToSend', todosToSend)
    res.json(todosToSend)
})

app.use('/todos/:id', (req, res) => {
    const filter = parseInt(req.param.id, 10);
    console.log('GOT FILTER VALUE ', filter);
    res.json(todos.filter((todo) => todo.id === filter ))
})

app.listen(4000, (req, res) => {
    console.log('App listening on port 4000')
})