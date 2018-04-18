import { combineReducers } from 'redux';
import { enthusiasm } from './pages/home/hello/utils/reducer';
import { EnthusiasmState } from './pages/home/hello/utils/reducer';

export interface StoreState {
  enthusiasm: EnthusiasmState;
}

const reducers = combineReducers<StoreState >({
  enthusiasm
});

export default reducers;
