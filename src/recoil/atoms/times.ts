import { atom } from "recoil";

export const pomodoroSecondsAtom = atom({
  key: "pomodoroTime",
  default: 300,
});

export const shortBreakSecondsAtom = atom({
  key: "shortBreakTime",
  default: 60,
});

export const longBreakSecondsAtom = atom({
  key: "longBreakTime",
  default: 120,
});
