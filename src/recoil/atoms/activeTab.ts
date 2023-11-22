import { atom } from "recoil";
import { TabName } from "../../Components/Tabs";

export const activeTabAtom = atom<TabName>({
  key: "activeTab",
  default: "pomodoro",
});
