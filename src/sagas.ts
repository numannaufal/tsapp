import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './pages/home/hello/utils/saga';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ]);
}