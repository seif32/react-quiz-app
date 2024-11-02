import Options from "./Options";

function Quiz({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options dispatch={dispatch} question={question} answer={answer} />
    </div>
  );
}

export default Quiz;
