import React from "react";

function GuessInput({ onGuessSubmit }) {
  const [guess, setGuess] = React.useState("");

  function handleInputSubmit(event) {
    event.preventDefault();
    onGuessSubmit(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleInputSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
