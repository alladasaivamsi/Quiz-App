import React, { useContext } from "react";
import { CreateQuiz } from "../../Context";
import { QuestionsData } from "../../QuestionsData";
import "./NextButton.css";

const NextButton = () => {
  // Getting Data from the Context
  const { nextQuestion, currentQuestion } = useContext(CreateQuiz);

  return (
    <>
      {/* button to change to next question */}
      <button
        className={`${
          currentQuestion !== QuestionsData.length - 1
            ? "rightArrow"
            : "removeNextBtn"
        }`}
        onClick={nextQuestion}
      >
        Next
      </button>
    </>
  );
};

export default NextButton;
