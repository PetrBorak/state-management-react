const initialStateTodos = {
    data: [],
    loading: false,
    error: false
}

export const todosReducer = (state = initialStateTodos, action) => {
    switch(action.type){
        case 'FETCH_PENDING':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return { data: action.payload, loading: false}
        case 'FETCH_ERROR':
            return {...state, error: true}
        default:
            return state;
    }
}