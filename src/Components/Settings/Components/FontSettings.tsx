import { Font } from "../types";
import { RadioInput } from "./RadioInput";

export const FontSettings = ({ font }: { font: Font }) => {
  return (
    <div
      role="group"
      aria-labelledby="font"
      data-name="font"
      className="font-section"
    >
      <h3 className="legend" id="font">
        Font
      </h3>
      <div className="inputs-container">
        <RadioInput
          defaultChecked={font === "kumbh"}
          name="font"
          value="kumbh"
        />
        <RadioInput
          defaultChecked={font === "roboto"}
          name="font"
          value="roboto"
        />
        <RadioInput
          defaultChecked={font === "space"}
          name="font"
          value="space"
        />
      </div>
    </div>
  );
};
