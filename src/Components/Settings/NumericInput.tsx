import { ReactNode, forwardRef } from "react";
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
      <input type="number" defaultValue={defaultValue} ref={ref} />
    </label>
  );
});
