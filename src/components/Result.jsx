import { forwardRef } from "react";

const Result = forwardRef(({ targetTime, result }, ref) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The Target Time was <strong> {targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
