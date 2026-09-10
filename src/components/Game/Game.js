import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED, GAME_STATE } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameState, setGameState] = React.useState(GAME_STATE.ONGOING);

  function handleGuessSubmit(guess) {
    const guessResult = checkGuess(guess, answer);
    const nextGuessResults = [...guessResults, guessResult];

    setGuessResults(nextGuessResults);

    if (guessResult.every((result) => result.status === "correct")) {
      setGameState(GAME_STATE.WON);
      return;
    }

    if (nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState(GAME_STATE.LOST);
      return;
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        onGuessSubmit={handleGuessSubmit}
        disabled={gameState !== GAME_STATE.ONGOING}
      />
      {gameState === GAME_STATE.WON && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessResults.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameState === GAME_STATE.LOST && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
