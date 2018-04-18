import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreState } from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import AppRouter from './pages/appRouter';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore<StoreState>(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);