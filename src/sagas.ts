import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from '@shared/enthusiasm/saga';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ]);
}