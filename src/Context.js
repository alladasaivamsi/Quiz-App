import React, { createContext, useEffect, useState } from "react";
import { QuestionsData } from "./QuestionsData";
import "./Compenets/Questions/Questions.css";
import errorSound from "../src/Sounds/errorSound.mp3";
import successSound from "../src/Sounds/successSound.mp3";
import { toast } from "react-toastify";

export const CreateQuiz = createContext();

const Context = ({ children }) => {
  // useStates
  // useState for checkValue
  const [checkValue, setCheckValue] = useState(
    JSON.parse(localStorage.getItem("checkValue")) || 6
  );

  // useState for value
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("value")) || ""
  );

  // useState for errorValue
  const [errorValue, setErrorValue] = useState(
    JSON.parse(localStorage.getItem("errorValue")) || ""
  );

  // useState for blankValue
  const [blankValue, setBlankValue] = useState(
    JSON.parse(localStorage.getItem("blankValue")) || ""
  );

  // useState for patternValue1
  const [patternValue1, setPatternValue1] = useState(
    JSON.parse(localStorage.getItem("patternValue1")) || ""
  );

  // useState for flag
  const [flag, setFlag] = useState(
    () => JSON.parse(localStorage.getItem("flagData")) || []
  );

  // useState for currentQuestion
  const [currentQuestion, setCurrentQuestion] = useState(
    JSON.parse(localStorage.getItem("currentQuestion")) || 0
  );

  // useState for score
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || 0
  );

  // useState for clickedOption
  const [clickedOption, setClickedOption] = useState(
    JSON.parse(localStorage.getItem("clickedOption")) || 0
  );

  // useState for showResult
  const [showResult, setShowResult] = useState(
    JSON.parse(localStorage.getItem("showResult")) || false
  );

  // useState for isFlaged
  const [isFlaged, setIsFlaged] = useState(
    JSON.parse(localStorage.getItem("isFlaged")) || false
  );

  // useState for isCompleted
  const [isCompleted, setIsCompleted] = useState(
    JSON.parse(localStorage.getItem("isCompleted")) || false
  );

  // useState for dragArray
  const [dragArray, setDragArray] = useState([]);

  // useState for tableArray
  const [tableArray, setTableArray] = useState([]);

  // useEffects
  // useEffect for flagData
  useEffect(() => {
    localStorage.setItem("flagData", JSON.stringify(flag));
  }, [flag]);

  // useEffect for value
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);

  // useEffect for isCompleted
  useEffect(() => {
    localStorage.setItem("isCompleted", JSON.stringify(isCompleted));
  }, [isCompleted]);

  // useEffect for checkValue
  useEffect(() => {
    localStorage.setItem("checkValue", JSON.stringify(checkValue));
  }, [checkValue]);

  // useEffect for score
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  // useEffect for blankValue
  useEffect(() => {
    localStorage.setItem("blankValue", JSON.stringify(blankValue));
  }, [blankValue]);

  // useEffect for patternValue1
  useEffect(() => {
    localStorage.setItem("patternValue1", JSON.stringify(patternValue1));
  }, [patternValue1]);

  // useEffect for errorValue
  useEffect(() => {
    localStorage.setItem("errorValue", JSON.stringify(errorValue));
  }, [errorValue]);

  // useEffect for currentQuestion
  useEffect(() => {
    localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
  }, [currentQuestion]);

  // useEffect for clickedOption
  useEffect(() => {
    localStorage.setItem("clickedOption", JSON.stringify(clickedOption));
  }, [clickedOption]);

  // useEffect for isFlaged
  useEffect(() => {
    localStorage.setItem("isFlaged", JSON.stringify(isFlaged));
  }, [isFlaged]);

  // useEffect for showResult
  useEffect(() => {
    localStorage.setItem("showResult", JSON.stringify(showResult));
  }, [showResult]);

  // useEffect for DragArray
  useEffect(() => {
    setDragArray(QuestionsData[currentQuestion].options);
  }, []);

  useEffect(() => {
    localStorage.setItem("dragArray", JSON.stringify(dragArray));
  }, [dragArray]);

  // useEffect for TableArray
  useEffect(() => {
    setTableArray(QuestionsData[currentQuestion].options);
  }, []);

  useEffect(() => {
    localStorage.setItem("tableArray", JSON.stringify(tableArray));
  }, [tableArray]);

  // function for checkButton
  // if we click this check button , handleCheckBuuton function will execute
  const handleCheckBuuton = () => {
    setScore(score + 1);
    setCheckValue(checkValue - 1);
    setBlankValue(QuestionsData[currentQuestion].answer);
    setPatternValue1(QuestionsData[currentQuestion].answer);
    setValue(QuestionsData[currentQuestion].answer);
    setClickedOption(QuestionsData[currentQuestion].answer);
    setDragArray(QuestionsData[currentQuestion].answer);
    setTableArray(QuestionsData[currentQuestion].answer);
    setIsCompleted(true);
    setErrorValue("Right");
    new Audio(successSound).play();
    toast.success("Correct Answer");
  };

  // function for nextQuestion
  // if we click this next button on every question, nextQuestion function will execute
  const nextQuestion = () => {
    refreshPage();
    setBlankValue("");
    setErrorValue("");
    setPatternValue1("");
    setValue("");
    if (currentQuestion < QuestionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setDragArray(QuestionsData[currentQuestion + 1].options);
      setTableArray(QuestionsData[currentQuestion + 1].options);
      setIsCompleted(false);
      setClickedOption(0);
    }
  };

  // function for finishQuestion
  // if we click this finish button, finishQuestion function will execute and its show the result
  const finishQuestion = () => {
    setShowResult(true);
    setIsCompleted(true);
  };

  // function for refresh the page
  function refreshPage() {
    window.location.reload(false);
  }

  // when we click the play again button in the result page , it returns to first question
  const tryAgain = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setIsCompleted(false);
    setFlag([]);
    setCheckValue(6);
  };

  // handleCheck function executes when we click the option in "MUltiple Choice Questions" and "Choose Right Option" it shows that wheather we are clicked right option or wrong option
  const handleCheck = (i) => {
    setClickedOption(i + 1);
    setIsCompleted(true);
    if (i + 1 === QuestionsData[currentQuestion].answer) {
      setScore(score + 1);
      new Audio(successSound).play();
      toast.success("Correct Answer");
    } else if (i + 1 !== QuestionsData[currentQuestion].answer) {
      new Audio(errorSound).play();
      toast.error("Wrong Answer");
    }
  };

  // handleBlankClick function executes when we click the "click here" button after filled the blank in "Fill in the Blank" Questions it shows that wheather we are filled the right answer or wrong answer
  const handleBlankClick = () => {
    if (
      blankValue !== "" &&
      blankValue.toLowerCase() ===
        QuestionsData[currentQuestion].answer.toLowerCase()
    ) {
      setScore(score + 1);
      setErrorValue("Right");
      setIsCompleted(true);
      new Audio(successSound).play();
      toast.success("Correct Answer");
    } else {
      setErrorValue("Wrong");
      setIsCompleted(true);
      new Audio(errorSound).play();
      toast.error("Wrong Answer");
    }
  };

   // handlePatternCheck function executes when we click the clcik here button after filled the blank in "Complete The Pattern" Questions it shows that wheather we are filled the right answer or wrong answer
  const handlePatternCheck = () => {
    if (
      patternValue1 !== "" &&
      patternValue1 === QuestionsData[currentQuestion].answer
    ) {
      setScore(score + 1);
      setErrorValue("Right");
      setIsCompleted(true);
      new Audio(successSound).play();
      toast.success("Correct Answer");
    } else {
      setErrorValue("Wrong");
      setIsCompleted(true);
      new Audio(errorSound).play();
      toast.error("Wrong Answer");
    }
  };

  // handleValueClick function executes when we click the clcik here button after filled the blank in "Free Choice" Questions it shows that wheather we are filled the right answer or wrong answer
  const handleValueClick = () => {
    if (value !== "" && value === QuestionsData[currentQuestion].answer) {
      setScore(score + 1);
      setErrorValue("Right");
      setIsCompleted(true);
      toast.success("Correct Answer");
      new Audio(successSound).play();
    } else {
      setErrorValue("Wrong");
      setIsCompleted(true);
      new Audio(errorSound).play();
      toast.error("Wrong Answer");
    }
  };

  return (
    <CreateQuiz.Provider
      value={{
        finishQuestion,
        isFlaged,
        successSound,
        errorSound,
        handlePatternCheck,
        tableArray,
        setTableArray,
        setScore,
        dragArray,
        setDragArray,
        handleValueClick,
        handleBlankClick,
        errorValue,
        setErrorValue,
        checkValue,
        handleCheckBuuton,
        patternValue1,
        setPatternValue1,
        blankValue,
        setBlankValue,
        value,
        setValue,
        setIsFlaged,
        isFlaged,
        handleCheck,
        isCompleted,
        setIsCompleted,
        flag,
        setFlag,
        tryAgain,
        nextQuestion,
        showResult,
        score,
        currentQuestion,
        setClickedOption,
        clickedOption,
        setCurrentQuestion,
      }}
    >
      {children}
    </CreateQuiz.Provider>
  );
};

export default Context;
