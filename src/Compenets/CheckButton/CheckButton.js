import React, { useContext } from "react";
import { CreateQuiz } from "../../Context";

const CheckButton = () => {
  // Getting Data from the Context
  const { checkValue, handleCheckBuuton, isCompleted } = useContext(CreateQuiz);

  return (
    <>
      <div
        className={`check ${isCompleted === true && "checkDisabled"} ${
          checkValue === 1 && "checkDisabled"
        }`}
      >
        {/* Check button to display the answer and score is updated */}
        <button
          className={`checkBtn ${checkValue === 1 && "checkDisabled"}`}
          onClick={handleCheckBuuton}
        >
          Check
        </button>
        {/* Shows Number of Attempts Left Upto Now */}
        <p>{checkValue} attempts left</p>
      </div>
    </>
  );
};

export default CheckButton;
