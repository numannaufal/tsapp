export interface EnthusiasmProps {
  name: string;
  enthusiasmLevel?: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
  onIncrementAsync?: () => void;
}

export interface EnthusiasmShellProps extends EnthusiasmProps {
  render: (props: EnthusiasmProps) => JSX.Element;
}