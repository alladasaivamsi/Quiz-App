import React, { useContext } from "react";
import { CreateQuiz } from "../../../Context";
import { QuestionsData } from "../../../QuestionsData";
import ErrorValueCheck from "../../ErrorValueCheck/ErrorValueCheck";
import CheckButton from "../../CheckButton/CheckButton";


const CompleteThePattern = () => {
  // Getting Data from the Context
  const {
    isCompleted,
    handlePatternCheck,
    errorValue,
    patternValue1,
    setPatternValue1,
    currentQuestion,
  } = useContext(CreateQuiz);

  return (
    <>
      {QuestionsData[currentQuestion].type === "Complete The Pattern" && (
        <>
          <div className="pattern">
            <>
              {QuestionsData[currentQuestion].options.map((que, i) => {
                return (
                  <>
                    <h1>
                      {/* question options have options */}
                      {que !== null && que}
                      {/* question options having input feilds that means options are empty*/}
                      {que == "" && (
                        <input
                          type="number"
                          id="text"
                          autoComplete="off"
                          value={patternValue1}
                          disabled={errorValue}
                          onChange={(e) => setPatternValue1(e.target.value)}
                          className={`pattern-input
                                `}
                        />
                      )}
                    </h1>
                  </>
                );
              })}
            </>
            {/* Button Checks if the answer of current question is right or wrong */}
            <button
              onClick={handlePatternCheck}
              className={`blank-button ${
                isCompleted === true && "value-disabled"
              }`}
            >
              Click Here
            </button>
            <ErrorValueCheck />
          </div>
          <CheckButton />
        </>
      )}
    </>
  );
};

export default CompleteThePattern;
