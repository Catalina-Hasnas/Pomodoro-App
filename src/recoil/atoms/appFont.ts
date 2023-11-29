import { atom } from "recoil";
import { Font } from "../../Components/Settings/types";

export const appFont = atom<Font>({
  key: "appFont",
  default: "kumbh",
});
