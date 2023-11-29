import { atom } from "recoil";
import { AccentColor } from "../../Components/Settings/types";

export const appAccentColor = atom<AccentColor>({
  key: "appAccentColor",
  default: "coral",
});
