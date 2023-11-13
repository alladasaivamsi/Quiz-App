import React, { useContext } from "react";
import { CreateQuiz } from "../../Context";
import "./FinishButton.css";

const FinishButton = () => {
  // Getting Data from the Context
  const { finishQuestion } = useContext(CreateQuiz);
  
  return (
    <>
      {/* Finish Button to show the result page */}
      <button className="finishBtn" onClick={finishQuestion}>
        Finish
      </button>
    </>
  );
};

export default FinishButton;
