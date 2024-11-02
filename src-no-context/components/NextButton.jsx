function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  console.log(numQuestions);
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "end" })}>
        Finish
      </button>
    );
  }
}

export default NextButton;
