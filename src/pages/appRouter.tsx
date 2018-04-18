import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './home/hello/container';

const AppRouter: React.StatelessComponent<{}> = (): JSX.Element => {
  const hello = () => <Hello />;
  const notFoundPage = () => <div>404</div>;
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact={true} path="/" render={hello} />
            <Route render={notFoundPage} />
          </Switch>
      </Router>
    </React.Fragment>
  );
};

export default AppRouter;
