import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState();
  function handleClick() {
    setPlayer(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {player ?? ""}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
