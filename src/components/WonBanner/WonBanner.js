import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart Game">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
