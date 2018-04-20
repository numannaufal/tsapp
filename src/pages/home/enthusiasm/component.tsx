import * as React from 'react';
import { EnthusiasmProps } from '@utils/enthusiasm/types';
import './style.css';

const Enthusiasm: React.StatelessComponent<EnthusiasmProps> = (props: EnthusiasmProps): JSX.Element => {
  const { enthusiasmLevel = 1, name, onDecrement, onIncrement, onIncrementAsync } = props;
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onIncrementAsync}>async +</button>
      </div>
    </div>
  );
};

export default Enthusiasm;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}