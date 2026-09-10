import { range } from "../../utils";

function Guess({ guessResult }) {
  return (
    <p className="guess">
      {range(5).map((i) =>
        guessResult != null ? (
          <span key={i} className={`cell ${guessResult[i].status}`}>
            {guessResult[i].letter}
          </span>
        ) : (
          <span key={i} className="cell"></span>
        ),
      )}
    </p>
  );
}

export default Guess;
