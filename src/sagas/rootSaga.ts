import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counterSaga';
import { getCatFactWatcher } from './catFactsSagas';

// single entry point to start all Sagas at once
export function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    getCatFactWatcher(),
  ])
}
