import { put, takeEvery, delay } from 'redux-saga/effects'
import { CounterActions } from 'src/app/actions/counter-actions'

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(500)
  yield put({ type: CounterActions.INCREMENT })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
