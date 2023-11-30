import { AccentColor } from "../types";
import { RadioInput } from "./RadioInput";

export const ColorSettings = ({
  accentColor,
}: {
  accentColor: AccentColor;
}) => {
  return (
    <div
      role="group"
      aria-labelledby="color"
      data-name="color"
      className="color-section"
    >
      <h3 className="legend" id="color">
        Color
      </h3>
      <div className="inputs-container">
        <RadioInput
          defaultChecked={accentColor === "coral"}
          name="color"
          value="coral"
        />
        <RadioInput
          defaultChecked={accentColor === "cyan"}
          name="color"
          value="cyan"
        />
        <RadioInput
          defaultChecked={accentColor === "lilac"}
          name="color"
          value="lilac"
        />
      </div>
    </div>
  );
};
