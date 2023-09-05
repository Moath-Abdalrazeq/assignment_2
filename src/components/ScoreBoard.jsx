import { useState } from "react";
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });
  function handlePlusClick() {
    //using setPlayer to update the score
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }
  function handleLastNameChange(e) {
    //use the spread operator to copy the current state and only update the lastName field
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }
  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
