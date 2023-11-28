import { atom } from "recoil";
import { AccentColor } from "../../Components/Settings/types";

export const appFont = atom<AccentColor>({
  key: "appAccentColor",
  default: "coral",
});
