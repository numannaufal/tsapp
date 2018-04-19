import { applyMiddleware, createStore, Reducer, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

type Saga = () => Iterator<{}>;

export default class ReduxSagaHelper<State> {
  private sagaMiddleware: SagaMiddleware<object>; 
  private reducers: Reducer<State>;
  private store: Store<State>;
  private sagas: Saga;

  public setReducers(reducers: Reducer<State>): ReduxSagaHelper<State> {
    this.reducers = reducers;
    return this;
  }

  public setSagas(sagas: Saga): ReduxSagaHelper<State> {
    this.sagas = sagas;
    return this;
  }

  public setReduxSaga(): ReduxSagaHelper<State> {
    this.sagaMiddleware = createSagaMiddleware();
    this.store = createStore<State>(this.reducers, applyMiddleware(this.sagaMiddleware));
    return this;
  }

  public run(): ReduxSagaHelper<State> {
    this.sagaMiddleware.run(this.sagas);
    return this;
  }

  public getStore(): Store<State> {
    return this.store;
  }
}