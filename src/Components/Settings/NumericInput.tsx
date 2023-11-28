import "./numericInput.scss";
import { forwardRef } from "react";
import { TabName } from "../Tabs";

interface NumericInputProps {
  label: TabName;
  defaultValue: number;
}
export type Ref = HTMLInputElement;

export const NumericInput = forwardRef<Ref, NumericInputProps>((props, ref) => {
  const { label, defaultValue } = props;
  return (
    <label>
      {label}
      <input
        className="numeric-input"
        type="number"
        defaultValue={defaultValue}
        ref={ref}
        name={label}
      />
    </label>
  );
});
