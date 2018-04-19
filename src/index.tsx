import * as React from 'react';
import { Store } from 'react-redux';
import { StoreState } from './reducers';
import AppHelper from './pages/appHelper';
import App from './pages/app';
import './index.css';

AppHelper
.getInstance()
.useReduxSaga()
.htmlId('root')
.render((store: Store<StoreState>) => <App store={store} />);