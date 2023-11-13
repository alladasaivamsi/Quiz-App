import "./App.css";
import Context from "./Context";
import Quiz from "./Compenets/Quiz/Quiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  var cursor;
  var cursorPointer;

  // Cursor and Cursor Pointer 
  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });
  }, []);

  return (
    <div className="App">
      {/* Cursor and Cursor Pointer  */}
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
      <ToastContainer />
      <Context>
        <Quiz />
      </Context>
    </div>
  );
}

export default App;
