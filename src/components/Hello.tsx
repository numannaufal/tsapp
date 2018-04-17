import * as React from 'react';
import './Hello.css';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
}

function Hello({ enthusiasmLevel = 1, name, onDecrement, onIncrement }: IProps) {
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
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}