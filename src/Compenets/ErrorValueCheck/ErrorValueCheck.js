import React, { useContext } from "react";
import { CreateQuiz } from "../../Context";

const ErrorValueCheck = () => {
  // Getting Data from the Context
  const { errorValue } = useContext(CreateQuiz);
  
  return (
    <p
      className={`${errorValue === "Right" ? "green" : ""} ${
        errorValue === "Wrong" ? "red" : ""
      }`}
    >
      {errorValue}
    </p>
  );
};

export default ErrorValueCheck;
