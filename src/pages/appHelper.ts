import { Store } from 'react-redux';
import ReactApp from '../utils/react/app';
import ReduxSagaHelper from '../utils/react/reduxSagaHelper';
import reducers, { StoreState } from '../reducers';
import rootSaga from '../sagas';

export default class AppHelper extends ReactApp {
  protected static instance: AppHelper;
  private reduxSagaHelper: ReduxSagaHelper<StoreState>;

  public static getInstance(): AppHelper {
    if (this.instance === undefined) {
      this.instance = new AppHelper();
    }
    return this.instance;
  }

  public useReduxSaga(): AppHelper {
    this.reduxSagaHelper = new ReduxSagaHelper<StoreState>()
      .setReducers(reducers)
      .setSagas(rootSaga)
      .setReduxSaga()
      .run();

    return this;
  }

  public render(props: Function): void {
    const store: Store<StoreState> = this.reduxSagaHelper.getStore();
    this.reactComponent = props(store);
    super.render();
  }
}