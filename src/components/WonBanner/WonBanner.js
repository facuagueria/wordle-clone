import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses, restartGame }) {
  return (
    <Banner status={"happy"}>
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {numOfGuesses === 1 ? " 1 guess" : ` ${numOfGuesses} guesses`}{" "}
          </strong>
          .
        </p>
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </Banner>
  );
}

export default WonBanner;
