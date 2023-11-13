import React, { useContext } from "react";
import "./QuizResultPage.css";
import Congratulations from "../../Images/Congratulations Image.jpg";
import { QuestionsData } from "../../QuestionsData";
import { CreateQuiz } from "../../Context";

const QuizResultPage = () => {
  // Getting Data from the Context
  const { tryAgain, score } = useContext(CreateQuiz);

  return (
    <div className="quizResult">
      <div className="quizResultPage">
        {/* Shows the data of your score (total number of questions attempted) and total number of questions  */}
        <div>
          <img src={Congratulations} className="resultImage" />
          <h1>
            Your Score : <span className="resultScore">{score}</span>
          </h1>
          <h1>
            Total Number Of Questions :{" "}
            <span className="resultScore">{QuestionsData.length}</span>
          </h1>
        </div>
        {/* click the button to play again  */}
        <button onClick={tryAgain} className="playAgainBtn">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizResultPage;
