import { delay } from 'redux-saga'
import { all, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/'

export function* incrementAsync() {
  yield delay(1000)
  yield put(actions.incrementEnthusiasm())
}

export function* watchIncrementAsync() {
  yield takeEvery(actions.incrementAsyncEnthusiasm().type, incrementAsync)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}