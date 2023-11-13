import React, { useContext, useEffect } from "react";
import Questions from "../Questions/Questions";
import "./Quiz.css";
import QuizResultPage from "../QuizResultPage/QuizResultPage";
import { CreateQuiz } from "../../Context";

const Quiz = () => {
  // Getting Data from the Context
  const { showResult } = useContext(CreateQuiz);

  return (
    <div className="container">
      {showResult ? (
        <QuizResultPage />
      ) : (
        <>
          <Questions />
        </>
      )}
    </div>
  );
};
export default Quiz;
