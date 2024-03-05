import { useRef, useState } from "react";
import Result from "./Result.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeEnded, setTimeEnded] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeEnded(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <Result ref={dialog} targetTime={targetTime} result="lost!" />
      <section className="challenge">
        <h2>{title}</h2>

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
      </section>{" "}
    </>
  );
}
