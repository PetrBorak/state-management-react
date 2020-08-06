let Todos = {}
export const fetchTodos = (params) => fetch(`http://localhost:4000/todos${params ? '?filter=' + params : ''}`).then((result) => result.json());