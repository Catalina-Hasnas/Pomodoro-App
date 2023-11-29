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
    <fieldset name="time">
      <legend>Time (minutes)</legend>
      <div className="time-container">
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
    </fieldset>
  );
};
