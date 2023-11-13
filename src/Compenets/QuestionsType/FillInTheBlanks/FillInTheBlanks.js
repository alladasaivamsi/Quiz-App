import React, { useContext } from "react";
import { CreateQuiz } from "../../../Context";
import { QuestionsData } from "../../../QuestionsData";
import ErrorValueCheck from "../../ErrorValueCheck/ErrorValueCheck";
import CheckButton from "../../CheckButton/CheckButton";

const FillInTheBlanks = () => {
  // Getting Data from the Context
  const {
    isCompleted,
    handleBlankClick,
    errorValue,
    blankValue,
    setBlankValue,
    currentQuestion,
  } = useContext(CreateQuiz);

  return (
    <>
      {QuestionsData[currentQuestion].type === "Fill In The Blanks" && (
        <>
          <div className="free-choice">
               {/* Current Question */}
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <div className="fill-blank-input">
              <label htmlFor="text">
                <h3>Answer : </h3>
              </label>
              <input
                type="text"
                id="text"
                autoComplete="off"
                value={blankValue}
                disabled={errorValue}
                onChange={(e) => setBlankValue(e.target.value)}
                className={`blank-input
                        `}
              />
              {/* Button Checks if the answer of current question is right or wrong */}
              <button onClick={handleBlankClick} className={`blank-button ${isCompleted === true && "value-disabled"}`}>
                Click Here
              </button>
             <ErrorValueCheck/>
            </div>
          </div>
          <CheckButton />
        </>
      )}
    </>
  );
};

export default FillInTheBlanks;
