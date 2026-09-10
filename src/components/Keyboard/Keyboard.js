const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const STATUS_RANK = {
  incorrect: 1,
  misplaced: 2,
  correct: 3,
};

function getLetterStatuses(guessResults) {
  const letterStatuses = {};

  guessResults.forEach((guessResult) => {
    guessResult.forEach(({ letter, status }) => {
      const currentStatus = letterStatuses[letter];

      if (
        currentStatus === undefined ||
        STATUS_RANK[status] > STATUS_RANK[currentStatus]
      ) {
        letterStatuses[letter] = status;
      }
    });
  });

  return letterStatuses;
}

function Keyboard({ guessResults }) {
  const letterStatuses = getLetterStatuses(guessResults);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <div
              key={letter}
              className={`keyboard-key ${letterStatuses[letter] ?? ""}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
