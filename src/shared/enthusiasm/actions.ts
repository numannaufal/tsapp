import * as c from './constants';

export interface DecrementEnthusiasm { type: c.DECREMENT_ENTHUSIASM; }
export interface IncrementEnthusiasm { type: c.INCREMENT_ENTHUSIASM; } 
export interface IncrementAsyncEnthusiasm { type: c.INCREMENT_ASYNC_ENTHUSIASM; }

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | IncrementAsyncEnthusiasm;

export const decrementEnthusiasm = (): DecrementEnthusiasm => ({ type: c.DECREMENT_ENTHUSIASM });
export const incrementEnthusiasm = (): IncrementEnthusiasm => ({ type: c.INCREMENT_ENTHUSIASM });
export const incrementAsyncEnthusiasm = (): IncrementAsyncEnthusiasm => ({ type: c.INCREMENT_ASYNC_ENTHUSIASM });
