import "./numericInput.scss";
import { useRef, MouseEvent as Event } from "react";
import { TabName } from "../../Tabs";
import ArrowUpIcon from "../../../assets/icon-arrow-up.svg?react";
import ArrowDownIcon from "../../../assets/icon-arrow-down.svg?react";

interface NumericInputProps {
  label: TabName;
  name: string;
  defaultValue: number;
}

export const NumericInput = ({
  label,
  name,
  defaultValue,
}: NumericInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onIncrement = (event: Event<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current && inputRef.current.stepUp();
  };

  const onDecrement = (event: Event<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current && inputRef.current.stepDown();
  };

  return (
    <label className="numeric-input-container">
      {label}
      <div className="numeric-input">
        <input
          type="number"
          defaultValue={defaultValue}
          ref={inputRef}
          name={name}
          id={name}
        />
        <div className="arrows">
          <button
            aria-label={`increment ${label} minutes by one`}
            onClick={(e) => onIncrement(e)}
          >
            <ArrowUpIcon />
          </button>
          <button
            aria-label={`decrement ${label} minutes by one`}
            onClick={(e) => onDecrement(e)}
          >
            <ArrowDownIcon />
          </button>
        </div>
      </div>
    </label>
  );
};
