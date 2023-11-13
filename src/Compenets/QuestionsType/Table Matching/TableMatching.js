import React, { useContext, useRef } from "react";
import { CreateQuiz } from "../../../Context";
import { QuestionsData } from "../../../QuestionsData";
import ErrorValueCheck from "../../ErrorValueCheck/ErrorValueCheck";
import CheckButton from "../../CheckButton/CheckButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import errorSound from "../../../Sounds/errorSound.mp3";
import successSound from "../../../Sounds/successSound.mp3";
import "./TableMatching.css";
import { toast } from "react-toastify";

const TableMatching = () => {
  // Getting Data from the Context
  const {
    isCompleted,
    tableArray,
    setTableArray,
    setScore,
    setIsCompleted,
    setErrorValue,
    score,
    currentQuestion,
  } = useContext(CreateQuiz);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // function to sort the table
  const tableSort = () => {
    let tableItems = [...tableArray];
    const draggedItemContent = tableItems.splice(dragItem.current, 1)[0];
    tableItems.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTableArray(tableItems);
  };

  // function to check that sorted table and images table
  const handleTableCheck = () => {
    for (let i = 0; i < tableArray.length; i++) {
      // if sorted table data and images table data are equal
      if (QuestionsData[currentQuestion].answer[i] === tableArray[i]) {
        setErrorValue("Right");
        setIsCompleted(true);
        new Audio(successSound).play();
        setScore(score + 1);
        toast.success("Correct Answer");
      }
      // if sorted table data and images table data are not equal
      else if (QuestionsData[currentQuestion].answer[i] !== tableArray[i]) {
        setScore(score);
        setErrorValue("Wrong");
        setIsCompleted(true);
        new Audio(errorSound).play();
        toast.error("Wrong Answer");
      }
    }
  };
  return (
    <>
      {QuestionsData[currentQuestion].type === "Table Matching" && (
        <>
          <div className="draggle-section">
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <table>
              <tr className="table-drag-options">
                <td>
                  {QuestionsData[currentQuestion].images.map((option, i) => {
                    return <img src={option} className="image" />;
                  })}
                </td>
                <td>
                  {tableArray.map((option, i) => {
                    return (
                      <div
                        draggable
                        key={i}
                        className={`tableItems`}
                        onDragStart={(e) => (dragItem.current = i)}
                        onDragEnter={(e) => (dragOverItem.current = i)}
                        onDragEnd={tableSort}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        <h1>{option}</h1>
                        <MoreVertIcon />
                      </div>
                    );
                  })}
                </td>
              </tr>
            </table>
            {/* Click this button after sorting is completed */}
            <button
              onClick={handleTableCheck}
              className={`value-button ${
                isCompleted === true && "value-disabled"
              }`}
            >
              Click Here After Sorting
            </button>
          </div>
          <ErrorValueCheck />
          <CheckButton />
        </>
      )}
    </>
  );
};

export default TableMatching;
