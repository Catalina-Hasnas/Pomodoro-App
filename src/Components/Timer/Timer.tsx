import { useRecoilValue } from "recoil";
import { activeTabTimeSelector } from "../../recoil/selectors/activeTabTime";
import { useMemo, useState } from "react";

export const Timer = () => {
  const activeTabTime = useRecoilValue(activeTabTimeSelector);

  const [seconds, setSeconds] = useState(activeTabTime);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
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
    <div>
      <h2>Time remaining: {timeRemaining}</h2>
      <button onClick={handleClick}>
        {intervalId ? "Pause countdown" : "Start countdown"}
      </button>
    </div>
  );
};