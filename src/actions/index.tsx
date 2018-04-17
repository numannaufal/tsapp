import * as constants from '../constants'

export interface IDecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
      type: constants.DECREMENT_ENTHUSIASM
  }
}

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

