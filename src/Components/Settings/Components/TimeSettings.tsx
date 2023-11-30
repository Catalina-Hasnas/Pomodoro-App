import "../settings.scss";

import { NumericInput } from "./NumericInput";

export const TimeSettings = ({
  pomodoroMinutes,
  shortBreakMinutes,
  longBreakMinutes,
}: {
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
}) => {
  return (
    <div
      className="time-section"
      role="group"
      aria-labelledby="time"
      data-name="time"
    >
      <h3 className="legend" id="time">
        Time (minutes)
      </h3>
      <div className="numeric-inputs-container">
        <NumericInput
          label="pomodoro"
          defaultValue={pomodoroMinutes}
          name="pomodoro"
        />
        <NumericInput
          label="short break"
          defaultValue={shortBreakMinutes}
          name="shortBreak"
        />
        <NumericInput
          label="long break"
          defaultValue={longBreakMinutes}
          name="longBreak"
        />
      </div>
    </div>
  );
};
