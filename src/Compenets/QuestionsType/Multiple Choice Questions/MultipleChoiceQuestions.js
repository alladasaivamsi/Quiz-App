import React, { useContext } from "react";
import { CreateQuiz } from "../../../Context";
import { QuestionsData } from "../../../QuestionsData";
import CheckButton from "../../CheckButton/CheckButton";

const MultipleChoiceQuestions = () => {
  // Getting Data from the Context
  const { handleCheck, currentQuestion, clickedOption } =
    useContext(CreateQuiz);

  // checks if the option clicked is right or wrong , if right added the classname to change the color of clicked button
  const handleSelect = (i) => {
    if (
      clickedOption === i &&
      QuestionsData[currentQuestion].answer === clickedOption
    ) {
      return "right";
    } else if (
      clickedOption === i &&
      QuestionsData[currentQuestion].answer !== clickedOption
    ) {
      return "wrong";
    }
  };

  return (
    <>
      {QuestionsData[currentQuestion].type === "Multiple Choice Questions" && (
        <>
          <div className="quiz-body">
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <div className="answer-section">
              {QuestionsData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    key={i}
                    value={option}
                    disabled={clickedOption}
                    onClick={() => handleCheck(i)}
                    className={`option-button 
                      ${handleSelect(i + 1)}
                      `}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
          <CheckButton />
        </>
      )}
    </>
  );
};

export default MultipleChoiceQuestions;
