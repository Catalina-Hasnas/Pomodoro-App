import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  longBreakSecondsAtom,
  pomodoroSecondsAtom,
  shortBreakSecondsAtom,
} from "../../recoil/atoms/times";
import SettingsIcon from "../../assets/icon-settings.svg?react";
import "./settings.scss";
import CloseIcon from "../../assets/icon-close.svg?react";
import { NumericInput } from "./NumericInput";
import { appFont } from "../../recoil/atoms/appFont";

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

  // const pomodoroRef = useRef<HTMLInputElement>(null);
  // const shortBreakRef = useRef<HTMLInputElement>(null);
  // const longBreakRef = useRef<HTMLInputElement>(null);

  // const fontKumbhRef = useRef<HTMLInputElement>(null);
  // const fontRobotoRef = useRef<HTMLInputElement>(null);
  // const fontSpaceRef = useRef<HTMLInputElement>(null);

  // const fieldsetRef = useRef<HTMLFieldSetElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const mapFieldNameToStateSetter = {
    pomodoro: setPomodoroSeconds,
    shortBreak: setShortBreakSeconds,
    longBreak: setLongBreakSeconds,
    font: setFont,
  };

  const onSubmit = () => {
    const formValues = formRef.current && new FormData(formRef.current);
    for (const [key, value] of formValues ?? []) {
      console.log({ [key]: value });
      mapFieldNameToStateSetter[key](value);
    }
    // pomodoroRef.current &&
    //   setPomodoroSeconds(parseInt(pomodoroRef.current.value) * 60);
    // shortBreakRef.current &&
    //   setShortBreakSeconds(parseInt(shortBreakRef.current.value) * 60);
    // longBreakRef.current &&
    //   setLongBreakSeconds(parseInt(longBreakRef.current.value) * 60);

    // fontKumbhRef.current?.checked && setFont("Kumbh Sans");
    // fontRobotoRef.current?.checked && setFont("Roboto Slab");
    // fontSpaceRef.current?.checked && setFont("Space Mono");

    // console.log(fontKumbhRef.current?.checked);
    // console.log(fontRobotoRef.current?.checked);
    // console.log(fontSpaceRef.current?.checked);

    // console.log(fieldsetRef.current);

    setOpen(false);
  };

  // const onIncrement = () => {
  //   pomodoroRef.current && pomodoroRef.current.stepUp();
  // };

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
          <fieldset name="time">
            <legend>Time (minutes)</legend>
            <div className="time-container">
              <label>
                pomodoro
                <input
                  className="numeric-input"
                  type="number"
                  defaultValue={pomodoroSeconds / 60}
                  name="pomodoro"
                />
              </label>
              <label>
                short break
                <input
                  className="numeric-input"
                  type="number"
                  defaultValue={shortBreakSeconds / 60}
                  name="shortBreak"
                />
              </label>
              <label>
                long break
                <input
                  className="numeric-input"
                  type="number"
                  defaultValue={longBreakSeconds / 60}
                  name="longBreak"
                />
              </label>
              {/* <NumericInput
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
              /> */}
            </div>
          </fieldset>
          <hr />

          <fieldset>
            <legend>Font</legend>
            <input
              // ref={fontKumbhRef}
              type="radio"
              id="kumbh"
              name="font"
              value="Kumbh Sans"
              defaultChecked={font === "Kumbh Sans"}
            />
            <label htmlFor="kumbh">Kumbh Sans</label>
            <br />
            <input
              // ref={fontRobotoRef}
              type="radio"
              id="roboto"
              name="font"
              value="Roboto Slab"
              defaultChecked={font === "Roboto Slab"}
            />
            <label htmlFor="roboto">Roboto Slab</label>
            <br />
            <input
              // ref={fontSpaceRef}
              type="radio"
              id="space"
              name="font"
              value="Space Mono"
              defaultChecked={font === "Space Mono"}
            />
            <label htmlFor="space">Space Mono</label>
          </fieldset>

          <div>
            <button type="submit">Apply</button>
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
