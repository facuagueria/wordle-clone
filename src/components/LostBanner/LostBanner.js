import React from "react";
import Banner from "../Banner";

function LostBanner({ answer, restartGame }) {
  return (
    <Banner status={"sad"}>
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </Banner>
  );
}

export default LostBanner;
