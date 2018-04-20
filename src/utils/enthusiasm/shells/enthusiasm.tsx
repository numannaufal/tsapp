import * as React from 'react';
import * as actions from '@utils/enthusiasm/actions';
import { EnthusiasmProps, EnthusiasmShellProps } from '../types';
import { StoreState } from '@src/reducers';
import { connect, Dispatch } from 'react-redux';

interface EnthusiasmLocalState {}

class EnthusiasmShell extends React.Component<EnthusiasmShellProps> {
  constructor(props: EnthusiasmShellProps) {
    super(props);
    // local state if needed
    const state: EnthusiasmLocalState = {};
    this.state = state;
  }

  componentDidMount() {
    // ?( fetch data | binding event listener )
  }

  componentWillUnmount() {
    // ?unbinding event listener
  }

  shouldComponentUpdate(nextProps: EnthusiasmShellProps, nextState: EnthusiasmLocalState) {
   // ?optimize rerender 
   return true;
  }

  componentWillReceiveProps() {
    // ?action after wait for updated props
  }

  render() {
    return this.props.render(this.props);
  }
}

const mapStateToProps = ({ enthusiasm: { enthusiasmLevel, languageName } }: StoreState) => {
  return {
    enthusiasmLevel,
    name: languageName,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onIncrementAsync: () => dispatch(actions.incrementAsyncEnthusiasm()),
  };
};

export default connect<EnthusiasmProps>(mapStateToProps, mapDispatchToProps)(EnthusiasmShell);