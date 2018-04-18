import { connect, Dispatch } from 'react-redux';
import * as actions from './utils/actions';
import Hello from './component';
import { StoreState } from '../../../reducers';

export function mapStateToProps({ enthusiasm: { enthusiasmLevel, languageName } }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onIncrementAsync: () => dispatch(actions.incrementAsyncEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
