import { combineReducers } from 'redux';
import { EnthusiasmState, enthusiasm } from '@shared/enthusiasm/reducer';

export interface StoreState {
  enthusiasm: EnthusiasmState;
}

const reducers = combineReducers<StoreState>({
  enthusiasm
});

export default reducers;
