import { AccentColor } from "../types";
import { RadioInput } from "./RadioInput";

export const ColorSettings = ({
  accentColor,
}: {
  accentColor: AccentColor;
}) => {
  return (
    <fieldset name="color">
      <legend>Color</legend>
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
    </fieldset>
  );
};
