import React, { useContext, useRef } from "react";
import { CreateQuiz } from "../../../Context";
import { QuestionsData } from "../../../QuestionsData";
import ErrorValueCheck from "../../ErrorValueCheck/ErrorValueCheck";
import CheckButton from "../../CheckButton/CheckButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import errorSound from "../../../Sounds/errorSound.mp3";
import successSound from "../../../Sounds/successSound.mp3";
import "./OptionSorting.css";
import { toast } from "react-toastify";

const OptionSorting = () => {
  // Getting Data from the Context
  const {
    isCompleted,
    setScore,
    setIsCompleted,
    dragArray,
    setDragArray,
    setErrorValue,
    score,
    currentQuestion,
  } = useContext(CreateQuiz);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // function to sort the Options
  const handleSort = () => {
    let items = [...dragArray];
    const draggedItemContent = items.splice(dragItem.current, 1)[0];
    items.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setDragArray(items);
  };

  // function to check that sorted options that are correctly matched or not
  const handleDragCheck = () => {
    for (let i = 0; i < dragArray.length; i++) {
      // if sorted options that are correctly matched 
      if (QuestionsData[currentQuestion].answer[i] === dragArray[i]) {
        setErrorValue("Right");
        setIsCompleted(true);
        setScore(score + 1);
        new Audio(successSound).play();
        toast.success("Correct Answer")
      } 
      // if sorted options that are not correctly matched 
      else if (QuestionsData[currentQuestion].answer[i] !== dragArray[i]) {
        setScore(score);
        setErrorValue("Wrong");
        setIsCompleted(true);
        new Audio(errorSound).play();
        toast.error("Wrong Answer")
      }
    }
  };
  
  return (
    <>
      {QuestionsData[currentQuestion].type === "Option Sorting" && (
        <>
          <div className="draggle-section">
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <div className="draggle-options">
              {dragArray.map((option, i) => {
                return (
                  <div
                    draggable
                    key={i}
                    className={`dragableItems`}
                    onDragStart={(e) => (dragItem.current = i)}
                    onDragEnter={(e) => (dragOverItem.current = i)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <h3>{option}</h3>
                    <MoreVertIcon />
                  </div>
                );
              })}
            </div>
             {/* Click this button after sorting is completed */}
            <button onClick={handleDragCheck} className={`value-button ${isCompleted === true && "value-disabled"}`}>
              Click Here After Sorting
            </button>
          </div>
          <ErrorValueCheck/>
          <CheckButton />
        </>
      )}
    </>
  );
};

export default OptionSorting;
