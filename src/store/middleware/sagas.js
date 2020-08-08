import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchTodos } from "../../backend/backend";
import { todosActionCreatorFetchSuccess, todosActionCreatorFetchPending} from '../todos/todosActions'

export function* fetchTodosSaga(action) {
    yield put(todosActionCreatorFetchPending());
    const result = yield call(fetchTodos, action.payload)
    yield put(todosActionCreatorFetchSuccess(result));
}

export function* watchFetchTodos() {
    yield takeEvery('FETCH_TODOS', fetchTodosSaga)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield watchFetchTodos()
}