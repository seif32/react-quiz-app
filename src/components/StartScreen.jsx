import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "quiz" })}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
