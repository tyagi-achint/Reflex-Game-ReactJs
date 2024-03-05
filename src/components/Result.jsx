import { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";

const Result = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formatRemaningTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The Target Time was <strong> {targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with{" "}
        <strong>{formatRemaningTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
