import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EnthusiasmPage from './home/enthusiasm/page';

const AppRouter: React.StatelessComponent<{}> = (): JSX.Element => {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact={true} path="/" render={() => <EnthusiasmPage />} />
            <Route render={() => <div>404</div>} />
          </Switch>
      </Router>
    </React.Fragment>
  );
};

export default AppRouter;
