export const todosActionCreatorFetchSuccess = (payload) => ({
    type: 'FETCH_SUCCESS',
    payload: payload
})

export const todosActionCreatorFetchError = () => ({
    type: 'FETCH_ERROR',
})

export const todosActionCreatorFetchPending = () => ({
    type: 'FETCH_PENDING',
})