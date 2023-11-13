import React, { useContext } from "react";
import { CreateQuiz } from "../../../Context";
import { QuestionsData } from "../../../QuestionsData";
import ErrorValueCheck from "../../ErrorValueCheck/ErrorValueCheck";
import CheckButton from "../../CheckButton/CheckButton";

const FreeChoice = () => {
  // Getting Data from the Context
  const {
    isCompleted,
    handleValueClick,
    errorValue,
    value,
    setValue,
    currentQuestion,
  } = useContext(CreateQuiz);

  return (
    <>
      {QuestionsData[currentQuestion].type === "Free Choice / Free Answer" && (
        <>
          <div className="free-choice">
            {/* Current Question */}
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <div className="text-input">
              <label htmlFor="text">
                <h3>Answer : </h3>
              </label>
              <input
                type="number"
                id="text"
                autoComplete="off"
                value={value}
                disabled={errorValue}
                onChange={(e) => setValue(e.target.value)}
                className={`option-button 
                        `}
              />
              {/* Button Checks if the answer of current question is right or wrong */}
              <button
                onClick={handleValueClick}
                className={`blank-button ${
                  isCompleted === true && "value-disabled"
                }`}
              >
                Click Here
              </button>
              <ErrorValueCheck />
            </div>
          </div>
          <CheckButton />
        </>
      )}
    </>
  );
};

export default FreeChoice;
