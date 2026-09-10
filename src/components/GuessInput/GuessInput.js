import React from "react";

function GuessInput({ onGuessSubmit }) {
  const [guess, setGuess] = React.useState("");

  function handleInputSubmit() {
    onGuessSubmit(guess);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleInputSubmit();
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
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
