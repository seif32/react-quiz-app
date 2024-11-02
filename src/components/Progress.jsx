import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, index, answer, points, maxPoints } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question: {index + 1}/{numQuestions}
      </p>
      <p>
        <strong>{points} </strong>/ {maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
