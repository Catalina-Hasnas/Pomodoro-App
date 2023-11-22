import { selector } from "recoil";
import {
  pomodoroTimeAtom,
  shortBreakTimeAtom,
  longBreakTimeAtom,
} from "../atoms/times";
import { activeTabAtom } from "../atoms/activeTab";

export const activeTabTimeSelector = selector({
  key: "activeTabTime",
  get: ({ get }) => {
    const activeTab = get(activeTabAtom);
    const pomodoroTime = get(pomodoroTimeAtom);
    const shortBreakTime = get(shortBreakTimeAtom);
    const longBreakTime = get(longBreakTimeAtom);

    const tabsNameTime = {
      pomodoro: pomodoroTime,
      "short break": shortBreakTime,
      "long break": longBreakTime,
    };

    return tabsNameTime[activeTab];
  },
});
