import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { StoreState } from '@src/reducers';
import AppRouter from './appRouter';

export interface AppProps {
  store: Store<StoreState>;
}

const App: React.StatelessComponent<AppProps> = ({ store }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
