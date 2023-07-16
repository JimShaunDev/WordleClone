import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, setGameOver, currAttempt, correctWord } =
    useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessWord ? "You Win!" : "You didn't do so good"}</h3>
      <h1>The word was: {correctWord}</h1>
      {gameOver.guessWord && <h3>You guessed in {currAttempt.attempt}</h3>}
    </div>
  );
}

export default GameOver;
