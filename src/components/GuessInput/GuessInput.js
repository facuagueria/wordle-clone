import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, statusGame }) {
  const [word, setWord] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (word.length !== 5) {
      alert("The input should have a minimum and maximum length of 5.");
      return;
    }
    handleSubmitGuess(word);
    setWord("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          value={word}
          onChange={(event) => setWord(event.target.value.toUpperCase())}
          id="guess-input"
          type="text"
          disabled={statusGame !== "running"}
        />
      </form>
    </>
  );
}

export default GuessInput;
