import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  longBreakSecondsAtom,
  pomodoroSecondsAtom,
  shortBreakSecondsAtom,
} from "../../recoil/atoms/times";
import SettingsIcon from "../../assets/icon-settings.svg?react";
import CloseIcon from "../../assets/icon-close.svg?react";

import "./settings.scss";
import { NumericInput } from "./NumericInput";

export const Settings = () => {
  const [open, setOpen] = useState(false);

  const [pomodoroSeconds, setPomodoroSeconds] =
    useRecoilState(pomodoroSecondsAtom);
  const [shortBreakSeconds, setShortBreakSeconds] = useRecoilState(
    shortBreakSecondsAtom
  );
  const [longBreakSeconds, setLongBreakSeconds] =
    useRecoilState(longBreakSecondsAtom);

  const pomodoroRef = useRef<HTMLInputElement>(null);
  const shortBreakRef = useRef<HTMLInputElement>(null);
  const longBreakRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    pomodoroRef.current &&
      setPomodoroSeconds(parseInt(pomodoroRef.current.value) * 60);
    shortBreakRef.current &&
      setShortBreakSeconds(parseInt(shortBreakRef.current.value) * 60);
    longBreakRef.current &&
      setLongBreakSeconds(parseInt(longBreakRef.current.value) * 60);
    setOpen(false);
  };

  const onIncrement = () => {
    pomodoroRef.current && pomodoroRef.current.stepUp();
  };

  return (
    <>
      <dialog open={open} id="favDialog">
        <header>
          <h2> Settings</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            aria-label="cancel"
          >
            <CloseIcon />
          </button>
        </header>
        <hr />
        <form method="dialog" onSubmit={onSubmit}>
          <h3>Time (minutes) </h3>
          <div className="time-container">
            <NumericInput
              defaultValue={pomodoroSeconds / 60}
              ref={pomodoroRef}
              label="pomodoro"
            />
            <NumericInput
              defaultValue={shortBreakSeconds / 60}
              ref={shortBreakRef}
              label="short break"
            />
            <NumericInput
              defaultValue={longBreakSeconds / 60}
              ref={longBreakRef}
              label="long break"
            />
          </div>
          <div>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </dialog>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen((prevState) => !prevState);
        }}
        id="showDialog"
        className="open-settings-button"
        aria-label="Open Settings"
      >
        <SettingsIcon />
      </button>
    </>
  );
};
