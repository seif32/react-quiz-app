import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();

  const perc = (points / maxPoints) * 100;
  let emoji;
  if (perc === 100) emoji = "💯";
  if (perc > 80 && perc < 100) emoji = "🎉";
  if (perc > 50 && perc < 80) emoji = "⭐";
  if (perc > 0 && perc < 50) emoji = "👎";
  if (perc === 0) emoji = "🙅‍♂️";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points} </strong>
        out of {maxPoints} ({Math.trunc(perc)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
