import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeEnded, setTimeEnded] = useState(false);
  const timer = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeEnded(true);
      setTimeStarted(false);
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimeStarted(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeEnded && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running..." : "Timer Inactive"}
      </p>
    </section>
  );
}
