import { selector } from "recoil";
import {
  pomodoroSecondsAtom,
  shortBreakSecondsAtom,
  longBreakSecondsAtom,
} from "../atoms/times";
import { activeTabAtom } from "../atoms/activeTab";

export const activeTabSecondsSelector = selector({
  key: "activeTabSeconds",
  get: ({ get }) => {
    const activeTab = get(activeTabAtom);
    const pomodoroSeconds = get(pomodoroSecondsAtom);
    const shortBreakSeconds = get(shortBreakSecondsAtom);
    const longBreakSeconds = get(longBreakSecondsAtom);

    const tabsNameSeconds = {
      pomodoro: pomodoroSeconds,
      "short break": shortBreakSeconds,
      "long break": longBreakSeconds,
    };

    return tabsNameSeconds[activeTab];
  },
});
