import * as React from 'react';
import './style.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
  onIncrementAsync?: () => void;
}

function Hello({ enthusiasmLevel = 1, name, onDecrement, onIncrement, onIncrementAsync }: Props) {
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
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}