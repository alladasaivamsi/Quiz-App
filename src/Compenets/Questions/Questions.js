import React, { useContext } from "react";
import "./Questions.css";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { QuestionsData } from "../../QuestionsData";
import { CreateQuiz } from "../../Context";
import MultipleChoiceQuestions from "../QuestionsType/Multiple Choice Questions/MultipleChoiceQuestions";
import FreeChoice from "../QuestionsType/FreeChoice/FreeChoice";
import FillInTheBlanks from "../QuestionsType/FillInTheBlanks/FillInTheBlanks";
import ChooseRightOption from "../QuestionsType/ChooseRightOption/ChooseRightOption";
import OptionSorting from "../QuestionsType/OptionSorting/OptionSorting";
import TableMatching from "../QuestionsType/Table Matching/TableMatching";
import CompleteThePattern from "../QuestionsType/Complete The Pattern/CompleteThePattern";
import NextButton from "../NextButton/NextButton";
import { toast } from "react-toastify";
import FinishButton from "../FinishButton/FinishButton";

const Questions = () => {
  // Getting Data from the Context
  const {
    isFlaged,
    setIsFlaged,
    isCompleted,
    flag,
    setFlag,
    score,
    currentQuestion,
  } = useContext(CreateQuiz);

  return (
    <div className="container1">
      <div className="questions-container">
        <div className="score-data">
          {/* Shows Current Type of question */}
          <h1>
            Question Type :{" "}
            <span className="question-type">
              {QuestionsData[currentQuestion].type}
            </span>
          </h1>
          {/* Updated Score when current answer is right*/}
          <h1>
            Score : <span className="score">{score}</span>
          </h1>
        </div>
        <div className="heading">
          {/* Question Number */}
          <h1>
            Question No.{" "}
            <span className="question-type">
              {currentQuestion + 1} / {QuestionsData.length}
            </span>
          </h1>
          <div className="btns">
            {/* Flag buttons toggled when the current question is added or removed to the flaged array */}
            {/* Button Shows That how many questions are flaged */}
            <button className="flagListBtn">
              <TurnedInIcon /> {flag.length}
            </button>
            {/* removed the current question when we clicked this button when the question is in the flag array */}
            <button
              className={`flagBtn ${isCompleted === true && "checkDisabled"}`}
              disabled={isFlaged === false}
              onClick={() => {
                setFlag(
                  flag.filter((c) => c.id !== QuestionsData[currentQuestion].id)
                );
                setIsFlaged(false);
                toast.error("Flag Removed");
              }}
            >
              <TurnedInIcon /> Remove Flag
            </button>
             {/* added the current question when we clicked this button when we want this question to be added in the flag array */}
            <button
              className={`flagBtn ${isCompleted === true && "checkDisabled"}`}
              disabled={isFlaged === true}
              onClick={() => {
                setFlag([...flag, QuestionsData[currentQuestion]]);
                setIsFlaged(true);
                toast.success("Flag for Later");
              }}
            >
              <TurnedInNotIcon /> Flag for later
            </button>
          </div>
        </div>
        {/* Type of Questions */}
        <div className="main-container">
          <MultipleChoiceQuestions />
          <FreeChoice />
          <FillInTheBlanks />
          <ChooseRightOption />
          <OptionSorting />
          <TableMatching />
          <CompleteThePattern />
        </div>
        {/* Finish button when we want to finish the quiz */}
        <div className="finishButton">
          <FinishButton />
        </div>
        {/* Button to change to Next Question */}
        <div className="nextButton">
          <NextButton />
        </div>
      </div>
    </div>
  );
};

export default Questions;
