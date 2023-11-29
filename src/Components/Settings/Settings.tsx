import "./settings.scss";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  longBreakSecondsAtom,
  pomodoroSecondsAtom,
  shortBreakSecondsAtom,
} from "../../recoil/atoms/times";
import SettingsIcon from "../../assets/icon-settings.svg?react";
import CloseIcon from "../../assets/icon-close.svg?react";
import { appFont } from "../../recoil/atoms/appFont";
import { AccentColor, Font } from "./types";
import { appAccentColor } from "../../recoil/atoms/appAccentColor";
import { TimeSettings } from "./Components/TimeSettings";
import { FontSettings } from "./Components/FontSettings";
import { ColorSettings } from "./Components/ColorSettings";

export const Settings = () => {
  const [open, setOpen] = useState(false);

  const [pomodoroSeconds, setPomodoroSeconds] =
    useRecoilState(pomodoroSecondsAtom);
  const [shortBreakSeconds, setShortBreakSeconds] = useRecoilState(
    shortBreakSecondsAtom
  );
  const [longBreakSeconds, setLongBreakSeconds] =
    useRecoilState(longBreakSecondsAtom);

  const [font, setFont] = useRecoilState(appFont);

  const [accentColor, setAccentColor] = useRecoilState(appAccentColor);

  const formRef = useRef<HTMLFormElement>(null);

  const mapFieldNameToStateSetter: Record<string, (value: string) => void> = {
    pomodoro: (value) => setPomodoroSeconds(parseInt(value) * 60),
    shortBreak: (value) => setShortBreakSeconds(parseInt(value) * 60),
    longBreak: (value) => setLongBreakSeconds(parseInt(value) * 60),
    font: (value) => setFont(value as Font),
    color: (value) => setAccentColor(value as AccentColor),
  };

  const onSubmit = () => {
    const formValues = formRef.current && new FormData(formRef.current);
    if (formValues) {
      for (const [key, value] of formValues) {
        mapFieldNameToStateSetter[key](value as string);
      }
    }

    setOpen(false);
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
        <form ref={formRef} method="dialog" onSubmit={onSubmit}>
          <TimeSettings
            pomodoroMinutes={pomodoroSeconds / 60}
            shortBreakMinutes={shortBreakSeconds / 60}
            longBreakMinutes={longBreakSeconds / 60}
          />
          <FontSettings font={font} />
          <ColorSettings accentColor={accentColor} />
          <button type="submit">Apply</button>
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
