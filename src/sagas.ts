import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from '@utils/enthusiasm/saga';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ]);
}