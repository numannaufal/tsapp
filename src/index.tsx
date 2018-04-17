import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Hello from './containers/Hello';
import { enthusiasm } from './reducers/index';
import rootSaga from './sagas';
import { IStoreState } from './types/index';

import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore<IStoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);