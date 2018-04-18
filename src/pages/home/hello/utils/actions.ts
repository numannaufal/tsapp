import * as constants from './constants';

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface IncrementAsyncEnthusiasm {
  type: constants.INCREMENT_ASYNC_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function incrementAsyncEnthusiasm(): IncrementAsyncEnthusiasm {
  return {
    type: constants.INCREMENT_ASYNC_ENTHUSIASM
  };
}