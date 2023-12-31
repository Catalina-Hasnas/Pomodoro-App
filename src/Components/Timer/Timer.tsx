import { useRecoilValue } from "recoil";
import { activeTabSecondsSelector } from "../../recoil/selectors/activeTabTime";
import { useEffect, useMemo, useState } from "react";
import "./timer.scss";
import { CircularProgress } from "./CircularProgress";

const audio = new Audio("timesup.mp3");

export const Timer = () => {
  const activeTabSeconds = useRecoilValue(activeTabSecondsSelector);

  const [seconds, setSeconds] = useState(300);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    setSeconds(activeTabSeconds);
  }, [activeTabSeconds]);

  const handleClick = () => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      if (seconds === 0) {
        setSeconds(activeTabSeconds);
      } else {
        return;
      }
    }

    const newIntervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          audio.play();
          new Notification("Time's up!");
        }
        return prevSeconds > 0 ? prevSeconds - 1 : 0;
      });
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const timeRemaining = useMemo(() => {
    const minutesDisplay = Math.floor(seconds / 60);
    const secondsDisplay = seconds % 60;
    return `${minutesDisplay.toString().padStart(2, "0")}:${secondsDisplay
      .toString()
      .padStart(2, "0")}`;
  }, [seconds]);

  return (
    <div className="timer">
      <div className="timer-inner-circle">
        <CircularProgress percent={(seconds / activeTabSeconds) * 100} />
        <div className="timer-text absolute-centering">
          <h2 className="timer-display">{timeRemaining}</h2>
          <button className="timer-button" onClick={handleClick}>
            {!intervalId ? "START" : seconds === 0 ? "RESTART" : "PAUSE"}
          </button>
        </div>
      </div>
    </div>
  );
};
