import { Font } from "../types";
import { RadioInput } from "./RadioInput";

export const FontSettings = ({ font }: { font: Font }) => {
  return (
    <fieldset name="font">
      <legend>Font</legend>
      <RadioInput defaultChecked={font === "kumbh"} name="font" value="kumbh" />
      <RadioInput
        defaultChecked={font === "roboto"}
        name="font"
        value="roboto"
      />
      <RadioInput defaultChecked={font === "space"} name="font" value="space" />
    </fieldset>
  );
};
