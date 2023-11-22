import { atom } from "recoil";

export const pomodoroTimeAtom = atom({
  key: "pomodoroTime",
  default: 300,
});

export const shortBreakTimeAtom = atom({
  key: "shortBreakTime",
  default: 60,
});

export const longBreakTimeAtom = atom({
  key: "longBreakTime",
  default: 120,
});
