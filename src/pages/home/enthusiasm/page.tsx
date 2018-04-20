import * as React from 'react';
import EnthusiasmShell from '@shared/enthusiasm/shells/enthusiasm';
import Enthusiasm from './component';

export default class EnthusiasmPage extends React.Component<{}> {
  render() {
    return (
      <EnthusiasmShell render={props => <Enthusiasm {...props} />} />
      /** might be another shell - component */
    );
  }
}
