import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {range(6).map((i) => (
        <Guess key={i} guessResult={guessResults[i]} />
      ))}
    </div>
  );
}

export default GuessResults;
