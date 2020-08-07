const initialStateTodos = {
    todos: []
}

export const todosReducer = (state = initialStateTodos, action) => {
    switch(action.type){
        case 'FETCH_PENDING':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, todos: action.payload}
        case 'FETCH_ERROR':
            return {...state, error: true}
        default:
            return state;
    }
}