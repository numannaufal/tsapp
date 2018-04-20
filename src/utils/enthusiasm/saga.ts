import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

export function* incrementAsync(): Generator {
  yield delay(1000);
  yield put(actions.incrementEnthusiasm());
}

export function* watchIncrementAsync(): Generator {
  yield takeEvery(actions.incrementAsyncEnthusiasm().type, incrementAsync);
}