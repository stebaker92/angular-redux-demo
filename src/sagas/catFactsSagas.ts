import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CatFactsActions } from 'src/app/actions/cat-facts-actions';

function* fetchFact() {
  try {
    const response = yield call(fetch, 'https://catfact.ninja/fact');
    const responseData = yield response.json();
    yield put({ type: CatFactsActions.CAT_FETCH_SUCCEEDED, data: responseData.fact });
  } catch (e) {
    yield put({ type: CatFactsActions.CAT_FETCH_FAILED, data: e.message });
  }
}

// Take the latest action, ignore previous pending requests
export function* getCatFactWatcher() {
  yield takeLatest(CatFactsActions.CAT_FETCH_REQUESTED, fetchFact);
}
