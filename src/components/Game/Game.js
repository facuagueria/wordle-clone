import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [userGuesses, setUserGuesses] = useState([]);
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [statusGame, setStatusGame] = useState("running");
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  function handleSubmitGuess(guess) {
    const nextUserGuesses = [...userGuesses, guess];
    setUserGuesses(nextUserGuesses);
    setNumOfGuesses(numOfGuesses + 1);
    calculateStatusGame(guess);
  }

  function calculateStatusGame(guess) {
    if (guess === answer) {
      setStatusGame("won");
    }
    if (guess !== answer && numOfGuesses === NUM_OF_GUESSES_ALLOWED - 1) {
      setStatusGame("lost");
    }
  }

  function restartGame() {
    setStatusGame("running");
    setNumOfGuesses(0);
    setUserGuesses([]);
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
  }

  const validatedGuesses = userGuesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      {statusGame === "won" && (
        <WonBanner numOfGuesses={numOfGuesses} restartGame={restartGame} />
      )}
      {statusGame === "lost" && (
        <LostBanner answer={answer} restartGame={restartGame} />
      )}
      <GuessResults validatedGuesses={validatedGuesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        statusGame={statusGame}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
